"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const startAudio = async () => {
      if (!audioRef.current) return;

      audioRef.current.muted = false;

      try {
        await audioRef.current.play();
      } catch (err) {
        console.log("Autoplay blocked");
      }

      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("click", startAudio);
    };

    // try both scroll + click (more reliable)
    window.addEventListener("scroll", startAudio, { once: true });
    window.addEventListener("click", startAudio, { once: true });

    return () => {
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("click", startAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop muted>
      <source src="/sone.mp3" type="audio/mpeg" />
    </audio>
  );
}
