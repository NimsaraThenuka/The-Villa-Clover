import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { VILLA_IMAGES } from '../data/villaImages';
import {
  CheckCircle2,
  MapPin,
  Clock,
  LogOut,
  Banknote,
  Plane,
  ChevronDown,
  Phone,
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '2',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What are the check-in and check-out times?',
      a: 'Check-in is from 14:00 to 18:00. Please inform us of your expected arrival time in advance. Check-out is by 11:00.',
    },
    {
      q: 'Is there a damage deposit?',
      a: 'A refundable damage deposit of US$50 is required on arrival, collected as cash. This will be refunded in full on check-out, subject to inspection.',
    },
    {
      q: 'Are pets allowed?',
      a: 'Yes, pets are welcome at The Villa Clover at no extra charge.',
    },
    {
      q: 'What payment methods are accepted?',
      a: 'The Villa Clover accepts cash payments only. No prepayment is needed — you pay at the property.',
    },
    {
      q: 'How far is the villa from the airport?',
      a: 'Koggala Airport is 13 km from the villa. We offer airport shuttle service — please contact us to arrange in advance.',
    },
    {
      q: 'How far is Galle Fort?',
      a: 'The Villa Clover is 2.8 km from the centre of Galle, approximately 10 minutes by tuk-tuk or car.',
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            backgroundImage: `url('${VILLA_IMAGES.contactHeader}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.25,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-5">Get in Touch</p>
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
            Book Your Stay
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
            Reach out to us directly to check availability and arrange your stay. We speak English and respond promptly.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
      </header>

      {/* ── CONTACT FORM + INFO ── */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="reveal-left">
            <p className="section-label mb-5">Booking Enquiry</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#0d1b2a',
                marginBottom: '2rem',
              }}
            >
              Reserve The Villa Clover
            </h2>
            <div className="gold-divider mb-8" />

            {submitted ? (
              <div
                className="p-8 sm:p-10 text-center"
                style={{ background: '#f8f5f0', border: '1px solid rgba(201,169,110,0.3)' }}
              >
                <CheckCircle2 className="w-12 h-12 text-[#c9a96e] mx-auto mb-4" />
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.8rem',
                    color: '#0d1b2a',
                    marginBottom: '1rem',
                  }}
                >
                  Thank You, {form.name || 'Guest'}!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your booking enquiry has been received. Ganidu will be in touch shortly to confirm your reservation and provide further details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Email *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Phone</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+1 234 567 890"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Number of Guests</label>
                    <select
                      className="form-input"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Check-in Date *</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={form.checkin}
                      onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Check-out Date *</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={form.checkout}
                      onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2" style={{ fontSize: '0.7rem' }}>Message / Special Requests</label>
                  <textarea
                    className="form-input"
                    rows={5}
                    placeholder="Tell us about any special requests, dietary needs, arrival time, etc."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary w-fit mt-2">
                  Send Enquiry
                </button>
              </form>
            )}

            {/* ── GOOGLE MAP IN LEFT COLUMN SPACE ── */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <p className="section-label" style={{ fontSize: '0.65rem' }}>Location on Google Maps</p>
                  <p className="font-semibold text-xs sm:text-sm text-[#0d1b2a] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                    318D Hely Road, D.Samson Rajapaksha Mawatha, Galle 80000
                  </p>
                  <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                    2.8 km from Galle Fort · Southern Province, Sri Lanka
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/GfXdcg3y4x1U4TuGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs py-2 px-4 shrink-0 whitespace-nowrap self-start sm:self-auto"
                >
                  Open in Maps →
                </a>
              </div>

              {/* Map Card */}
              <div className="w-full h-60 sm:h-72 rounded-lg overflow-hidden border border-[#c9a96e]/30 shadow-sm bg-gray-100 relative">
                <iframe
                  title="The Villa Clover Google Maps Location"
                  src="https://maps.google.com/maps?q=318D+Hely+Road,+D.Samson+Rajapaksha+Mawatha,+Galle+80000,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="reveal-right flex flex-col gap-6 sm:gap-8 min-w-0">
            <div>
              <p className="section-label mb-4 sm:mb-5">Villa Information</p>
              <div className="img-zoom mb-6" style={{ borderRadius: '2px' }}>
                <img
                  src={VILLA_IMAGES.contactVillaCard}
                  alt="The Villa Clover at night"
                  loading="lazy"
                  className="w-full object-cover h-48 sm:h-52"
                />
              </div>
            </div>

            {/* Direct WhatsApp Action Banner */}
            <a
              href="https://wa.me/94774384915?text=Hello%20The%20Villa%20Clover%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 sm:p-5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/35 hover:bg-[#25D366]/20 transition-all duration-300 group shadow-xs gap-2.5 sm:gap-3.5 w-full box-border"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs shrink-0 aspect-square group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 text-white fill-current shrink-0" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#0d1b2a] font-semibold text-xs sm:text-sm leading-tight truncate" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Chat on WhatsApp
                  </p>
                  <p className="text-gray-800 text-xs sm:text-sm font-medium mt-0.5 leading-tight tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +94 77 438 4915
                  </p>
                  <p className="text-[#1e7e34] text-[10px] sm:text-[11px] font-medium mt-0.5 flex items-center gap-1.5 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse shrink-0" />
                    <span>Instant response</span>
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center bg-[#25D366] text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-md shadow-xs group-hover:bg-[#20ba5a] transition-all">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span>Chat</span>
                  <span>→</span>
                </span>
              </div>
            </a>

            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              {[
                {
                  icon: WhatsAppIcon,
                  label: 'WhatsApp / Phone',
                  value: '+94 77 438 4915',
                  sub: 'Available daily for direct bookings & inquiries',
                  link: 'https://wa.me/94774384915',
                },
                {
                  icon: MapPin,
                  label: 'Exact Address',
                  value: '318D Hely Road, D.Samson Rajapaksha Mawatha, Galle 80000',
                  sub: '2.8 km from Galle Fort · Click to open Google Maps ↗',
                  link: 'https://maps.app.goo.gl/GfXdcg3y4x1U4TuGA',
                },
                {
                  icon: Clock,
                  label: 'Check-in',
                  value: '14:00 – 18:00',
                  sub: 'Please advise your arrival time in advance',
                },
                {
                  icon: LogOut,
                  label: 'Check-out',
                  value: 'By 11:00',
                  sub: '',
                },
                {
                  icon: Banknote,
                  label: 'Payment',
                  value: 'Cash only · No prepayment needed',
                  sub: 'US$50 refundable security deposit on arrival',
                },
                {
                  icon: Plane,
                  label: 'Airport',
                  value: 'Koggala Airport · 13 km',
                  sub: 'Airport shuttle available on request',
                },
              ].map((info) => {
                const IconComponent = info.icon;
                const Wrapper = info.link ? 'a' : 'div';
                const extraProps = info.link
                  ? {
                      href: info.link,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 hover:border-[#c9a96e] hover:bg-amber-50/30 transition-all duration-300 group cursor-pointer block',
                    }
                  : {
                      className: 'flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5',
                    };
                return (
                  <Wrapper
                    key={info.label}
                    {...extraProps}
                    style={{ border: '1px solid #eef2f7', borderRadius: '2px' }}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#1e3a5f]/5 text-[#1e3a5f] group-hover:bg-[#1e3a5f]/10 shrink-0 aspect-square mt-0.5 transition-colors">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="section-label mb-1" style={{ fontSize: '0.65rem' }}>{info.label}</p>
                      <p className="font-medium text-xs sm:text-sm md:text-base break-words" style={{ fontFamily: 'Inter, sans-serif', color: '#0d1b2a' }}>{info.value}</p>
                      {info.sub && (
                        <p className={`text-[11px] sm:text-xs mt-0.5 leading-snug ${info.link ? 'text-amber-700 font-medium' : 'text-gray-400'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          {info.sub}
                        </p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 px-6 lg:px-12" style={{ background: '#f8f5f0' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Common Questions</p>
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

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal delay-${Math.min(i * 80, 400)}`}
                style={{
                  border: '1px solid',
                  borderColor: openFaq === i ? '#1e3a5f' : '#e5eaf0',
                  background: openFaq === i ? '#ffffff' : '#ffffff',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.15rem',
                      color: '#0d1b2a',
                      fontWeight: 500,
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-[#1e3a5f] shrink-0 ml-4 transition-transform duration-300"
                    style={{
                      transform: openFaq === i ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <p
                    className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINE PRINT ── */}
      <section
        className="py-16 px-6 lg:px-12"
        style={{ background: '#0d1b2a' }}
      >
        <div className="max-w-4xl mx-auto reveal">
          <p className="section-label mb-6">The Fine Print</p>
          <div className="grid sm:grid-cols-2 gap-6 text-white/55 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p>
              Guests are required to show a photo identification and credit card upon check-in. All Special Requests are subject to availability and additional charges may apply.
            </p>
            <p>
              Guests will receive a rental agreement which must be signed and returned to the property prior to arrival. Guests under 18 can only check in with a parent or official guardian.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
