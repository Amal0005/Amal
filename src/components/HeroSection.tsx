import { useState, useEffect } from "react";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import profileImage from "@/assets/me.jpg";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "MERN Stack Developer",
    "Frontend Specialist", 
    "Backend Engineer",
    "Full-Stack Creator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWorkspace})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 gradient-secondary opacity-60">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Soft aura highlight */}
      <div className="absolute inset-0 aura" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Copy */}
          <div className="md:mr-auto md:ml-0 text-center md:text-left space-y-6 animate-slide-up">
          
          {/* Mobile Profile Image */}
          <div className="flex md:hidden justify-center mb-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Amal N T - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
            </div>
          </div>
          
          {/* Greeting */}
          <p className="text-accent font-medium text-lg md:text-xl">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in tracking-tight leading-tight whitespace-nowrap text-shine">
            AMAL N T
          </h1>

          {/* Dynamic Role */}
          <div className="min-h-[2.5rem] flex items-center justify-center md:justify-start">
            <h2 className="text-base md:text-xl font-semibold text-foreground">
              {roles[currentRole]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
            Full-stack Web Developer skilled in React, Node.js, Express.js, TypeScript, and MongoDB. 
            Passionate about building scalable, high-performance web applications with clean architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-start items-center pt-2">
            <Button 
              onClick={() => scrollToSection('#projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 text-xs md:text-sm rounded-full hover-scale neon-glow w-full sm:w-auto"
            >
              View My Work
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-5 py-3 text-xs md:text-sm rounded-full hover-scale w-full sm:w-auto inline-flex items-center justify-center border"
            >
              View Resume
                            <ExternalLink className="ml-2 w-4 h-4" />

            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start items-center pt-4">
            <a
              href="https://github.com/Amal0005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover-scale"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/amal-nt-712b68247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover-scale"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:amalnt31@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover-scale"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

          {/* Stats */}

          </div>

          {/* Right: Profile Image */}
          <div className="relative hidden md:flex justify-center items-center h-[360px]">
            <div className="relative">
              {/* Profile image with decorative frame */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl hover-scale">
                <img 
                  src={profileImage} 
                  alt="Amal N T - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Full-Stack
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                MERN
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('#about')}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-accent" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/30 rounded-full float opacity-50" />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/20 rounded-full float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 border border-primary/30 rotate-45 float opacity-40" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;