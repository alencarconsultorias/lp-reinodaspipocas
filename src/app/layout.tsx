import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Reino das Pipocas | A melhor pipoca da cidade",
  description:
    "Descubra o sabor incrível do Reino das Pipocas. Vários sabores irresistíveis feitos com ingredientes frescos e muito amor.",
  keywords: "pipoca, pipoca artesanal, pipoca gourmet, pipoca sabores",
  other: {
    version: "1.0.0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
