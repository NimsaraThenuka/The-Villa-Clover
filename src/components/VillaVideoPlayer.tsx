import { useState } from 'react';
import { Play } from 'lucide-react';
import { VILLA_IMAGES } from '../data/villaImages';

interface VillaVideoPlayerProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  darkTheme?: boolean;
}

export default function VillaVideoPlayer({
  title = 'Villa Video Tour',
  subtitle = 'Take a short video walkthrough of The Villa Clover.',
  badge = 'Video Tour',
  darkTheme = false,
}: VillaVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoEmbedUrl = 'https://drive.google.com/file/d/1n4O6iAmk777J9Q9Pwe1NkH3WGpKOeijt/preview';

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-8 reveal">
        <p className="section-label mb-2">{badge}</p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 400,
            color: darkTheme ? '#ffffff' : '#0d1b2a',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <div className="gold-divider mx-auto mt-4 mb-3" />
        <p
          className={`max-w-lg mx-auto text-xs sm:text-sm leading-relaxed ${
            darkTheme ? 'text-white/65' : 'text-gray-500'
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {subtitle}
        </p>
      </div>

      {/* Video Container Frame - Compact & Clean */}
      <div className="reveal-scale max-w-3xl mx-auto">
        <div
          className="relative w-full aspect-video rounded-xs overflow-hidden shadow-lg border bg-[#0d1b2a]"
          style={{ borderColor: 'rgba(201, 169, 110, 0.25)' }}
        >
          {!isPlaying ? (
            <div
              className="relative w-full h-full group cursor-pointer select-none"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={VILLA_IMAGES.galleryHeader || VILLA_IMAGES.hero}
                alt="Villa Clover Video Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'brightness(0.75)' }}
              />

              <div
                className="absolute inset-0 flex items-center justify-center transition-colors group-hover:bg-black/20"
                style={{ background: 'rgba(13, 27, 42, 0.35)' }}
              >
                <button
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white bg-black/60 hover:bg-[#c9a96e] hover:text-[#0d1b2a] transition-all duration-300 shadow-xl border border-white/30 hover:border-transparent group-hover:scale-110 cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full overflow-hidden bg-black">
              <iframe
                src={videoEmbedUrl}
                title="The Villa Clover - Video Tour"
                className="w-full h-[calc(100%+60px)] -mt-[60px] border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
              {/* Block any top-right pop-out click */}
              <div
                className="absolute top-0 right-0 w-32 h-16 z-20 pointer-events-auto"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
