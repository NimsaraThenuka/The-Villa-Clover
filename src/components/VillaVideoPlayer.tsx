import { useState } from 'react';
import { Play, Sparkles, ExternalLink, Film, ShieldCheck } from 'lucide-react';
import { VILLA_IMAGES } from '../data/villaImages';

interface VillaVideoPlayerProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  darkTheme?: boolean;
}

export default function VillaVideoPlayer({
  title = 'Experience The Villa in Motion',
  subtitle = 'Take a cinematic drone and walkthrough tour through our serene gardens, sun-drenched rooftop terrace, and luxury air-conditioned suites.',
  badge = 'Cinematic Villa Tour',
  darkTheme = false,
}: VillaVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoEmbedUrl = 'https://drive.google.com/file/d/1n4O6iAmk777J9Q9Pwe1NkH3WGpKOeijt/preview';
  const videoDirectUrl = 'https://drive.google.com/file/d/1n4O6iAmk777J9Q9Pwe1NkH3WGpKOeijt/view?usp=drive_link';

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 reveal">
        <p className="section-label mb-3 sm:mb-4 flex items-center justify-center gap-2">
          <Film className="w-3.5 h-3.5 text-[#c9a96e]" />
          <span>{badge}</span>
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 400,
            color: darkTheme ? '#ffffff' : '#0d1b2a',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <div className="gold-divider mx-auto mt-5 mb-4" />
        <p
          className={`max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed ${
            darkTheme ? 'text-white/65' : 'text-gray-600'
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {subtitle}
        </p>
      </div>

      {/* Video Container Frame */}
      <div className="reveal-scale max-w-5xl mx-auto">
        <div
          className="relative w-full aspect-video rounded-sm overflow-hidden shadow-2xl border"
          style={{
            borderColor: 'rgba(201, 169, 110, 0.35)',
            background: '#0d1b2a',
          }}
        >
          {!isPlaying ? (
            /* Poster & Play Overlay */
            <div className="relative w-full h-full group cursor-pointer select-none" onClick={() => setIsPlaying(true)}>
              {/* Background Poster Image */}
              <img
                src={VILLA_IMAGES.galleryHeader || VILLA_IMAGES.hero}
                alt="The Villa Clover Cinematic Video Preview"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: 'brightness(0.7)' }}
              />

              {/* Luxury Gradient Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(13,27,42,0.3) 0%, rgba(13,27,42,0.85) 100%)',
                }}
              />

              {/* Ambient Glow & Center Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                {/* Glowing Pulse Ring */}
                <div className="relative flex items-center justify-center mb-4">
                  <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-amber-400/20 animate-ping" />
                  <div className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-amber-400/30 animate-pulse" />
                  <button
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-[#0d1b2a] shadow-2xl transition-all duration-300 group-hover:scale-110 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #dfc08a 0%, #c9a96e 50%, #b89355 100%)',
                      boxShadow: '0 0 35px rgba(201,169,110,0.6)',
                    }}
                    aria-label="Play video tour"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-[#0d1b2a]" />
                  </button>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-300/30 text-amber-300 text-[11px] sm:text-xs tracking-wider uppercase font-semibold mb-2">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Watch Cinematic Tour</span>
                </div>

                <p
                  className="text-white text-sm sm:text-lg font-light tracking-wide max-w-md drop-shadow-md"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Click to play 4K Drone & Walkthrough
                </p>
              </div>

              {/* Bottom Tag Bar */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none z-10 text-white/80 text-[11px] sm:text-xs">
                <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Official Villa Video
                </span>
                <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 hidden sm:inline-block">
                  HD 1080p
                </span>
              </div>
            </div>
          ) : (
            /* Embedded Google Drive Player */
            <div className="w-full h-full relative bg-black">
              <iframe
                src={videoEmbedUrl}
                title="The Villa Clover - Cinematic Drone & Walkthrough Video Tour"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Video Highlights & Direct External Link */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs">
            <span
              className={`px-3 py-1.5 rounded-sm border flex items-center gap-1.5 ${
                darkTheme
                  ? 'bg-white/5 border-white/15 text-white/75'
                  : 'bg-white border-gray-200 text-gray-700 shadow-2xs'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#c9a96e]" />
              Real Drone & Ground Footage
            </span>
            <span
              className={`px-3 py-1.5 rounded-sm border flex items-center gap-1.5 ${
                darkTheme
                  ? 'bg-white/5 border-white/15 text-white/75'
                  : 'bg-white border-gray-200 text-gray-700 shadow-2xs'
              }`}
            >
              <span>🌿</span>
              Garden, River & Rooftop Views
            </span>
          </div>

          <a
            href={videoDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#c9a96e] hover:text-amber-300 transition-colors uppercase tracking-wider py-1 px-2 group cursor-pointer"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>Open in Full HD (Drive)</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
