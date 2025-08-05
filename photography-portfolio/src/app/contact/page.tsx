'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiCamera } from 'react-icons/hi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend here
    alert('Thank you for your message! I&apos;ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Contact
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed selectable">
            Let&apos;s discuss your photography needs, collaborate on a project, or simply 
            connect over our shared love of nature and wildlife. I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light mb-8 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors selectable"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors selectable"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors selectable"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors resize-none selectable"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-zinc-200 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light mb-8 text-white">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <HiMail className="text-white text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-zinc-400 selectable">wildlife@photographer.com</p>
                    <p className="text-sm text-zinc-500 mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiPhone className="text-white text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-zinc-400 selectable">+1 (555) 123-4567</p>
                    <p className="text-sm text-zinc-500 mt-1">
                      Available weekdays 9 AM - 6 PM PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiLocationMarker className="text-white text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-zinc-400 selectable">Pacific Northwest, USA</p>
                    <p className="text-sm text-zinc-500 mt-1">
                      Available for travel worldwide
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiCamera className="text-white text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Services</h3>
                    <p className="text-zinc-400">Wildlife, Landscape & Portrait Photography</p>
                    <p className="text-sm text-zinc-500 mt-1">
                      Conservation projects, prints, and workshops
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-zinc-800/50 p-6 rounded-lg">
              <h3 className="text-white font-medium mb-4">Current Availability</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-300">Portrait Sessions</span>
                  <span className="text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Wildlife Workshops</span>
                  <span className="text-yellow-400">Limited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Landscape Expeditions</span>
                  <span className="text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300">Print Orders</span>
                  <span className="text-green-400">Always Available</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-zinc-800/30 p-6 rounded-lg border border-zinc-700">
              <h3 className="text-white font-medium mb-2">Response Time</h3>
              <p className="text-zinc-400 text-sm">
                I personally read and respond to every message. While I&apos;m often in the field, 
                I check email regularly and aim to respond within 24 hours. For urgent inquiries, 
                please call directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}