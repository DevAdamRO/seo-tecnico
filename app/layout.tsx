import type { Metadata } from "next";

export const metadata: Metadata = {
 metadataBase: new URL("https://example.com"),

 title: {
  default: "Frontend SEO & Performance Playbook",
  template: "%s | Frontend SEO & Performance",
 },

 description: "Repositorio práctico sobre SEO técnico y performance en aplicaciones modernas con Next.js y React.",

 robots: {
  index: true,
  follow: true,
 },

 alternates: {
  canonical: "/",
 },

 openGraph: {
  type: "website",
  locale: "es_CL",
  url: "https://example.com",
  siteName: "Frontend SEO & Performance",
  title: "Frontend SEO & Performance Playbook",
  description: "Guía práctica de SEO técnico, Core Web Vitals y performance en Next.js.",
 },

 twitter: {
  card: "summary_large_image",
  title: "Frontend SEO & Performance Playbook",
  description: "SEO técnico y performance aplicado a proyectos reales con Next.js.",
 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang='es'>
   <body>{children}</body>
  </html>
 );
}
