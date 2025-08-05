'use client';

import { motion } from 'framer-motion';
import ImageSlider from '@/components/ImageSlider';

const peopleImages = [
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
    alt: 'Portrait of a contemplative person',
    title: 'Quiet Reflection'
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108755-2616c9c02c8b?w=1200&h=800&fit=crop',
    alt: 'Environmental portrait outdoors',
    title: 'Natural Light Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=800&fit=crop',
    alt: 'Person in natural setting',
    title: 'Among the Trees'
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&h=800&fit=crop',
    alt: 'Candid lifestyle portrait',
    title: 'Authentic Moment'
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=800&fit=crop',
    alt: 'Professional headshot',
    title: 'Professional Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop',
    alt: 'Creative portrait with natural lighting',
    title: 'Golden Hour Portrait'
  },
];

export default function People() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white">
            People
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed selectable">
            Human connection through photography. These portraits capture authentic moments, 
            genuine emotions, and the unique character that makes each person special. 
            Every face tells a story worth preserving.
          </p>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImageSlider images={peopleImages} />
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-zinc-700"
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Portrait Philosophy</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Great portraits go beyond technical perfection. They capture the essence 
                  of a person – their personality, their story, their unique presence in 
                  the world. Every session is a collaboration.
                </p>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Natural light creates soft, flattering illumination</li>
                  <li>Environmental settings add context and story</li>
                  <li>Authentic expressions over forced poses</li>
                  <li>Comfortable atmosphere encourages genuine moments</li>
                  <li>Focus on connection between subject and viewer</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Portrait Services</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Whether for professional needs, family memories, or artistic expression, 
                  each portrait session is tailored to capture what makes you unique.
                </p>
                <div className="bg-zinc-800/50 p-6 rounded-lg mt-6">
                  <h3 className="text-white font-medium mb-4">Session Types</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Environmental</span>
                      <span className="text-zinc-400">Natural settings</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Professional</span>
                      <span className="text-zinc-400">Business headshots</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lifestyle</span>
                      <span className="text-zinc-400">Candid moments</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Creative</span>
                      <span className="text-zinc-400">Artistic portraits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}