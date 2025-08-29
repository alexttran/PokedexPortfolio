export const metadata = {
  title: 'Pokédex Portfolio',
  description: 'A Pokémon‑inspired developer portfolio',
};

import './globals.css';
import { VT323 } from 'next/font/google';

const vt323 = VT323({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${vt323.className} bg-poke-50 text-poke-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors`}>{children}</body>
    </html>
  );
}