import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Reino das Pipocas | Pipocas Artesanais",
  description:
    "Descubra o sabor incrível das pipocas artesanais do Reino das Pipocas. Mais de 20 sabores irresistíveis feitos com ingredientes frescos e muito amor.",
  keywords: "pipoca, pipoca artesanal, pipoca gourmet, pipoca sabores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
