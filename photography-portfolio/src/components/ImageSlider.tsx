'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import ProtectedImage from './ProtectedImage';

interface ImageData {
  src: string;
  alt: string;
  title?: string;
}

interface ImageSliderProps {
  images: ImageData[];
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextFullscreen = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((fullscreenIndex + 1) % images.length);
    }
  };

  const prevFullscreen = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((fullscreenIndex - 1 + images.length) % images.length);
    }
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-zinc-800 rounded-lg">
        <p className="text-zinc-400">No images available</p>
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Main slider */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ProtectedImage
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full"
                onClick={() => openFullscreen(currentIndex)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <HiChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <HiChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-white'
                    : 'border-zinc-600 hover:border-zinc-400'
                }`}
              >
                <ProtectedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full"
                  watermark={false}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fullscreen-overlay"
            onClick={closeFullscreen}
          >
            <div className="relative max-w-screen-xl max-h-screen-xl w-full h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <ProtectedImage
                  src={images[fullscreenIndex].src}
                  alt={images[fullscreenIndex].alt}
                  className="max-w-full max-h-full"
                />
              </motion.div>

              {/* Close button */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <HiX size={24} />
              </button>

              {/* Navigation in fullscreen */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevFullscreen();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  >
                    <HiChevronLeft size={28} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextFullscreen();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                  >
                    <HiChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Image info in fullscreen */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="text-center">
                  {images[fullscreenIndex].title && (
                    <div className="font-medium">{images[fullscreenIndex].title}</div>
                  )}
                  <div className="text-sm opacity-75">
                    {fullscreenIndex + 1} / {images.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageSlider;