import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blood-red">Blood Bridge</h3>
                <p className="text-xs text-muted-foreground">Ashanti Region</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Connecting donors, hospitals, and communities to save lives across Ghana's Ashanti Region through efficient blood donation coordination.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#donate" className="text-muted-foreground hover:text-blood-red transition-colors">Donate Blood</a></li>
              <li><a href="#emergency" className="text-muted-foreground hover:text-blood-red transition-colors">Emergency Requests</a></li>
              <li><a href="#education" className="text-muted-foreground hover:text-blood-red transition-colors">Learn & Resources</a></li>
              <li><a href="#forum" className="text-muted-foreground hover:text-blood-red transition-colors">Community Forum</a></li>
              <li><a href="#hospitals" className="text-muted-foreground hover:text-blood-red transition-colors">Partner Hospitals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#faq" className="text-muted-foreground hover:text-blood-red transition-colors">FAQ</a></li>
              <li><a href="#eligibility" className="text-muted-foreground hover:text-blood-red transition-colors">Eligibility Check</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-blood-red transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-blood-red transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-blood-red transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-ghana-gold flex-shrink-0" />
                <span className="text-muted-foreground">Kumasi, Ashanti Region, Ghana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-life-green flex-shrink-0" />
                <span className="text-muted-foreground">+233 32 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-medical-blue flex-shrink-0" />
                <span className="text-muted-foreground">info@bloodbridge.gh</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Emergency Hotline</h5>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emergency" />
                <span className="font-bold text-emergency">+233 32 URGENT (874368)</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Blood Bridge Ghana. All rights reserved. Powered by love for life.
          </div>
          <div className="text-sm text-muted-foreground">
            Licensed by Ghana Health Service | Regulated Medical Platform
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;