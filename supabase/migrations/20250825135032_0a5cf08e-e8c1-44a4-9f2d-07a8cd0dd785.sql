-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  blood_type TEXT CHECK (blood_type IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  phone TEXT,
  location TEXT,
  avatar_url TEXT,
  is_donor BOOLEAN DEFAULT true,
  last_donation_date DATE,
  is_eligible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Create emergency requests table
CREATE TABLE public.emergency_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hospital_name TEXT NOT NULL,
  blood_type TEXT NOT NULL CHECK (blood_type IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  urgency TEXT NOT NULL CHECK (urgency IN ('CRITICAL', 'URGENT', 'MODERATE')),
  units_needed INTEGER NOT NULL,
  description TEXT,
  location TEXT,
  distance DECIMAL(5,2),
  contact_phone TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'fulfilled', 'expired')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '24 hours')
);

-- Create donations table
CREATE TABLE public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  blood_type TEXT NOT NULL,
  units_donated INTEGER DEFAULT 1,
  donation_center TEXT,
  donation_date DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create responses table for emergency requests
CREATE TABLE public.emergency_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES public.emergency_requests(id) ON DELETE CASCADE,
  donor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'declined', 'completed')),
  message TEXT,
  estimated_arrival TIME,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(request_id, donor_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_responses ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" 
ON public.profiles FOR SELECT 
USING (true);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id);

-- Emergency requests policies
CREATE POLICY "Emergency requests are viewable by everyone" 
ON public.emergency_requests FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create emergency requests" 
ON public.emergency_requests FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Users can update their own emergency requests" 
ON public.emergency_requests FOR UPDATE 
USING (auth.uid() = created_by);

-- Donations policies
CREATE POLICY "Users can view their own donations" 
ON public.donations FOR SELECT 
USING (auth.uid() = donor_id);

CREATE POLICY "Users can insert their own donations" 
ON public.donations FOR INSERT 
WITH CHECK (auth.uid() = donor_id);

-- Emergency responses policies
CREATE POLICY "Users can view responses to their requests" 
ON public.emergency_responses FOR SELECT 
USING (
  auth.uid() = donor_id OR 
  auth.uid() IN (
    SELECT created_by FROM public.emergency_requests 
    WHERE id = request_id
  )
);

CREATE POLICY "Authenticated users can respond to emergencies" 
ON public.emergency_responses FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = donor_id);

CREATE POLICY "Users can update their own responses" 
ON public.emergency_responses FOR UPDATE 
USING (auth.uid() = donor_id);

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for emergency requests
ALTER TABLE public.emergency_requests REPLICA IDENTITY FULL;
ALTER TABLE public.emergency_responses REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.emergency_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.emergency_responses;