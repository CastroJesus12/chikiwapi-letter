import Confetti from "@/components/Confetti";
import Image from "next/image";
import MemoryGallery from "@/components/MemoryGallery";
import { Memory } from "@/components/MemoryCard";
import Link from "next/link";
import img from "../photos/Cat Love GIF by NGcorpvtc.gif";
import p1 from "@/photos/p1.jpg";
import p2 from "@/photos/p2.jpg";
import p3 from "@/photos/p3.jpg";
import p4 from "@/photos/p4.jpeg";
import p5 from "@/photos/p5.jpeg";
import p6 from "@/photos/p6.jpeg";
import p7 from "@/photos/p7.jpeg";
import p8 from "@/photos/p8.jpeg";
import p9 from "@/photos/p9.jpeg";
import p10 from "@/photos/p10.jpeg";
const memories: Memory[] = [
  {
    image: p1,
    caption:
      "Remember when we got lost hiking and found that amazing waterfall? Best wrong turn ever! 😂",
    rotationAngle: -2,
    emoji: "🌊",
  },
  {
    image: p2,
    caption:
      "That time we stayed up all night just talking and watching the sunrise. I've never laughed so hard in my life!",
    rotationAngle: 3,
    emoji: "🌅",
  },
  {
    image: p3,
    caption:
      "Our first road trip together! You fell asleep and I drew a tiny mustache on you with a marker. You didn't notice for HOURS!",
    rotationAngle: -1,
    emoji: "🚗",
  },
  {
    image: p4,
    caption:
      "Remember our cooking disaster when we tried to make that fancy recipe? The smoke alarm going off, but the pizza we ordered after was the best ever!",
    rotationAngle: 2,
    emoji: "🍕",
  },
  {
    image: p5,
    caption:
      "Our camping trip under the stars. You were terrified of that tiny spider and jumped so high! Still my favorite memory.",
    rotationAngle: -3,
    emoji: "🏕️",
  },
  {
    image: p6,
    caption:
      "That concert where we danced until our feet hurt. Worth every blister!",
    rotationAngle: 1,
    emoji: "🎵",
  },
  {
    image: p7,
    caption:
      "When we built that epic blanket fort during the storm and watched movies all day. Best rainy day ever!",
    rotationAngle: -2,
    emoji: "🏰",
  },
  {
    image: p8,
    caption:
      "Our spontaneous beach day when we skipped class. I still find sand in my backpack sometimes!",
    rotationAngle: 2,
    emoji: "🏖️",
  },
  {
    image: p9,
    caption:
      "You've always been there for me through thick and thin. I'm so grateful for your friendship. ❤️",
    rotationAngle: -1,
    emoji: "💕",
  },
  {
    image: p10,
    caption:
      "Happy Birthday to my best friend in the whole world! Here's to many more adventures together!",
    rotationAngle: 3,
    emoji: "🎂",
  },
];

export default function MemoryLanePage() {
  return (
    <>
      <div className="scrapbook-bg relative" />
      <Confetti />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          position: "relative",
          zIndex: 1,
          display: "flex", // Added: Flexbox
          flexDirection: "column", // Added: Stack items vertically
          alignItems: "center", // Added: Center items horizontally
        }}
      >
        <header
          className="page-header"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h1 className="page-title">Para El Amor De Mi Vida</h1>
        </header>

        {/* Centered GIF */}
        <div className="flex justify-center mb-8">
          <Image
            src={img}
            width={200}
            height={200}
            unoptimized
            alt="Cute cat love GIF"
            className="rounded-lg"
          />
        </div>

        {/* Gallery - now centered by the parent flexbox */}
        <div className="w-full">
          <MemoryGallery memories={memories} />
        </div>

        {/* Navigation - Centered Button */}
        <nav
          className="nav-entrance"
          style={{
            display: "flex",
            justifyContent: "center", // Changed: space-between -> center
            marginTop: "3rem",
            width: "100%",
          }}
        >
          <Link
            href="/cake"
            className="btn btn-next bg-[#800020] text-white px-8 py-3 rounded-full"
          >
            💕 Abrir 💕
          </Link>
        </nav>
      </main>
    </>
  );
}
