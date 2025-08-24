import Hero from '@/components/Hero';
import EmergencyAlerts from '@/components/EmergencyAlerts';
import EducationHub from '@/components/EducationHub';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmergencyAlerts />
      <EducationHub />
      <Footer />
    </div>
  );
};

export default Index;
