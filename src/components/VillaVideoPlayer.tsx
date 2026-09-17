import { useState, useRef } from 'react';
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoSrc = '/video/villa-tour.mp4';

  const handleStartPlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

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

      {/* Video Container Frame - Native HTML5 Player */}
      <div className="reveal-scale max-w-[320px] sm:max-w-[350px] md:max-w-[370px] mx-auto">
        <div
          className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border-2 bg-black"
          style={{ borderColor: 'rgba(201, 169, 110, 0.35)' }}
        >
          {!isPlaying ? (
            <div
              className="relative w-full h-full group cursor-pointer select-none"
              onClick={handleStartPlay}
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
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center text-[#0d1b2a] bg-[#c9a96e] hover:bg-amber-300 transition-all duration-300 shadow-2xl group-hover:scale-110 cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-7 h-7 fill-current ml-0.5 text-[#0d1b2a]" />
                </button>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover bg-black"
              preload="auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}
