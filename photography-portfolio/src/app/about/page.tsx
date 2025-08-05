'use client';

import { motion } from 'framer-motion';
import ProtectedImage from '@/components/ProtectedImage';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-8 text-white">
              About the Artist
            </h1>
            
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed selectable">
              <p>
                Welcome to my world of wildlife and nature photography.                 I&apos;m a passionate photographer 
                dedicated to capturing the raw beauty and intimate moments of the natural world.
              </p>
              
              <p>
                My journey began over a decade ago with a simple fascination for birds in my backyard. 
                What started as casual observation evolved into a deep commitment to wildlife conservation 
                through visual storytelling.
              </p>
              
              <p>
                Each photograph represents hours of patient waiting, careful observation, and respect 
                for the subjects I encounter. My work spans from the smallest songbirds to vast 
                landscapes, always with an emphasis on ethical wildlife photography practices.
              </p>
              
              <p>
                Through my lens, I aim to share the wonder of nature and inspire others to appreciate 
                and protect the incredible biodiversity that surrounds us. Every image tells a story 
                of resilience, beauty, and the delicate balance of our natural world.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-light mb-6 text-white">Specializations</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Wildlife Photography</h3>
                  <p className="text-zinc-400 text-sm">Birds, mammals, and wildlife behavior</p>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Landscape Photography</h3>
                  <p className="text-zinc-400 text-sm">Natural landscapes and scenic vistas</p>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Conservation</h3>
                  <p className="text-zinc-400 text-sm">Environmental awareness through imagery</p>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Education</h3>
                  <p className="text-zinc-400 text-sm">Teaching ethical wildlife photography</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800">
              <ProtectedImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Wildlife photographer portrait"
                className="w-full h-full"
                watermark={false}
              />
            </div>
          </motion.div>
        </div>

        {/* Equipment & Ethics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-zinc-700"
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Photography Ethics</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  My approach to wildlife photography is built on respect and responsibility. 
                  I believe in capturing authentic moments without disturbing natural behaviors.
                </p>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Maintain safe distances from all wildlife</li>
                  <li>Never bait or manipulate animals for photographs</li>
                  <li>Respect nesting sites and sensitive habitats</li>
                  <li>Support local conservation efforts</li>
                  <li>Educate others about ethical wildlife photography</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Equipment</h2>
              <div className="space-y-4 text-zinc-300 selectable">
                <p>
                  Quality equipment enables me to capture sharp, detailed images while maintaining 
                  the safe distances that ethical wildlife photography requires.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-zinc-700 pb-1">
                    <span>Camera Bodies:</span>
                    <span className="text-zinc-400">Full-frame DSLR/Mirrorless</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-700 pb-1">
                    <span>Primary Lens:</span>
                    <span className="text-zinc-400">400-600mm telephoto</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-700 pb-1">
                    <span>Landscape:</span>
                    <span className="text-zinc-400">14-24mm wide-angle</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-700 pb-1">
                    <span>Support:</span>
                    <span className="text-zinc-400">Carbon fiber tripods</span>
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