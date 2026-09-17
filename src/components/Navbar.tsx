import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = ['Home', 'About', 'Gallery', 'Contact'];

  const handleNav = (page: string) => {
    setMobileOpen(false);
    setScrolled(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    onNavigate(page.toLowerCase());
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
        style={{
          background: scrolled ? 'rgba(13,27,42,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.2)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group cursor-pointer select-none"
            >
              <img
                src="https://res.cloudinary.com/dyp247eoh/image/upload/v1789630381/villa_logo-removebg-preview_hvsuk2.png"
                alt="The Villa Clover"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  className={`nav-link text-sm font-medium tracking-widest uppercase transition-colors duration-300 pb-1 cursor-pointer ${
                    currentPage === item.toLowerCase()
                      ? 'text-amber-300 active'
                      : 'text-white/85 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Desktop Book Now CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNav('contact')}
                className="btn-gold text-xs"
              >
                Book Your Stay
              </button>
            </div>

            {/* Mobile Hamburger Button - Exactly identical on every page */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-white cursor-pointer select-none p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-7 flex flex-col gap-1.5">
                <span className="block h-[2px] w-full bg-white rounded-full" />
                <span className="block h-[2px] w-full bg-white rounded-full" />
                <span className="block h-[2px] w-full bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── SIMPLE MINIMALIST FULL-SCREEN MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#0d1b2a] transition-opacity duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar inside menu - EXACT MATCH to main Navbar dimensions */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 border-b border-white/10">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <img
                src="https://res.cloudinary.com/dyp247eoh/image/upload/v1789630381/villa_logo-removebg-preview_hvsuk2.png"
                alt="The Villa Clover"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-md"
              />
            </button>

            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-10 h-10 text-white cursor-pointer select-none p-1"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Clean, Simple Centered Nav Links */}
        <div className="px-6 py-8 flex-1 flex flex-col justify-center items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`text-2xl tracking-[0.15em] uppercase transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'text-amber-300 font-medium'
                    : 'text-white/75 hover:text-white font-light'
                }`}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item}
              </button>
            );
          })}

          <div className="w-10 h-[1px] bg-amber-300/30 my-2" />

          {/* Book Now Button */}
          <button
            onClick={() => handleNav('contact')}
            className="btn-gold text-xs py-3 px-8 uppercase tracking-widest cursor-pointer"
          >
            Book Your Stay
          </button>
        </div>

        {/* Minimal Footer */}
        <div className="px-6 py-4 text-center border-t border-white/10">
          <p className="text-white/40 text-[11px] tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            The Villa Clover · Galle, Sri Lanka
          </p>
        </div>
      </div>
    </>
  );
}
