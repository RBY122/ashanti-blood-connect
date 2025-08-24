import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Video, Users, Award, ArrowRight } from 'lucide-react';

const EducationHub = () => {
  const educationContent = [
    {
      id: 1,
      type: 'article',
      title: "Blood Donation Eligibility in Ghana",
      description: "Learn about the requirements and guidelines for safe blood donation in Ghana's medical system.",
      icon: BookOpen,
      readTime: "5 min read",
      category: "Guidelines"
    },
    {
      id: 2,
      type: 'video',
      title: "The Blood Donation Process",
      description: "Watch a step-by-step guide of what happens during your blood donation appointment.",
      icon: Video,
      readTime: "8 min watch",
      category: "Process"
    },
    {
      id: 3,
      type: 'myth',
      title: "Myths vs Facts About Blood Donation",
      description: "Debunking common misconceptions about blood donation with medical facts.",
      icon: Users,
      readTime: "7 min read",
      category: "Education"
    },
    {
      id: 4,
      type: 'achievement',
      title: "Blood Donation Benefits",
      description: "Discover the health benefits for donors and the life-saving impact on recipients.",
      icon: Award,
      readTime: "4 min read",
      category: "Benefits"
    }
  ];

  const bloodTypes = [
    { type: 'O-', percentage: '6.6%', compatibility: 'Universal Donor', color: 'text-emergency' },
    { type: 'O+', percentage: '37.4%', compatibility: 'Most Common', color: 'text-blood-red' },
    { type: 'A+', percentage: '35.7%', compatibility: 'High Demand', color: 'text-life-green' },
    { type: 'A-', percentage: '6.3%', compatibility: 'Rare Type', color: 'text-ghana-gold' },
    { type: 'B+', percentage: '8.5%', compatibility: 'Important', color: 'text-medical-blue' },
    { type: 'B-', percentage: '1.5%', compatibility: 'Very Rare', color: 'text-destructive' },
    { type: 'AB+', percentage: '3.4%', compatibility: 'Universal Recipient', color: 'text-accent' },
    { type: 'AB-', percentage: '0.6%', compatibility: 'Extremely Rare', color: 'text-muted-foreground' }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Knowledge Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn everything you need to know about blood donation, eligibility, and the life-saving impact of your contribution.
          </p>
        </div>

        {/* Educational Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {educationContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <Card key={content.id} className="p-6 hover:shadow-soft transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blood-red transition-colors">
                  {content.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{content.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blood-red group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Blood Type Compatibility Chart */}
        <div className="bg-card rounded-2xl shadow-soft border p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Blood Type Distribution in Ghana
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {bloodTypes.map((blood) => (
              <div key={blood.type} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${blood.color}`}>
                  {blood.type}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {blood.percentage}
                </div>
                <div className="text-xs text-muted-foreground">
                  {blood.compatibility}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <h4 className="font-semibold mb-2">Did You Know?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Type O- blood is the universal donor type and can be given to patients of any blood type in emergencies. 
              Only 6.6% of the population has this rare but crucial blood type.
            </p>
            <Button variant="medical" size="sm">
              Learn More About Compatibility
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="ghana" size="lg">
            <BookOpen className="w-5 h-5" />
            Explore All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationHub;