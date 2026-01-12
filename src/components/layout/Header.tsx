import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import iwmLogo from "@/assets/iwm-logo.png";
import imcLogo from "@/assets/IMC_Indore- Logo.jpg";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About IWM" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/alumni", label: "Alumni" },
  // { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              src={iwmLogo}
              alt="IWM - Internship with Mayor"
              className="h-12 w-12 object-contain"
            />
            {/* Visual separator */}
            <div className="h-8 w-[1.5px] bg-border/60 rounded-full hidden xs:block" />
            <img
              src={imcLogo}
              alt="IMC - Indore Municipal Corporation"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground leading-tight">Internship with Mayor</p>
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Powered by IMC</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform" className="hidden lg:block">
            <Button variant="hero" size="sm" className="shadow-none">Register Now</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border mt-2">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSevZtptEtkpNbml4wzx4pvY5TtRDEJ3pBgIWhqZJSwJk9v75w/viewform" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="civic" className="w-full">Register</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
