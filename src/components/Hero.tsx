import { Button } from '@/components/ui/button';
import { Heart, MapPin, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/hero-blood-donation.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Blood donation in Ghana" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-ghana-gold" />
              <span className="text-sm font-medium text-muted-foreground">
                Serving Ashanti Region, Ghana
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blood-red">Save Lives</span>
              <br />
              <span className="text-foreground">One Drop</span>
              <br />
              <span className="text-ghana-gold">At A Time</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Connect with blood banks, hospitals, and fellow donors across the Ashanti Region. 
              Together, we can ensure no life is lost due to blood shortage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Heart className="w-5 h-5" fill="currentColor" />
                Start Donating
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Find Blood
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blood-red mb-1">1,247</div>
                <div className="text-sm text-muted-foreground">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ghana-gold mb-1">856</div>
                <div className="text-sm text-muted-foreground">Active Donors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-life-green mb-1">12</div>
                <div className="text-sm text-muted-foreground">Partner Hospitals</div>
              </div>
            </div>
          </div>

          {/* Emergency Alert Card */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-2xl shadow-emergency border border-emergency/20 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-emergency">🚨 URGENT REQUEST</h3>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  2 min ago
                </span>
              </div>
              <p className="text-foreground mb-4">
                <strong>Komfo Anokye Teaching Hospital</strong> urgently needs <strong>O- blood type</strong> for emergency surgery.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>3.2 km away</span>
                </div>
                <Button variant="emergency" size="sm">
                  Respond Now
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl shadow-soft border p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-life-green" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Schedule Donation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Blood Banks
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;