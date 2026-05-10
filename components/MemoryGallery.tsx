"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import MemoryCard, { Memory } from "./MemoryCard";

interface MemoryGalleryProps {
  memories: Memory[];
}

export default function MemoryGallery({ memories }: MemoryGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      {/* Slideshow Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
          gap: "1rem",
        }}
      ></div>

      {/* Gallery */}
      <div className="gallery" ref={galleryRef}>
        {memories.map((memory, index) => (
          <MemoryCard key={index} memory={memory} index={index} />
        ))}
      </div>
    </div>
  );
}
