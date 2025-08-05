'use client';

import { motion } from 'framer-motion';
import ImageSlider from '@/components/ImageSlider';

const landscapeImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    alt: 'Mountain landscape at sunrise',
    title: 'Alpine Dawn'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    alt: 'Misty forest landscape',
    title: 'Enchanted Forest'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
    alt: 'Desert landscape with cacti',
    title: 'Desert Solitude'
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    alt: 'Coastal cliffs and ocean',
    title: 'Rugged Coastline'
  },
  {
    src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800&fit=crop',
    alt: 'Rolling hills in golden light',
    title: 'Golden Hills'
  },
  {
    src: 'https://images.unsplash.com/photo-1418065460487-3d7063cc9cd0?w=1200&h=800&fit=crop',
    alt: 'Waterfall in lush forest',
    title: 'Hidden Falls'
  },
];

export default function Landscapes() {
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
            Landscapes
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed selectable">
            From towering mountain peaks to serene forest paths, these landscapes showcase 
            the raw beauty and diverse character of our natural world. Each image captures 
            a moment in time when light, weather, and terrain align in perfect harmony.
          </p>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImageSlider images={landscapeImages} />
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
              <h2 className="text-3xl font-light mb-8 text-white">Landscape Photography</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Landscape photography is about more than just capturing beautiful scenery. 
                  It&apos;s about conveying the emotion and atmosphere of a place, telling the 
                  story of our planet&apos;s incredible diversity.
                </p>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Golden hour and blue hour provide magical lighting</li>
                  <li>Weather conditions create dramatic atmospheres</li>
                  <li>Wide-angle lenses capture expansive vistas</li>
                  <li>Graduated filters balance exposure</li>
                  <li>Patience for perfect conditions is essential</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Locations & Seasons</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Each location offers unique opportunities throughout the seasons. 
                  Understanding the rhythm of nature helps capture landscapes at their peak.
                </p>
                <div className="bg-zinc-800/50 p-6 rounded-lg mt-6">
                  <h3 className="text-white font-medium mb-4">Favorite Locations</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mountain Ranges</span>
                      <span className="text-zinc-400">Alpine, Cascades, Rockies</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Forests</span>
                      <span className="text-zinc-400">Old Growth, Redwoods</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coastlines</span>
                      <span className="text-zinc-400">Pacific, Atlantic Shores</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deserts</span>
                      <span className="text-zinc-400">Southwest, Mojave</span>
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