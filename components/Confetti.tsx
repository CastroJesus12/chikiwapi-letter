"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  sway: number;
}

export default function Confetti() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const colors = ["#6d0016", "#880808"];
    const generated: Heart[] = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 18 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 4 + 5,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.45 + 0.35,
      sway: (Math.random() - 0.5) * 80,
    }));
    setHearts(generated);
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <svg
          key={h.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            position: "fixed",
            top: "-40px",
            left: `${h.left}vw`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            fill: h.color,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            animationName: "heartFall",
            animationTimingFunction: "ease-in",
            animationIterationCount: "infinite",
            zIndex: 0,
            pointerEvents: "none",
            filter: `drop-shadow(0 1px 3px ${h.color}99)`,
            ["--sway" as string]: `${h.sway}px`,
          }}
        >
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
        </svg>
      ))}

      <style>{`
        @keyframes heartFall {
          0% {
            transform: translateY(0) translateX(0) rotate(-15deg) scale(1);
          }
          25% {
            transform: translateY(25vh) translateX(var(--sway)) rotate(10deg) scale(1.05);
          }
          50% {
            transform: translateY(50vh) translateX(0px) rotate(-8deg) scale(0.95);
          }
          75% {
            transform: translateY(75vh) translateX(calc(var(--sway) * -0.5)) rotate(12deg) scale(1.02);
          }
          100% {
            transform: translateY(110vh) translateX(0) rotate(-5deg) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
