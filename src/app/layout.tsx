import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../css/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BobStack",
  description: "Nós podemos construir sua infraestrutura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-grayMedium",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
