import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevLoop",
  description: "Track your PRs and projects in one place.",
  icons: {
    icon: [
      { url: "/devloop-swirl.svg", type: "image/svg+xml" }
    ],
  }, 
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}