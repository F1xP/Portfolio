import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';

const roboto = Roboto({
  weight: ['500', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "F1x's Portfolio Website.",
  description: "F1x's Portfolio.",
  openGraph: {
    title: "F1x's Portfolio Website.",
    url: 'https://unknown',
    type: 'website',
    images: ['https://goblintime.online/Logo.png'],
  },
  icons: 'https://goblintime.online/favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative bg-background dark:bg-dbackground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
