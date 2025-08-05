import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ImageProtection from '@/components/ImageProtection';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Wildlife Portfolio - Professional Photography',
  description: 'A minimalist portfolio showcasing wildlife, bird, landscape, and people photography',
  keywords: 'wildlife photography, bird photography, landscape photography, nature photography',
  authors: [{ name: 'Wildlife Photographer' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Wildlife Portfolio - Professional Photography',
    description: 'A minimalist portfolio showcasing wildlife, bird, landscape, and people photography',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ImageProtection />
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
