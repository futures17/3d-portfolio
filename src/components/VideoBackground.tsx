interface VideoBackgroundProps {
  src: string;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
}

const VideoBackground = ({
  src,
  overlayColor = '#000000',
  overlayOpacity = 0.5,
  className = '',
}: VideoBackgroundProps) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Video layer */}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      {/* Dark overlay layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default VideoBackground;
