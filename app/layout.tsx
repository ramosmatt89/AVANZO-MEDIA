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
  title: 'Agência de Marketing Digital em Lisboa | Websites, Anúncios e Google Reviews',
  description: 'Ajudamos negócios em Lisboa a conseguir mais clientes com websites profissionais, anúncios online e aumento de avaliações no Google (LocScale). Especialistas em performance e conversão.',
  keywords: [
    'agência de marketing digital Lisboa',
    'criação de sites Lisboa',
    'anúncios online Lisboa',
    'Google Ads Lisboa',
    'aumentar avaliações Google',
    'gestão de reputação online Lisboa',
    'marketing para negócios locais Lisboa',
    'Avanzo Media',
    'LocScale'
  ],
  authors: [{ name: 'Mateus Ramos' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#050505',
  openGraph: {
    title: 'Agência de Marketing Digital em Lisboa | Avanzo Media',
    description: 'Especialistas em websites de alta performance, anúncios online e gestão de reputação em Lisboa.',
    url: 'https://avanzomedia.com',
    siteName: 'Avanzo Media',
    locale: 'pt_PT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://avanzomedia.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avanzo Media",
  "image": "https://i.ibb.co/GvVgdPSd/Cap-3.jpg",
  "@id": "https://avanzomedia.com",
  "url": "https://avanzomedia.com",
  "telephone": "+351910149603",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lisboa",
    "addressLocality": "Lisboa",
    "addressRegion": "Lisboa",
    "postalCode": "1000",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.7223,
    "longitude": -9.1393
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://wa.me/351910149603"
  ],
  "description": "Agência premium de marketing digital em Lisboa especializada em criação de websites, anúncios online e gestão de reputação local.",
  "priceRange": "$$"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://i.ibb.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased selection:bg-emerald-500/30 selection:text-emerald-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
