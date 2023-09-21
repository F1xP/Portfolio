import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
  weight: ['500', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://f1x.vercel.app'),
  title: "F1x's Portfolio Website.",
  description: "F1x's Portfolio.",
  openGraph: {
    title: "F1x's Portfolio Website.",
    url: 'https://f1x.vercel.app',
    type: 'website',
    images: '/Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative bg-background dark:bg-dbackground`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
