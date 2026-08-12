import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venra",
  description: "Intelligent carrier readiness for trucking companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full bg-background antialiased">
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
