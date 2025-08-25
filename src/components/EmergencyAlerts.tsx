import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, MapPin, Phone, Heart } from 'lucide-react';

const EmergencyAlerts = () => {
  const emergencyRequests = [
    {
      id: 1,
      hospital: "Komfo Anokye Teaching Hospital",
      bloodType: "O-",
      urgency: "CRITICAL",
      timeAgo: "2 min ago",
      distance: "3.2 km",
      needed: "3 units",
      description: "Emergency surgery - multiple trauma patients"
    },
    {
      id: 2,
      hospital: "Okomfo Anokye Hospital",
      bloodType: "AB+",
      urgency: "URGENT",
      timeAgo: "15 min ago", 
      distance: "5.7 km",
      needed: "2 units",
      description: "Complications during childbirth"
    },
    {
      id: 3,
      hospital: "St. Michael's Hospital",
      bloodType: "B-",
      urgency: "MODERATE",
      timeAgo: "1 hour ago",
      distance: "8.1 km", 
      needed: "1 unit",
      description: "Planned surgery - backup needed"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'CRITICAL': return 'text-emergency';
      case 'URGENT': return 'text-destructive';
      case 'MODERATE': return 'text-ghana-gold';
      default: return 'text-muted-foreground';
    }
  };

  const getUrgencyBg = (urgency: string) => {
    switch (urgency) {
      case 'CRITICAL': return 'bg-emergency/10 border-emergency/20';
      case 'URGENT': return 'bg-destructive/10 border-destructive/20';
      case 'MODERATE': return 'bg-ghana-gold/10 border-ghana-gold/20';
      default: return 'bg-muted/10 border-border';
    }
  };

  return (
    <section id="emergency" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-emergency mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Emergency Blood Requests
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lives depend on your quick response. Check urgent blood requests from hospitals across the Ashanti Region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {emergencyRequests.map((request) => (
            <Card key={request.id} className={`p-6 transition-all duration-300 hover:shadow-emergency ${getUrgencyBg(request.urgency)}`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${getUrgencyColor(request.urgency)} bg-current/10`}>
                  🚨 {request.urgency}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {request.timeAgo}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">{request.hospital}</h3>
              <p className="text-muted-foreground text-sm mb-4">{request.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Blood Type:</span>
                  <span className="font-bold text-blood-red text-lg">{request.bloodType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Units Needed:</span>
                  <span className="font-semibold">{request.needed}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Distance:
                  </span>
                  <span className="font-semibold">{request.distance}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  variant={request.urgency === 'CRITICAL' ? 'emergency' : 'donate'} 
                  className="flex-1"
                  onClick={() => {
                    alert(`Emergency response for ${request.hospital} will be available once Supabase is connected for real-time coordination.`);
                  }}
                >
                  <Heart className="w-4 h-4" />
                  Respond
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    alert(`Calling ${request.hospital} directly...`);
                  }}
                >
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Emergency Requests
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyAlerts;