import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl =
    'https://wa.me/94774384915?text=Hello%20The%20Villa%20Clover%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay.';

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-500 ${
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp (+94 77 438 4915)"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded bg-[#0d1b2a]/95 text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
          Chat on WhatsApp
        </span>

        {/* Subtle Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#0d1b2a] text-[#c9a96e] border border-[#c9a96e]/40 shadow-lg hover:border-[#c9a96e] hover:bg-[#1a2e44] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded bg-[#0d1b2a]/95 text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
          Back to Top
        </span>
      </button>
    </div>
  );
}
