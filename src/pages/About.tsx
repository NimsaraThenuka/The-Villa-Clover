import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { VILLA_IMAGES } from '../data/villaImages';
import {
  Waves,
  Landmark,
  Compass,
  Anchor,
  Sailboat,
  Palmtree,
  Train,
  Plane,
  ShieldCheck,
  PawPrint,
  RotateCcw,
  Banknote,
  Check,
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const facilityGroups = [
  {
    label: 'Outdoors',
    items: ['Sun terrace', 'BBQ facilities', 'Balcony', 'Terrace', 'Lush garden'],
  },
  {
    label: 'Kitchen',
    items: ['Fully equipped kitchen', 'Microwave', 'Refrigerator', 'Electric kettle', 'Dining table', 'Washing machine'],
  },
  {
    label: 'Bedroom & Bath',
    items: ['King beds', 'Free toiletries', 'Hairdryer', 'Shower', 'Safety deposit box'],
  },
  {
    label: 'Tech & Comfort',
    items: ['Free WiFi', 'Flat-screen TV', 'Air conditioning', 'Desk', 'Sofa & lounge'],
  },
  {
    label: 'Services',
    items: ['Airport shuttle', 'Ironing service', 'Laundry', 'Private parking', 'Baby safety gates'],
  },
  {
    label: 'Safety',
    items: ['Fire extinguishers', 'CCTV outside', 'Key access', '24-hour security', 'Smoke-free property'],
  },
];

const nearby = [
  { name: 'Bonavista Beach', dist: '2.6 km', icon: Waves },
  { name: 'Galle Fort', dist: '2.8 km', icon: Landmark },
  { name: 'Galle Fort Lighthouse', dist: '4.1 km', icon: Compass },
  { name: 'National Maritime Museum', dist: '3.6 km', icon: Anchor },
  { name: 'Koggala Lake', dist: '~8 km', icon: Sailboat },
  { name: 'Unawatuna Beach', dist: '~7 km', icon: Palmtree },
  { name: 'Galle Railway Station', dist: '3.4 km', icon: Train },
  { name: 'Koggala Airport', dist: '13 km', icon: Plane },
];

export default function About({ onNavigate }: AboutProps) {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
      {/* ── PAGE HEADER ── */}
      <header
        className="relative pt-36 pb-28 px-6 text-center overflow-hidden"
        style={{ background: '#0d1b2a' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${VILLA_IMAGES.aboutHeader}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundAttachment: 'fixed',
            opacity: 0.35,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-5">Our Story</p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            About The Villa Clover
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
            A private haven in Galle designed for travellers seeking modern comfort with authentic Sri Lankan warmth.
          </p>
        </div>
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
      </header>

      {/* ── OWNER MESSAGE ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="section-label mb-5">A Word from the Host</p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#0d1b2a',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Welcome to<br /><em>The Villa Clover</em>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                The Villa Clover is a private, fully air-conditioned 2-bedroom villa designed for travelers seeking a blend of modern comfort, space, and authentic Sri Lankan warmth. Set in a peaceful residential neighborhood, our property offers a quiet retreat with lush garden views, a private balcony, and an exclusive rooftop terrace perfect for morning coffee or evening sunsets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                We take pride in delivering personalised hospitality. From smooth check-ins and welcoming hot tea to assisting with local transport, tuk-tuks, and insider tips for Galle Fort and nearby beaches — we are dedicated to making your stay seamless and unforgettable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                Guests love our peaceful residential setting, which offers a quiet retreat away from city noise while keeping you just 10 minutes from historic Galle Fort. Day trips to Hikkaduwa for coral reefs, Koggala Lake for boat safaris, and Mirissa for whale watching are also easily arranged.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dyp247eoh/image/upload/v1789630760/692877037_az9w5s.jpg"
                  alt="Ganidu Sasmitha - Host & Owner"
                  className="w-14 h-14 rounded-full object-cover shadow-md shrink-0"
                  style={{ border: '2px solid #c9a96e' }}
                />
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#0d1b2a', fontWeight: 500 }}>Ganidu Sasmitha</p>
                  <p className="text-gray-400 text-xs tracking-widest uppercase mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Host & Owner, The Villa Clover</p>
                </div>
              </div>
            </div>

            <div className="reveal-right grid grid-cols-2 gap-4">
              <div className="img-zoom" style={{ borderRadius: '2px' }}>
                <img
                  src={VILLA_IMAGES.rooftopDay}
                  alt="Rooftop terrace and lounge"
                  loading="lazy"
                  className="w-full object-cover h-60"
                />
              </div>
              <div className="img-zoom mt-8" style={{ borderRadius: '2px' }}>
                <img
                  src={VILLA_IMAGES.bedroom1Close}
                  alt="Comfortable bedroom suite"
                  loading="lazy"
                  className="w-full object-cover h-60"
                />
              </div>
              <div className="img-zoom" style={{ borderRadius: '2px', gridColumn: 'span 2' }}>
                <img
                  src={VILLA_IMAGES.gardenPath}
                  alt="Tropical landscaped garden"
                  loading="lazy"
                  className="w-full object-cover h-44"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCOMMODATION DETAILS ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#f8f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Accommodation</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: '#0d1b2a',
              }}
            >
              Two-Bedroom Villa
            </h2>
            <div className="gold-divider mx-auto mt-6 mb-4" />
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Entire villa · Private kitchen · Balcony · Lake view · Garden view · Air conditioning · Terrace · Free WiFi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Bedroom 1',
                desc: '1 large double bed with plush bedding, air conditioning, and garden views with solid wood furnishings.',
                img: VILLA_IMAGES.bedroom1,
              },
              {
                title: 'Bedroom 2',
                desc: '1 large double bed, air conditioning, private vanity desk, and modern comforts within reach.',
                img: VILLA_IMAGES.bedroom2,
              },
            ].map((room, i) => (
              <div key={room.title} className={`reveal-scale delay-${i * 200}`}>
                <div className="img-zoom mb-6" style={{ borderRadius: '2px' }}>
                  <img src={room.img} alt={room.title} loading="lazy" className="w-full object-cover h-64" />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#0d1b2a', marginBottom: '0.75rem' }}>
                  {room.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{room.desc}</p>
              </div>
            ))}
          </div>

          {/* Key policies */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {[
              { icon: ShieldCheck, label: 'No Prepayment', sub: 'Pay at the property' },
              { icon: PawPrint, label: 'Pets Welcome', sub: 'No extra charges' },
              { icon: RotateCcw, label: 'Free Cancellation', sub: 'Costs 50% to cancel' },
              { icon: Banknote, label: 'Cash Only', sub: 'No credit card needed' },
            ].map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.label}
                  className="amenity-card p-5 text-center flex flex-col items-center"
                  style={{ background: '#ffffff', border: '1px solid #e5eaf0' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#1e3a5f] bg-[#1e3a5f]/5 border border-[#1e3a5f]/15 mb-3">
                    <IconComponent className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#0d1b2a', marginBottom: '0.25rem' }}>
                    {p.label}
                  </p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{p.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#0d1b2a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">What's Included</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'white',
              }}
            >
              Facilities & Amenities
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityGroups.map((group, i) => (
              <div
                key={group.label}
                className={`reveal delay-${Math.min(i * 100, 500)} p-7`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,169,110,0.15)',
                }}
              >
                <p className="section-label mb-5">{group.label}</p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Check className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION & SURROUNDINGS ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <p className="section-label mb-5">Explore the Area</p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#0d1b2a',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Perfectly Placed in Galle
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                Spend your days exploring colonial Galle Fort streets, boutique cafes, and the Maritime Museum, or take a quick drive to Unawatuna and Jungle Beach. Day trips to Hikkaduwa coral reefs, Koggala Lake boat safaris, and Mirissa whale watching are easily arranged from the villa.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {nearby.map((place, i) => {
                  const PlaceIcon = place.icon;
                  return (
                    <div
                      key={place.name}
                      className={`reveal delay-${Math.min(i * 80, 500)} flex items-center justify-between py-3.5 px-4`}
                      style={{ borderBottom: '1px solid #eef2f7' }}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1e3a5f]/5 text-[#1e3a5f]">
                          <PlaceIcon className="w-4 h-4" />
                        </div>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#2d3748' }}>
                          {place.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#1e3a5f', fontFamily: 'Inter, sans-serif' }}>
                        {place.dist}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="reveal-right">
              <div className="img-zoom mb-6" style={{ borderRadius: '2px' }}>
                <img
                  src={VILLA_IMAGES.locationCard}
                  alt="The Villa Clover garden swing by the lake"
                  className="w-full object-cover h-80"
                />
              </div>
              <div
                className="p-7"
                style={{ background: '#0d1b2a', border: '1px solid rgba(201,169,110,0.2)' }}
              >
                <p className="section-label mb-5">House Rules</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div>
                    <p style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', marginBottom: '0.25rem' }}>Check-in</p>
                    <p>14:00 – 18:00</p>
                  </div>
                  <div>
                    <p style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', marginBottom: '0.25rem' }}>Check-out</p>
                    <p>By 11:00</p>
                  </div>
                  <div>
                    <p style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', marginBottom: '0.25rem' }}>Deposit</p>
                    <p>US$50 refundable</p>
                  </div>
                  <div>
                    <p style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', marginBottom: '0.25rem' }}>Smoking</p>
                    <p>Not permitted</p>
                  </div>
                  <div>
                    <p style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', marginBottom: '0.25rem' }}>Pets</p>
                    <p>Welcome · Free</p>
                  </div>
                  <div>
                    <p style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', marginBottom: '0.25rem' }}>Language</p>
                    <p>English spoken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: '#1e3a5f' }}
      >
        <div className="relative z-10 reveal">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 300,
              color: 'white',
              marginBottom: '1.5rem',
            }}
          >
            Ready to Experience The Villa Clover?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }); onNavigate('contact'); }} className="btn-gold">
              Book Now
            </button>
            <button onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }); onNavigate('gallery'); }} className="btn-outline">
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
