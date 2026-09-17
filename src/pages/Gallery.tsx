import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { VILLA_IMAGES, GALLERY_PHOTOS, GalleryPhoto } from '../data/villaImages';
import VillaVideoPlayer from '../components/VillaVideoPlayer';

interface GalleryProps {
  onNavigate: (page: string) => void;
}

const categories = ['All', 'Exterior', 'Interior', 'Garden', 'Terrace'];

function GalleryImageCard({
  photo,
  onOpen,
}: {
  photo: GalleryPhoto;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      onClick={onOpen}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#e2e8f0] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 reveal-fade"
    >
      {/* Loading Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-amber-600/30 border-t-amber-600 animate-spin" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={photo.url}
        alt={photo.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
        }`}
      />

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.2) 60%, transparent 100%)',
        }}
      >
        <div className="self-end p-2 bg-black/40 rounded-full text-white/90 backdrop-blur-sm shadow-sm">
          <ZoomIn className="w-4 h-4" />
        </div>
        <div>
          <span
            className="text-[10px] tracking-widest uppercase font-semibold text-amber-300 mb-1 block"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {photo.category}
          </span>
          <p className="text-white text-xs font-medium leading-snug line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            {photo.alt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery({ onNavigate }: GalleryProps) {
  useScrollReveal();
  const [active, setActive] = useState('All');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isImgLoading, setIsImgLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered: GalleryPhoto[] =
    active === 'All' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === active);

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return GALLERY_PHOTOS.length;
    return GALLERY_PHOTOS.filter((p) => p.category === cat).length;
  };

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsImgLoading(true);
  };

  const handleCloseLightbox = () => {
    setCurrentIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    setIsImgLoading(true);
    setCurrentIndex((prev) => (prev! > 0 ? prev! - 1 : filtered.length - 1));
  }, [currentIndex, filtered.length]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    setIsImgLoading(true);
    setCurrentIndex((prev) => (prev! < filtered.length - 1 ? prev! + 1 : 0));
  }, [currentIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handlePrev, handleNext]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [currentIndex]);

  // Touch swipe handling for mobile lightbox
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const currentPhoto = currentIndex !== null && filtered[currentIndex] ? filtered[currentIndex] : null;

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
            backgroundImage: `url('${VILLA_IMAGES.galleryHeader}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundAttachment: 'fixed',
            opacity: 0.35,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-5 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Visual Showcase · {GALLERY_PHOTOS.length} Real Villa Photos
          </p>
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
            Villa Gallery
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p
            className="text-white/70 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
          >
            Explore every corner of The Villa Clover — from sun-drenched rooftop terraces to tranquil garden retreats and modern air-conditioned suites.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, #0d1b2a)' }}
        />
      </header>

      {/* ── CINEMATIC VILLA VIDEO TOUR ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12" style={{ background: '#0d1b2a' }}>
        <div className="max-w-7xl mx-auto">
          <VillaVideoPlayer
            badge="Cinematic Tour"
            title="4K Drone & Ground Walkthrough"
            subtitle="Watch the full cinematic tour of The Villa Clover — featuring aerial views of lush Galle surroundings, peaceful veranda, rooftop sundowner deck, and private luxury bedrooms."
            darkTheme={true}
          />
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section
        className="py-3 sm:py-5 px-3 sm:px-6 sticky top-20 z-30 shadow-xs"
        style={{ background: '#ffffff', borderBottom: '1px solid rgba(201,169,110,0.2)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-1.5 sm:gap-2.5 justify-center items-center">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isSelected = active === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setCurrentIndex(null);
                }}
                className="px-3 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: isSelected ? '#0d1b2a' : '#f8f9fa',
                  color: isSelected ? '#c9a96e' : '#4b5563',
                  border: `1px solid ${isSelected ? '#c9a96e' : '#e5e7eb'}`,
                  borderRadius: '2px',
                  boxShadow: isSelected ? '0 3px 10px rgba(13,27,42,0.12)' : 'none',
                }}
              >
                <span>{cat}</span>
                <span
                  className="px-1.5 py-0.5 text-[9px] sm:text-[10px] rounded font-semibold leading-none"
                  style={{
                    background: isSelected ? 'rgba(201,169,110,0.25)' : 'rgba(0,0,0,0.06)',
                    color: isSelected ? '#c9a96e' : '#6b7280',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-12" style={{ background: '#f8f5f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((photo, index) => (
              <GalleryImageCard
                key={photo.url + index}
                photo={photo}
                onOpen={() => handleOpenLightbox(index)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              No photos in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: '#0d1b2a' }}>
        <div className="reveal max-w-2xl mx-auto">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 300,
              color: 'white',
              marginBottom: '1.5rem',
            }}
          >
            Love What You See?
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Book The Villa Clover for your private holiday in Galle, Sri Lanka.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
              onNavigate('contact');
            }}
            className="btn-gold"
          >
            Book Your Stay
          </button>
        </div>
      </section>

      {/* ── LIGHTBOX PORTAL (Renders directly into document.body for guaranteed top-level viewport display) ── */}
      {currentPhoto &&
        createPortal(
          <div
            className="fixed inset-0 flex flex-col items-center justify-between p-4 md:p-6"
            style={{
              zIndex: 999999,
              background: 'rgba(5, 10, 18, 0.98)',
              backdropFilter: 'blur(16px)',
            }}
            onClick={handleCloseLightbox}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between z-20 text-white pb-2 max-w-6xl mx-auto gap-3">
              {/* Category & Counter Badge */}
              <div
                className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-white/90 border border-white/15 flex items-center gap-2 truncate"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-amber-300 font-semibold">{currentPhoto.category}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/80">
                  {currentIndex! + 1} / {filtered.length}
                </span>
              </div>

              {/* Top Navigation Controls: Prev, Next & Close */}
              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                {/* Arrow navigation buttons placed on top */}
                <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/15 p-0.5 shadow-md">
                  <button
                    className="p-2 sm:p-2.5 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    title="Previous photo"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <div className="w-px h-4 bg-white/20" />
                  <button
                    className="p-2 sm:p-2.5 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                    onClick={handleNext}
                    aria-label="Next photo"
                    title="Next photo"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/15 shadow-lg active:scale-95"
                  onClick={handleCloseLightbox}
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Center Area: Image & Nav Buttons */}
            <div
              className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-auto min-h-0"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Desktop Side Arrow Left */}
              <button
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-amber-600/80 text-white transition-all cursor-pointer z-30 border border-white/20 shadow-2xl hover:scale-110 active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image Container */}
              <div
                className="relative flex flex-col items-center justify-center max-h-full max-w-[95vw] md:max-w-[82vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.alt}
                  onLoad={() => setIsImgLoading(false)}
                  className={`max-w-full max-h-[64vh] sm:max-h-[72vh] object-contain rounded-xs shadow-2xl transition-opacity duration-300 select-none ${
                    isImgLoading ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'
                  }`}
                  style={{ display: 'block' }}
                />
                <p className="mt-3 text-white/90 text-xs md:text-sm text-center font-light tracking-wide px-4">
                  {currentPhoto.alt}
                </p>
              </div>

              {/* Desktop Side Arrow Right */}
              <button
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-amber-600/80 text-white transition-all cursor-pointer z-30 border border-white/20 shadow-2xl hover:scale-110 active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Mini Filmstrip */}
            <div
              className="w-full max-w-3xl overflow-x-auto py-2 flex items-center justify-center gap-2 z-20"
              onClick={(e) => e.stopPropagation()}
              style={{ scrollbarWidth: 'none' }}
            >
              {filtered.slice(Math.max(0, currentIndex! - 4), Math.min(filtered.length, currentIndex! + 5)).map((p) => {
                const realIndex = filtered.indexOf(p);
                const isCur = realIndex === currentIndex;
                return (
                  <button
                    key={p.url + realIndex}
                    onClick={() => handleOpenLightbox(realIndex)}
                    className={`shrink-0 w-12 h-9 rounded overflow-hidden cursor-pointer transition-all duration-200 border-2 ${isCur ? 'border-amber-400 scale-110 opacity-100 shadow-lg' : 'border-transparent opacity-40 hover:opacity-80'
                      }`}
                  >
                    <img src={p.url} alt="" className="w-full h-full object-cover" />
                  </button>
                );
              })}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
