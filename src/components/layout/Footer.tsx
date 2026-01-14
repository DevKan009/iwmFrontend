import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const handleDepartmentsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If already on home page, just scroll
    if (window.location.pathname === '/') {
      const element = document.getElementById('DepartmentsSection');
      if (element) {
        const headerOffset = 80; // Account for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      // Navigate to home page, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('DepartmentsSection');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dvneefjpi/image/upload/v1767773032/IWM_LOGO_ENHANCED_background_cleared_otc4tw.png"
                alt="IWM - Internship with Mayor"
                className="h-12 w-12 object-contain rounded-full bg-white p-0.5 shadow-sm"
              />
              <img
                src="https://res.cloudinary.com/dvneefjpi/image/upload/v1768325433/enhanced_IMC_logo_background_clear_kdywgz.png"
                alt="IWM - Internship with Mayor"
                className="h-12 w-12 object-contain rounded-full bg-white p-0.5 shadow-sm"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">Internship with Mayor</p>
                <p className="text-xs text-muted-foreground">Indore Municipal Corporation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering youth through civic engagement and hands-on experience in city governance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Program
              </Link>
              <Link to="/eligibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Eligibility & FAQ
              </Link>
              <Link to="/alumni" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Alumni Stories
              </Link>
            </nav>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Departments</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Urban Planning</span>
              <span className="text-sm text-muted-foreground">Public Health</span>
              <span className="text-sm text-muted-foreground">Smart City</span>
              <a
                href="/#DepartmentsSection"
                onClick={handleDepartmentsClick}
                className="text-sm text-civic-green hover:underline cursor-pointer"
              >
                View all 12 departments →
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Indore Municipal Corporation</p>
              <p>M.G. Road, Indore, M.P.</p>
              <p>India - 452001</p>
              <a href="mailto:iwmimcindore@gmail.com" className="text-civic-green hover:underline">
                iwmimcindore@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Indore Municipal Corporation. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
