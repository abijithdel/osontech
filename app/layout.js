import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.osontech.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "OsonTech – Digital Marketing & Web Development Agency in Calicut",
    template: "%s | OsonTech",
  },
  description:
    "OsonTech is a digital marketing and web development agency in Calicut (Kozhikode), Kerala. We offer SEO, Google Ads, social media marketing, WordPress, Shopify, and custom software development.",

  keywords: [
    "Digital Marketing Agency in Calicut",
    "Web Development Company in Calicut",
    "SEO Agency in Calicut",
    "Web Design Company in Calicut",
    "Social Media Marketing Agency in Calicut",
    "Google Ads Agency in Calicut",
    "WordPress Development in Calicut",
    "Shopify Development in Calicut",
    "Software Development in Calicut",
    "Digital Marketing Agency in Kozhikode",
    "Web Development Company in Kozhikode",
    "OsonTech",
  ],

  authors: [
    { name: "OsonTech", url: BASE_URL },
  ],
  creator: "OsonTech",
  publisher: "OsonTech",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "OsonTech",
    title: "OsonTech – Digital Marketing & Web Development Agency in Calicut",
    description:
      "OsonTech is a digital marketing and web development agency in Calicut (Kozhikode), Kerala. We offer SEO, Google Ads, social media marketing, WordPress, Shopify, and custom software development.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "OsonTech – Digital Marketing & Web Development Agency in Calicut, Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OsonTech – Digital Marketing & Web Development Agency in Calicut",
    description:
      "OsonTech is a digital marketing and web development agency in Calicut (Kozhikode), Kerala. We offer SEO, Google Ads, social media marketing, WordPress, Shopify, and custom software development.",
    images: ["/logo.png"],
    creator: "@osontech",
    site: "@osontech",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

