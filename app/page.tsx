"use client";
import Link from "next/link";
import AudioPlayer from "@/components/Audioplayer";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MemoryLanePage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    // Browsers may still block this if it's the first thing on the page
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay was prevented:", error);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <AudioPlayer /> */}
      <audio ref={audioRef} src="/sone.mp3" />
      <Link
        href="/album"
        className="btn btn-next bg-[#800020] text-white px-8 py-3 rounded-full"
      >
        💕 Para Tu 💕
      </Link>
    </div>
  );
}
