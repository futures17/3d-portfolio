import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

const VideoBackground = ({ 
  src, 
  className = '', 
  overlayColor = '#000000', 
  overlayOpacity = 0.5 
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.includes('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(e => console.log("Video play error:", e));
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(e => console.log("Video play error:", e));
        });
      }
    } else {
      video.src = src;
      video.load(); // Ensure local files are loaded
      video.play().catch(e => console.log("Video play error:", e));
    }
  }, [src]);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden -z-10 ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />
    </div>
  );
};

export default VideoBackground;
