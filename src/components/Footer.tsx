import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import beeLogo from "@/assets/bee-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={beeLogo} alt="Bee I4.0 Logo" className="h-8 w-auto object-contain" />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Bee I4.0
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Intelligent Automation
              <br />
              for Modern Businesses
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Our Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Business Process Automation</li>
              <li>AI-Powered Support Agent</li>
              <li>Business Intelligence</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@beei40.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bee I4.0. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;