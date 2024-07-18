import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { DesktopNavbar } from "@/components/navigation/desktop-nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Educación For All",
  description: "",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable,
        )}
      >
        <DesktopNavbar />
        {children}
        <Footer showInfo={false} />
      </body>
    </html>
  );
}
