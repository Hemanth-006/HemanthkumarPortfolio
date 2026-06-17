import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'About Me', path: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[hsl(240_20%_4%/0.9)] backdrop-blur-xl border-b border-[hsl(245_80%_70%/0.1)] shadow-[0_4px_30px_hsl(245_80%_70%/0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white"
               style={{ background: 'linear-gradient(135deg, hsl(245 80% 70%), hsl(38 95% 60%))' }}>
            HK
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="text-white">Hemanth</span>
            <span className="gradient-text">kumar</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    active
                      ? 'text-[hsl(245_80%_75%)]'
                      : 'text-[hsl(220_20%_65%)] hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                      active ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`}
                    style={{ background: 'linear-gradient(90deg, hsl(245 80% 70%), hsl(38 95% 60%))' }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/about"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all duration-300 hover:shadow-[0_0_20px_hsl(245_80%_70%/0.4)] hover:-translate-y-0.5 active:translate-y-0"
          style={{ background: 'linear-gradient(135deg, hsl(245 80% 60%), hsl(245 80% 50%))' }}
        >
          <Mail size={15} /> Hire Me
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[hsl(220_20%_65%)] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'hsl(240 20% 5% / 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid hsl(245 80% 70% / 0.1)'
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-[hsl(245_80%_75%)] bg-[hsl(245_80%_70%/0.1)]'
                      : 'text-[hsl(220_20%_65%)] hover:text-white hover:bg-[hsl(245_80%_70%/0.07)]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              to="/about"
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
              style={{ background: 'linear-gradient(135deg, hsl(245 80% 60%), hsl(245 80% 50%))' }}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
