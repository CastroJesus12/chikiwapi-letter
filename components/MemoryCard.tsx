"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export interface Memory {
  image: any;
  caption: string;
  rotationAngle: number;
  emoji: string;
}

interface MemoryCardProps {
  memory: Memory;
  index: number;
}

export default function MemoryCard({ memory, index }: MemoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const timer = setTimeout(
      () => {
        el.classList.add("visible");
      },
      300 + index * 120,
    );
    return () => clearTimeout(timer);
  }, [index]);

  const tapeRotation = memory.rotationAngle * 2;

  return (
    <div
      ref={cardRef}
      className="memory-card"
      style={
        {
          "--rotate": `${memory.rotationAngle}deg`,
        } as React.CSSProperties
      }
    >
      {/* Tape */}
      <div
        className="card-tape"
        style={
          {
            "--tape-rotate": `${tapeRotation}deg`,
          } as React.CSSProperties
        }
      />

      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          className="memory-img"
          src={memory.image}
          alt={`Memory ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    </div>
  );
}
