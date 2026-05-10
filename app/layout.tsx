import type { Metadata } from "next";

import "./globals.css";
import AudioPlayer from "@/components/Audioplayer";
import Link from "next/link";
import { useEffect, useRef } from "react";
export const metadata: Metadata = {
  title: "Para El Amor De Mi Vida <3",
  description: "Una Carta De Amor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
