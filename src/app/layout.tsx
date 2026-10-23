import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Software Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description:
    "Software Engineer studying at Addis Ababa University & Co-founder of Endebeto, specializing in full-stack web development, scalable backend APIs, and applied AI workflows.",
  keywords: [
    "Bisrat Beriso",
    "Bisrat Beriso Wake",
    "Software Engineer Ethiopia",
    "AI Engineer Addis Ababa",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "Endebeto",
    "INSA",
    "Revelo",
    "iCog Labs",
    "A2SV",
    "Africa to Silicon Valley",
    "Addis Ababa University",
    "AXIS",
    "Legalink",
    "RouteCast",
    "IACMS",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "C++",
    "Portfolio",
  ],
  authors: [{ name: "Bisrat Beriso Wake", url: DATA.url }],
  creator: "Bisrat Beriso Wake",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${DATA.name} | Software Engineer`,
    description:
      "Software Engineer studying at Addis Ababa University & Co-founder of Endebeto, specializing in full-stack web development, scalable backend APIs, and applied AI workflows.",
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Software Engineer`,
    card: "summary_large_image",
    description:
      "Software Engineer studying at Addis Ababa University & Co-founder of Endebeto, specializing in full-stack web development, scalable backend APIs, and applied AI workflows.",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "h4bcn58hYXJSE40nKq8xIPV7N02PX3mAhrma27nDAig",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  alternateName: ["Bisrat Beriso"],
  url: DATA.url,
  image: `${DATA.url}/bisrat-zoomed.jpg`,
  sameAs: [
    "https://linkedin.com/in/bisrat-beriso",
    "https://github.com/bisrat6",
    "https://wa.me/251982305539",
  ],
  jobTitle: "Software Engineer & Full-Stack Developer",
  worksFor: [
    { "@type": "Organization", name: "INSA" },
    { "@type": "Organization", name: "Revelo" },
    { "@type": "Organization", name: "iCog Labs" },
    { "@type": "Organization", name: "A2SV (Africa to Silicon Valley)" },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Addis Ababa University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  email: "bisratberiso@gmail.com",
  telephone: "+251982305539",
  knowsAbout: [
    "AI Engineering",
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Apache Kafka",
    "GraphQL",
    "Data Structures & Algorithms",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
