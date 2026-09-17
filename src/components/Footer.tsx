import { Star, MapPin, Clock, Sparkles, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    onNavigate(page);
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0d1b2a', borderTop: '1px solid rgba(201,169,110,0.2)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://res.cloudinary.com/dyp247eoh/image/upload/v1789630381/villa_logo-removebg-preview_hvsuk2.png"
              alt="The Villa Clover"
              className="h-20 md:h-24 w-auto object-contain mb-5 drop-shadow-md"
            />
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              A private, fully air-conditioned 2-bedroom villa in Galle, Sri Lanka. Modern comfort meets authentic Sri Lankan warmth.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#c9a96e' }}>
                10.0 — Exceptional
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="section-label mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item.toLowerCase())}
                  className="text-left text-white/60 hover:text-amber-300 transition-colors duration-300 text-sm cursor-pointer"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Contact</p>
            <div className="flex flex-col gap-4 text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a
                href="tel:+94774384915"
                className="flex items-center gap-3 text-amber-300/90 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300/80 shrink-0" />
                <span>+94 77 438 4915</span>
              </a>
              <a
                href="https://maps.app.goo.gl/GfXdcg3y4x1U4TuGA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-amber-300 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5 group-hover:text-amber-300 transition-colors" />
                <span>318D Hely Road, D.Samson Rajapaksha Mawatha,<br />Galle 80000, Sri Lanka</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-300/80 shrink-0" />
                <span>Check-in: 14:00 – 18:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-300/80 shrink-0" />
                <span>Check-out: by 11:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-300/80 shrink-0" />
                <span>Pets welcome · Cash only</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BIG LUXURY BRAND WATERMARK EFFECT ── */}
        <div className="mt-16 pt-6 text-center select-none overflow-hidden pointer-events-none">
          <h2
            className="tracking-[0.06em] md:tracking-[0.12em] uppercase font-light leading-none text-center"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.6rem, 11.5vw, 10.5rem)',
              background: 'linear-gradient(180deg, rgba(201,169,110,0.25) 0%, rgba(201,169,110,0.04) 75%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 auto',
              textShadow: '0 0 40px rgba(201,169,110,0.05)',
            }}
          >
            THE VILLA CLOVER
          </h2>
        </div>

        <div
          className="mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 The Villa Clover. All rights reserved.
          </p>
          <p className="text-white/40 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            Galle, Sri Lanka · Managed by Ganidu Sasmitha
          </p>
        </div>
      </div>
    </footer>
  );
}
