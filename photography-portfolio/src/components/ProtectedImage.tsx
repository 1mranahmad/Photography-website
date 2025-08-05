'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  watermark?: boolean;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt: _alt, // eslint-disable-line @typescript-eslint/no-unused-vars
  className = '',
  onClick,
  watermark = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      // Set canvas dimensions to match container
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Calculate aspect ratio and positioning
      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imgAspect > canvasAspect) {
        drawHeight = rect.height;
        drawWidth = drawHeight * imgAspect;
        offsetX = (rect.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = rect.width;
        drawHeight = drawWidth / imgAspect;
        offsetX = 0;
        offsetY = (rect.height - drawHeight) / 2;
      }
      
      // Draw the image
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      
      // Add watermark if enabled
      if (watermark) {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        
        const watermarkText = '© Wildlife Portfolio';
        const textWidth = ctx.measureText(watermarkText).width;
        const spacing = 150;
        
        for (let x = 0; x < rect.width + textWidth; x += spacing) {
          for (let y = 0; y < rect.height + 30; y += spacing) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / 6);
            ctx.fillText(watermarkText, 0, 0);
            ctx.restore();
          }
        }
        ctx.globalAlpha = 1;
      }
      
      setIsLoaded(true);
    };
    
    img.src = src;
  }, [src, watermark]);

  return (
    <motion.div
      className={`image-container ${className}`}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          imageRendering: 'auto' as const,
          pointerEvents: 'none',
        }}
      />
      
      {/* Invisible overlay to prevent interaction */}
      <div className="absolute inset-0 z-10 bg-transparent" />
      
      {/* Additional watermark overlay */}
      {watermark && <div className="watermark" />}
      
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center">
          <div className="text-zinc-400 text-sm">Loading...</div>
        </div>
      )}
    </motion.div>
  );
};

export default ProtectedImage;