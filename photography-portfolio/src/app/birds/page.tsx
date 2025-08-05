'use client';

import { motion } from 'framer-motion';
import ImageSlider from '@/components/ImageSlider';

const birdImages = [
  {
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
    alt: 'Eagle soaring through the sky',
    title: 'Majestic Eagle'
  },
  {
    src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=800&fit=crop',
    alt: 'Colorful hummingbird in flight',
    title: 'Ruby-throated Hummingbird'
  },
  {
    src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=1200&h=800&fit=crop',
    alt: 'Great blue heron standing in water',
    title: 'Great Blue Heron'
  },
  {
    src: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=1200&h=800&fit=crop',
    alt: 'Owl perched on a branch',
    title: 'Barred Owl'
  },
  {
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
    alt: 'Cardinal on winter branch',
    title: 'Northern Cardinal'
  },
  {
    src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=800&fit=crop',
    alt: 'Pelican in flight over water',
    title: 'Brown Pelican'
  },
];

export default function Birds() {
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
            Birds
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed selectable">
            Capturing the grace, beauty, and incredible diversity of our feathered friends. 
            From soaring raptors to delicate songbirds, each species tells a unique story 
            of adaptation and survival in the natural world.
          </p>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImageSlider images={birdImages} />
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
              <h2 className="text-3xl font-light mb-8 text-white">Bird Photography Techniques</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Photographing birds requires patience, understanding of behavior, and respect 
                  for their natural habitat. Each species presents unique challenges and rewards.
                </p>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Early morning and late afternoon provide the best light</li>
                  <li>Understanding bird behavior helps predict movements</li>
                  <li>Long telephoto lenses maintain safe distances</li>
                  <li>Fast shutter speeds freeze motion</li>
                  <li>Continuous autofocus tracks moving subjects</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Conservation Focus</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Many bird species face significant challenges from habitat loss, climate change, 
                  and human interference. Photography can play a vital role in conservation awareness.
                </p>
                <div className="bg-zinc-800/50 p-6 rounded-lg mt-6">
                  <h3 className="text-white font-medium mb-4">Featured Species</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Raptors</span>
                      <span className="text-zinc-400">Eagles, Hawks, Owls</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waterbirds</span>
                      <span className="text-zinc-400">Herons, Pelicans, Ducks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Songbirds</span>
                      <span className="text-zinc-400">Cardinals, Finches, Warblers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hummingbirds</span>
                      <span className="text-zinc-400">Ruby-throated, Anna&apos;s</span>
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