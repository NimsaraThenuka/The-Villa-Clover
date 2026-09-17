import { useEffect, useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { VILLA_IMAGES } from '../data/villaImages';
import {
  Car,
  Wifi,
  Plane,
  Users,
  Wind,
  Trees,
  PawPrint,
  Sunrise,
  Star,
  MapPin,
  Home as HomeIcon,
  HeartHandshake,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  Compass,
  Sparkles,
} from 'lucide-react';
import VillaVideoPlayer from '../components/VillaVideoPlayer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const reviews = [
  {
    quote: "Our family had a wonderful stay. It's a beautiful, peaceful and comfortable place, perfect for a family getaway. The villa was very clean and well maintained, with everything we needed for a relaxing stay.",
    author: 'Kalana',
    country: 'Australia · August 2026',
  },
  {
    quote: "An absolute oasis in Galle! The rooftop sun terrace at sunset was magical, and the lake view in the morning with birds singing made our Sri Lanka holiday truly unforgettable. Ganidu was an exceptional host.",
    author: 'Sophie & Liam',
    country: 'United Kingdom · November 2026',
  },
  {
    quote: "Spotless modern villa with fantastic air conditioning, super fast WiFi, and a fully equipped kitchen. Just 10 minutes to Galle Fort by tuk-tuk. Outstanding value, peace, and serenity.",
    author: 'Alexander Weber',
    country: 'Germany · January 2026',
  },
  {
    quote: "We loved the tropical garden and the swing by the water. The bedrooms were spacious with luxurious beds, and having the entire private property to ourselves gave us complete peace of mind.",
    author: 'Elena Rostova',
    country: 'Russia · February 2026',
  },
  {
    quote: "Perfect 10/10 experience. Sparkling clean, stylish interior design, and delicious hot tea upon arrival. The rooftop lounge with fairy lights in the evening is pure romance.",
    author: 'Matteo Rossi',
    country: 'Italy · December 2025',
  },
  {
    quote: "Travelled with our parents and pet, and everyone fell in love with The Villa Clover. Safe, quiet, beautifully furnished, and top-tier Sri Lankan hospitality. We will definitely come back!",
    author: 'Priya & Rohan',
    country: 'India · October 2025',
  },
];

const amenities = [
  { icon: Car, label: 'Free Parking' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Plane, label: 'Airport Shuttle' },
  { icon: Users, label: 'Family Rooms' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Trees, label: 'Garden & Terrace' },
  { icon: PawPrint, label: 'Pets Allowed' },
  { icon: Sunrise, label: 'Lake & Garden View' },
];

export default function Home({ onNavigate }: HomeProps) {
  useScrollReveal();
  const [currentReview, setCurrentReview] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeReview = useCallback((newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentReview(newIndex);
      setIsFading(false);
    }, 250);
  }, []);

  const nextReview = useCallback(() => {
    changeReview((currentReview + 1) % reviews.length);
  }, [currentReview, changeReview]);

  const prevReview = useCallback(() => {
    changeReview((currentReview - 1 + reviews.length) % reviews.length);
  }, [currentReview, changeReview]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextReview]);

  const handleNav = (page: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    onNavigate(page);
  };

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-between pt-28 pb-8 px-6 overflow-hidden"
        style={{
          background: '#0d1b2a',
        }}
      >
        {/* Background image with parallax - slightly darkened for optimal text legibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${VILLA_IMAGES.hero}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.65)',
          }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,27,42,0.65) 0%, rgba(13,27,42,0.42) 40%, rgba(13,27,42,0.8) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(13,27,42,0.45) 100%)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto my-auto pt-2 sm:pt-4 md:pt-6 px-3 flex flex-col items-center">
          <p
            className="section-label mb-2 sm:mb-3 md:mb-4 text-[11px] sm:text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em]"
            style={{ color: '#c9a96e' }}
          >
            Galle, Sri Lanka
          </p>

          <h1
            className="hero-title mb-3 sm:mb-4 md:mb-5 max-w-full px-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 6.5vw, 6.2rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            The <br className="sm:hidden" />Villa Clover
          </h1>

          <div className="gold-divider mx-auto mb-3 sm:mb-4 md:mb-6" style={{ width: '45px' }} />

          <p
            className="text-amber-200/95 mb-2 sm:mb-2.5 md:mb-3 text-xs sm:text-sm md:text-base font-light tracking-[0.12em] uppercase max-w-full px-2"
            style={{
              fontFamily: 'Inter, sans-serif',
            }}
          >
            The entire place is yours
          </p>

          <p
            className="text-white/80 mb-5 sm:mb-6 md:mb-8 max-w-lg mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed px-3 font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A private 2-bedroom luxury villa offering modern comfort, lush gardens, and authentic Sri Lankan hospitality in peaceful Galle.
          </p>

          {/* Action Buttons - Perfectly balanced & never cropped on mobile */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-center w-full max-w-[240px] sm:max-w-none mx-auto">
            <button
              onClick={() => handleNav('contact')}
              className="btn-gold w-full sm:w-auto text-xs py-2.5 px-6 sm:py-3.5 sm:px-9"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className="btn-outline w-full sm:w-auto text-xs py-2.5 px-6 sm:py-3.5 sm:px-9"
            >
              View Gallery
            </button>
          </div>

          {/* Rating badge - Compact & Centered */}
          <div
            className="mt-4 sm:mt-8 inline-flex items-center gap-3 sm:gap-4 px-4 py-2 sm:px-7 sm:py-3 rounded-sm max-w-[280px] sm:max-w-none"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(201,169,110,0.3)',
            }}
          >
            <div className="text-center">
              <p className="font-semibold text-xl sm:text-2xl md:text-[2rem] text-[#c9a96e] leading-none" style={{ fontFamily: "Inter, sans-serif" }}>10.0</p>
              <p className="text-white/60 text-[9px] sm:text-xs tracking-widest uppercase mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Exceptional</p>
            </div>
            <div className="h-7 sm:h-9 md:h-10" style={{ width: '1px', background: 'rgba(201,169,110,0.3)' }} />
            <div className="text-left">
              <p className="text-white text-xs sm:text-sm font-medium leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>Top-rated villa</p>
              <p className="text-white/50 text-[10px] sm:text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Verified guest reviews</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Responsive: Mobile Touch Animation vs PC Mouse Animation */}
        <button
          onClick={() => {
            const el = document.getElementById('amenities-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="relative z-20 mt-3 sm:mt-6 mb-1 sm:mb-2 flex flex-col items-center gap-1.5 group cursor-pointer text-amber-300/80 hover:text-amber-300 transition-all duration-300 select-none"
          aria-label="Scroll down to explore"
        >
          {/* Mobile View Scroll Indicator (< md) */}
          <div className="flex md:hidden flex-col items-center gap-1.5">
            <span
              className="text-[10px] font-medium tracking-[0.22em] uppercase text-white/75 group-hover:text-amber-300 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Scroll to Explore
            </span>
            <div className="w-7 h-7 rounded-full border border-amber-300/50 bg-amber-300/10 backdrop-blur-xs flex items-center justify-center shadow-[0_0_15px_rgba(201,169,110,0.25)] group-hover:border-amber-300 group-hover:bg-amber-300/20 transition-all">
              <ChevronDown className="w-4 h-4 text-amber-300 animate-bounce" />
            </div>
          </div>

          {/* Desktop / PC View Scroll Indicator (>= md) - Exact Mouse Wheel */}
          <div className="hidden md:flex flex-col items-center gap-1.5">
            <span
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 group-hover:text-amber-300 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Scroll to Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-amber-300/50 flex items-start justify-center p-1 backdrop-blur-xs bg-white/5 shadow-[0_0_15px_rgba(201,169,110,0.15)] group-hover:border-amber-300 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] transition-all">
              <div className="w-1 h-2 rounded-full bg-amber-300 animate-scroll-wheel" />
            </div>
            <ChevronDown className="w-4 h-4 text-amber-300/70 -mt-0.5 animate-bounce group-hover:text-amber-300 transition-colors" />
          </div>
        </button>
      </section>

      {/* ── AMENITIES BAR ── */}
      <section id="amenities-section" style={{ background: '#0d1b2a', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {amenities.map((a, i) => {
              const IconComponent = a.icon;
              return (
                <div
                  key={a.label}
                  className={`reveal delay-${Math.min(i * 100, 600)} flex flex-col items-center gap-2.5 text-center`}
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-amber-300 bg-white/5 border border-amber-300/20 shadow-sm">
                    <IconComponent className="w-5 h-5 text-amber-300" />
                  </div>
                  <p className="text-white/70 text-xs tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {a.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INTRO ABOUT ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="section-label mb-5">About The Villa</p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  color: '#0d1b2a',
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                }}
              >
                Where Comfort Meets<br />
                <em>Sri Lankan Warmth</em>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                The Villa Clover in Galle offers a sun terrace and a lush garden. Guests can relax in the outdoor spaces and enjoy free WiFi throughout the property.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                The villa features two bedrooms and a living room. Each room is equipped with air-conditioning, a balcony, and a kitchenette — perfect for families, couples, or small groups seeking a quiet retreat.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { label: '2 Bedrooms', sub: 'King beds in each room' },
                  { label: 'Galle, LK', sub: '2.8 km from Galle Fort' },
                  { label: 'Private Villa', sub: 'Entire place is yours' },
                  { label: 'Bonavista Beach', sub: '2.6 km away' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 pl-4" style={{ borderColor: '#c9a96e' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#0d1b2a', fontWeight: 500 }}>
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.sub}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => handleNav('about')} className="btn-primary">
                Discover More
              </button>
            </div>

            <div className="reveal-right relative">
              <div className="img-zoom" style={{ borderRadius: '2px' }}>
                <img
                  src={VILLA_IMAGES.introExterior}
                  alt="The Villa Clover garden and veranda"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-8 -left-8 p-6 hidden lg:block"
                style={{
                  background: '#0d1b2a',
                  border: '1px solid rgba(201,169,110,0.3)',
                  minWidth: '220px',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span className="font-semibold" style={{ fontFamily: "Inter, sans-serif", fontSize: '1.7rem', color: 'white' }}>10.0</span>
                </div>
                <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "Beautiful, peaceful and comfortable place"
                </p>
                <p className="text-white/40 text-xs mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>— Kalana, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#f8f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Visual Journey</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                color: '#0d1b2a',
                lineHeight: 1.2,
              }}
            >
              Experience The Villa Clover
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                url: VILLA_IMAGES.rooftopNight,
                alt: 'Rooftop terrace night lounge',
                span: 'col-span-2 lg:col-span-2 lg:row-span-2',
                heightClass: 'h-56 sm:h-72 lg:h-full lg:min-h-[490px]',
              },
              {
                url: VILLA_IMAGES.bedroom1,
                alt: 'Master bedroom with teak furniture',
                span: 'col-span-1',
                heightClass: 'h-36 sm:h-48 lg:h-[235px]',
              },
              {
                url: VILLA_IMAGES.livingRoom,
                alt: 'Air conditioned living room',
                span: 'col-span-1',
                heightClass: 'h-36 sm:h-48 lg:h-[235px]',
              },
              {
                url: VILLA_IMAGES.kitchen,
                alt: 'Fully equipped modern kitchen',
                span: 'col-span-1',
                heightClass: 'h-36 sm:h-48 lg:h-[235px]',
              },
              {
                url: VILLA_IMAGES.gardenSwing,
                alt: 'Tropical garden swing & river',
                span: 'col-span-1',
                heightClass: 'h-36 sm:h-48 lg:h-[235px]',
              },
            ].map((img, i) => (
              <div
                key={img.url}
                onClick={() => handleNav('gallery')}
                className={`gallery-item img-zoom reveal-scale delay-${Math.min(i * 100, 400)} ${img.span} ${img.heightClass} cursor-pointer rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <button onClick={() => handleNav('gallery')} className="btn-primary">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#0d1b2a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Why Choose Us</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                color: 'white',
              }}
            >
              Property Highlights
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Perfect Location',
                desc: 'Set in a peaceful residential neighbourhood, 10 minutes from historic Galle Fort and 15 minutes from stunning Unawatuna beach.',
              },
              {
                icon: HomeIcon,
                title: 'Entire Villa is Yours',
                desc: 'Enjoy full privacy in your 2-bedroom sanctuary with rooftop sun terrace, lush tropical garden, and private balcony — exclusively yours.',
              },
              {
                icon: HeartHandshake,
                title: 'Personalised Hospitality',
                desc: 'From warm check-ins with hot tea to local transport tips and insider Galle recommendations — Ganidu and the team ensure a seamless stay.',
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className={`amenity-card reveal delay-${i * 200} p-8`}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,169,110,0.2)',
                  }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-amber-300 bg-amber-300/10 border border-amber-300/20 mb-6">
                    <IconComponent className="w-6 h-6 text-amber-300" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.5rem',
                      color: '#c9a96e',
                      fontWeight: 500,
                      marginBottom: '1rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GUEST REVIEW SLIDER ── */}
      <section
        className="py-24 px-6 lg:px-12 relative overflow-hidden"
        style={{ background: '#1e3a5f' }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('${VILLA_IMAGES.reviewBg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '4rem',
              color: '#c9a96e',
              lineHeight: 0.8,
              marginBottom: '2rem',
              opacity: 0.6,
            }}
          >
            "
          </div>

          <div
            className="transition-all duration-300 min-h-[160px] flex flex-col justify-center items-center"
            style={{
              opacity: isFading ? 0 : 1,
              transform: isFading ? 'translateY(6px)' : 'translateY(0)',
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                color: 'white',
                fontWeight: 300,
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '2.5rem',
              }}
            >
              {reviews[currentReview].quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-10 h-px"
                style={{ background: 'rgba(201,169,110,0.5)' }}
              />
              <div className="text-center">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#c9a96e' }}>
                  {reviews[currentReview].author}
                </p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {reviews[currentReview].country}
                </p>
              </div>
              <div
                className="w-10 h-px"
                style={{ background: 'rgba(201,169,110,0.5)' }}
              />
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="w-5 h-5 text-amber-300 fill-amber-300" />
            ))}
          </div>

          {/* Controls: Prev / Next / Dots */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prevReview}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-amber-300 hover:border-amber-300/60 transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeReview(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentReview === idx ? 'w-6 bg-amber-300' : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-amber-300 hover:border-amber-300/60 transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── NEARBY ATTRACTIONS & EXPERIENCES ── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#f8f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Prime Location</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                color: '#0d1b2a',
              }}
            >
              Explore Galle & The Coast
            </h2>
            <div className="gold-divider mx-auto mt-6 mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              From UNESCO World Heritage colonial ramparts to golden surf beaches and tropical lake safaris — the best of southern Sri Lanka is minutes away.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Galle Fort',
                distance: '2.8 km · 10 min',
                desc: '17th-century UNESCO World Heritage site filled with charming boutiques, colonial ramparts, and picturesque sunset strolls.',
                tag: 'Heritage',
              },
              {
                title: 'Bonavista & Unawatuna',
                distance: '3.5 km · 12 min',
                desc: 'Golden sandy beaches, calm turquoise swimming waters, beachfront seafood dining, and vibrant tropical nightlife.',
                tag: 'Beach & Surf',
              },
              {
                title: 'Koggala Lake & Safari',
                distance: '12 km · 20 min',
                desc: 'Serene boat excursions exploring mangrove forests, cinnamon harvesting islands, and exotic bird sanctuaries.',
                tag: 'Nature',
              },
              {
                title: 'Mirissa Marine Safari',
                distance: '32 km · 40 min',
                desc: 'World-famous marine expeditions to spot magnificent blue whales, spinner dolphins, and breathtaking ocean horizons.',
                tag: 'Wildlife',
              },
            ].map((place, i) => (
              <div
                key={place.title}
                className={`reveal delay-${i * 150} p-7 flex flex-col justify-between`}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '2px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-700 px-2.5 py-0.5 bg-amber-50 rounded border border-amber-200">
                      {place.tag}
                    </span>
                    <span className="text-gray-400 text-xs font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {place.distance}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.4rem',
                      color: '#0d1b2a',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {place.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {place.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESPOKE VILLA SERVICES ── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#0d1b2a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Bespoke Hospitality</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                color: 'white',
              }}
            >
              Curated Guest Services
            </h2>
            <div className="gold-divider mx-auto mt-6 mb-4" />
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We ensure every detail of your vacation is effortless and tailored to your desires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Plane,
                title: 'Airport Transfers',
                desc: 'Comfortable air-conditioned private van or car transfers directly from Colombo (CMB) or Koggala airport.',
              },
              {
                icon: UtensilsCrossed,
                title: 'Private Kitchen',
                desc: 'Fully equipped self-catering kitchen with refrigerator, stovetop, microwave, cookware, and dining space.',
              },
              {
                icon: Sparkles,
                title: 'Rooftop Sundowners',
                desc: 'Enjoy ambient evening fairy lights, private dining setups, and refreshing lake breezes on your private rooftop terrace.',
              },
              {
                icon: Compass,
                title: 'Local Tours & Tuk-Tuks',
                desc: 'Trusted on-call tuk-tuk drivers and personalized local recommendations for dining, shopping, and hidden gems.',
              },
            ].map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.title}
                  className={`reveal delay-${i * 150} p-8 flex flex-col`}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,169,110,0.2)',
                    borderRadius: '2px',
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-amber-300 bg-amber-300/10 border border-amber-300/25 mb-6">
                    <Icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.35rem',
                      color: '#ffffff',
                      fontWeight: 500,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {srv.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC VILLA VIDEO TOUR ── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <VillaVideoPlayer
            badge="Cinematic Experience"
            title="Experience The Villa in Motion"
            subtitle="Explore our peaceful tropical garden, panoramic sun terrace, and modern air-conditioned villa suites through authentic drone & ground footage."
            darkTheme={false}
          />
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#f8f5f0' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-4">Everything You Need To Know</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: '#0d1b2a',
              }}
            >
              Frequently Asked Questions
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="flex flex-col gap-4 reveal">
            {[
              {
                q: 'What is the check-in and check-out schedule?',
                a: 'Check-in is from 14:00 to 18:00 (please inform us of your expected arrival time in advance), and check-out is by 11:00. Early check-in or late check-out can be arranged based on availability.',
              },
              {
                q: 'How does payment and prepayment work?',
                a: 'No advance prepayment is required. The Villa Clover accepts cash payments upon arrival at the property, making your booking completely risk-free and flexible.',
              },
              {
                q: 'Are pets allowed at the villa?',
                a: 'Yes! Pets are warmly welcomed at The Villa Clover with no extra charges. Our secure garden and spacious terraces provide a comfortable setting for your pets.',
              },
              {
                q: 'What amenities and kitchen facilities are included?',
                a: 'You enjoy the entire private 2-bedroom villa featuring full air conditioning, complimentary high-speed WiFi, private rooftop sun terrace, fully equipped kitchen (refrigerator, stove, electric kettle, cookware), washing machine, hot water showers, and private parking.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '2px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: isOpen ? '#c9a96e' : '#0d1b2a',
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-amber-500' : 'text-gray-400'
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section
        className="py-24 px-6 lg:px-12 text-center"
        style={{ background: '#ffffff' }}
      >
        <div className="max-w-2xl mx-auto reveal">
          <p className="section-label mb-5">Ready to Experience It?</p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#0d1b2a',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            Begin Your Stay at<br />The Villa Clover
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-gray-500 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
            Perfect for a 1-night stay or an extended getaway. No prepayment needed — pay at the property. Pets welcome at no extra charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleNav('contact')} className="btn-primary">
              Contact Us to Book
            </button>
            <button onClick={() => handleNav('about')} className="btn-outline" style={{ borderColor: '#1e3a5f', color: '#1e3a5f' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
