import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ujiLogo from '@/assets/uji-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-glass transform transition-transform group-hover:scale-105 duration-300 overflow-hidden bg-white">
              <img src={ujiLogo} alt="UJI Logo" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary font-serif">UJI</h1>
              <p className="text-sm text-university-text-muted font-medium">Excellence in Education</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-foreground/80 hover:text-primary transition-smooth font-medium relative group">
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#tentang" className="text-foreground/80 hover:text-primary transition-smooth font-medium relative group">
              Tentang
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#struktur" className="text-foreground/80 hover:text-primary transition-smooth font-medium relative group">
              Struktur Organisasi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button 
              onClick={() => window.location.href = '/kontak'}
              className="bg-gradient-primary hover:shadow-elegant transform hover:scale-105 transition-all duration-300 px-6 py-2 font-semibold"
            >
              Kontak
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-secondary/50 rounded-xl transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-border/30 animate-fade-in">
            <nav className="flex flex-col space-y-6">
              <a href="#beranda" className="text-foreground/80 hover:text-primary transition-smooth font-medium px-2 py-1 rounded-lg hover:bg-secondary/30">
                Beranda
              </a>
              <a href="#tentang" className="text-foreground/80 hover:text-primary transition-smooth font-medium px-2 py-1 rounded-lg hover:bg-secondary/30">
                Tentang
              </a>
              <a href="#struktur" className="text-foreground/80 hover:text-primary transition-smooth font-medium px-2 py-1 rounded-lg hover:bg-secondary/30">
                Struktur Organisasi
              </a>
              <Button 
                onClick={() => window.location.href = '/kontak'}
                className="bg-gradient-primary hover:shadow-elegant transform hover:scale-105 transition-all duration-300 w-fit px-6 py-2 font-semibold"
              >
                Kontak
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;