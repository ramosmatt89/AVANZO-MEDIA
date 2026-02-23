import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Avanzo Media | Websites, Anúncios & Gateways',
  description: 'Agência premium de tecnologia e marketing digital em Lisboa. Especialistas em websites de alta performance, anúncios online e gateways de pagamento.',
  keywords: ['marketing digital', 'websites', 'lisboa', 'anúncios online', 'gateways de pagamento', 'ia', 'tecnologia'],
  authors: [{ name: 'Mateus Ramos' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#050505',
  openGraph: {
    title: 'Avanzo Media | Websites, Anúncios & Gateways',
    description: 'Agência premium de tecnologia e marketing digital em Lisboa.',
    url: 'https://avanzomedia.com',
    siteName: 'Avanzo Media',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-white antialiased selection:bg-emerald-500/30 selection:text-emerald-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
