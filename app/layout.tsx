import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Modal from '@/components/Modal';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Rent rooms anywhere around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
};