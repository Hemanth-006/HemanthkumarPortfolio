import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[hsl(245_80%_70%/0.1)] mt-24">
      <div className="absolute inset-0 opacity-30"
           style={{ background: 'linear-gradient(to top, hsl(245 80% 70% / 0.05), transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white"
                   style={{ background: 'linear-gradient(135deg, hsl(245 80% 70%), hsl(38 95% 60%))' }}>
                HK
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-white">Hemanth</span>
                <span className="gradient-text">kumar</span>
              </span>
            </Link>
            <p className="text-[hsl(220_10%_55%)] text-sm leading-relaxed max-w-xs">
              SEO Specialist & Developer crafting data-driven digital strategies that drive measurable organic growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Experience', path: '/experience' },
                { label: 'Skills & Certifications', path: '/skills' },
                { label: 'About Me', path: '/about' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[hsl(220_10%_55%)] hover:text-[hsl(245_80%_75%)] text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:shemanthkumar2006@gmail.com"
                   className="flex items-center gap-2 text-[hsl(220_10%_55%)] hover:text-[hsl(245_80%_75%)] text-sm transition-colors duration-200">
                  <Mail size={14} />
                  shemanthkumar2006@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919345752697"
                   className="flex items-center gap-2 text-[hsl(220_10%_55%)] hover:text-[hsl(245_80%_75%)] text-sm transition-colors duration-200">
                  <Phone size={14} />
                  +91-9345752697
                </a>
              </li>
              <li className="flex items-center gap-2 text-[hsl(220_10%_55%)] text-sm">
                <MapPin size={14} />
                Chennai, Tamil Nadu, India
              </li>
              <li>
                <a href="https://www.linkedin.com/in/itsmehemanthkumar/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-[hsl(220_10%_55%)] hover:text-[hsl(245_80%_75%)] text-sm transition-colors duration-200">
                  <Linkedin size={14} />
                  linkedin.com/in/itsmehemanthkumar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[hsl(245_80%_70%/0.1)] mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(220_10%_40%)] text-xs">
            © {year} Hemanthkumar S. Crafted with passion & precision.
          </p>
          <p className="text-[hsl(220_10%_40%)] text-xs flex items-center gap-1">
            BE – Computer & Communication Engineering
            <span className="text-[hsl(245_80%_70%)]">·</span>
            Anna University
          </p>
        </div>
      </div>
    </footer>
  );
}
