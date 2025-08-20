import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <img src="/LOGOPLANCONTRI.png" alt="PLANCONTRI Logo" className="h-8" />
        </a>
        <nav className="flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
            <a
              href="#servicios"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('servicios');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Servicios
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
            <a
              href="#sobre-nosotros"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('sobre-nosotros');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Sobre Nosotros
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
            <a
              href="#testimonios"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('testimonios');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Testimonios
            </a>
          </Button>
          <Button asChild style={{ backgroundColor: '#7A1F1F', color: '#fff' }} className="hover:brightness-90">
            <a
              href="#contacto"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('contacto');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contacto
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;