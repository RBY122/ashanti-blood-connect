import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blood-red">Blood Bridge</h1>
              <p className="text-xs text-muted-foreground">Ashanti Region</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-blood-red transition-colors">
              Home
            </a>
            <a href="#donate" className="text-foreground hover:text-blood-red transition-colors">
              Donate
            </a>
            <a href="#emergency" className="text-foreground hover:text-blood-red transition-colors">
              Emergency
            </a>
            <a href="#education" className="text-foreground hover:text-blood-red transition-colors">
              Learn
            </a>
            <a href="#forum" className="text-foreground hover:text-blood-red transition-colors">
              Forum
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emergency rounded-full"></span>
            </Button>
            <Button variant="outline">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button variant="donate">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col space-y-4 py-4 border-t border-border">
            <a href="#home" className="text-foreground hover:text-blood-red transition-colors">
              Home
            </a>
            <a href="#donate" className="text-foreground hover:text-blood-red transition-colors">
              Donate
            </a>
            <a href="#emergency" className="text-foreground hover:text-blood-red transition-colors">
              Emergency
            </a>
            <a href="#education" className="text-foreground hover:text-blood-red transition-colors">
              Learn
            </a>
            <a href="#forum" className="text-foreground hover:text-blood-red transition-colors">
              Forum
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button variant="donate" className="w-full">
                Donate Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;