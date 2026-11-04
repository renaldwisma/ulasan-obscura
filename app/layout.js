import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Google Review by OBSCURA',
  description: 'Tingkatkan rating dan reputasi bisnis Anda di Google Maps dengan kartu NFC & QR Code OBSCURA.',
  icons: {
    icon: './app/favicon.ico',
    shortcut: './app/favicon.ico',
    apple: './app/favicon.ico',
  },
  openGraph: {
    title: 'Google Review by OBSCURA',
    description: 'Tingkatkan rating dan reputasi bisnis Anda di Google Maps dengan kartu NFC & QR Code OBSCURA.',
    url: 'https://ulasan-obscura.vercel.app',
    siteName: 'OBSCURA',
    images: [
      {
        url: './public/OG.jpg',
        width: 1200,
        height: 630,
        alt: 'OBSCURA Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Review by OBSCURA',
    description: 'Tingkatkan rating dan reputasi bisnis Anda di Google Maps dengan kartu NFC & QR Code OBSCURA.',
    images: ['./public/OG.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}