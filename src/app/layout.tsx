import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Africa Structures — Penser, structurer et agir pour des sociétés africaines justes et durables",
  description:
    "Africa Structures est un espace indépendant de réflexion, d'expérimentation et de transmission, dédié à la transformation citoyenne, institutionnelle et culturelle des sociétés africaines.",
  keywords: [
    "Afrique",
    "think tank",
    "gouvernance",
    "citoyenneté",
    "développement",
    "culture africaine",
    "structures citoyennes",
    "Sénégal",
    "intelligence artificielle",
    "innovation sociale",
    "Dakar",
  ],
  authors: [{ name: "Africa Structures" }],
  creator: "Africa Structures",
  publisher: "Africa Structures",
  metadataBase: new URL("https://africastructures.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Africa Structures — Think & Do Tank africain",
    description:
      "Penser, structurer et agir pour des sociétés africaines justes et durables.",
    type: "website",
    locale: "fr_SN",
    url: "https://africastructures.org",
    siteName: "Africa Structures",
    images: [
      {
        url: "/logo-africa-structures.png",
        width: 1024,
        height: 1024,
        alt: "Africa Structures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Structures",
    description:
      "Penser, structurer et agir pour des sociétés africaines justes et durables.",
    images: ["/logo-africa-structures.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}