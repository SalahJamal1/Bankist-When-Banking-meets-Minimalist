import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import BankContext from './_context/BankContext';

const poppins = Poppins({
  weight: ['100', '300', '400', '200', '500', '600', '700'],
  variable: '--poppins',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bankist | When Banking meets Minimalist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <BankContext>
        <body
          suppressHydrationWarning
          className={`${poppins.className} bg-[#f3f3f3] text-[#444444] font-sans overflow-x-hidden`}
        >
          {children}
        </body>
      </BankContext>
    </html>
  );
}
