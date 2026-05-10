import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
//import img from "/public/photos/Cat Blushing GIF.gif";
export default function BurgundyLoveLetter() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col items-center">
        <div>
          <Head>
            <title>A Letter</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Great+Vibes&family=Jost:wght@300;400&display=swap"
              rel="stylesheet"
            />
          </Head>
          <main style={styles.page}>
            <article style={styles.card}>
              <div style={styles.innerBorder} />

              <p style={styles.salutation}>Te amo Marlen...</p>
              <div className="flex justify-center mb-8">
                <Image
                  src="/public/photos/Cat Blushing GIF.gif"
                  width={150}
                  height={150}
                  unoptimized
                  alt="Cute cat love GIF"
                  className="rounded-lg"
                />
              </div>
              <p style={styles.body}>
                Hi my love, I just wanted to remind you how deeply I love you
                and how often you’re on my mind. No matter what I’m doing,
                somehow my thoughts always find their way back to you. I think
                about you during the hard moments in my life, but also during
                the happiest ones, because you’ve become such an important part
                of everything I feel and experience.
              </p>

              <p style={styles.body}>
                I love everything about you, even the parts of yourself you may
                not. I love your stubbornness, your voice, and the way you
                speak. I love your laugh and your smile, the way you can be
                mischievous and playful while still being so kind and caring. I
                love your empathy, your creativity, your ambition, and the
                passion you put into the things you care about. I love your
                strength, but also the moments when you allow yourself to be
                vulnerable. I love your spontaneity, and most of all, I love
                that the more I get to know you, the more reasons I find to fall
                deeper in love with you.
              </p>

              <p style={styles.body}>
                I still remember the first time I met you and the connection I
                felt from the very beginning. Since you came into my life,
                things feel brighter. You’re the reason I laugh more, smile
                more, and go to sleep happy. You brought back motivation and joy
                into my life. Even my problems don’t seem as heavy anymore with
                you beside me.
              </p>

              <p style={styles.body}>
                I love spending time with you and being there for you in every
                way I can. I truly couldn’t have asked for a better person to
                walk into my life. I want to be there for all your achievements,
                cheering you on and reminding you how proud I am of you. But
                more than anything, I want you to feel proud of yourself,
                because you deserve that feeling more than anyone. I know all
                your hard work and dedication will pay off someday, and I’ll be
                there admiring you every step of the way.
              </p>

              <div style={styles.divider}>
                <div style={styles.dividerLine} />
                <span style={styles.dividerIcon}>❧</span>
                <div style={styles.dividerLine} />
              </div>

              <p style={styles.body}>
                I know I don’t say it enough, but I want you to always remember
                that I love you, I cherish you, I care about you deeply, and I
                will always support you. I admire the way you carry yourself,
                the person you are, and the person you’re becoming. I dream big
                for you because I truly believe in you. Thank you for being in
                my life. I couldn’t be more grateful for someone as beautiful
                and special as you.
              </p>

              <p style={styles.body}>
                Thank you for being in my life. I couldn’t be more grateful for
                someone as beautiful and special as you. Eres la mujer mas
                hermosa que he conocido💕💕💕💕💕.
              </p>

              <div style={styles.closing}>
                <p style={styles.closingLine}>Para Ti</p>
                <p style={styles.signature}>Por Siempre</p>
              </div>
            </article>
          </main>

          <style>{`
        @keyframes rise {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        article { animation: rise 1.1s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
        </div>
        <div className="w-28">
          <Link href="/album" className="btn btn-next mb-10">
            Album
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#800020s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
  },
  card: {
    background: "#f8e1e7",
    maxWidth: 540,
    width: "100%",
    border: "2px solid #6b1a28",
    padding: "72px 68px 68px",
    position: "relative",
    boxShadow:
      "0 0 0 6px #1a0608, 0 0 0 8px #6b1a28, 0 24px 60px rgba(0,0,0,0.6)",
  },
  innerBorder: {
    position: "absolute",
    inset: 12,
    border: "0.5px solid #c4848e",
    pointerEvents: "none",
  },
  rose: {
    position: "absolute",
    width: 90,
    height: 90,
  },
  dateline: {
    fontFamily: "'Jost', sans-serif",
    fontSize: 11,
    fontWeight: 300,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#8b3a4a",
    textAlign: "center",
    marginBottom: "2.4rem",
    position: "relative",
    zIndex: 1,
  },
  salutation: {
    fontFamily: "'Great Vibes', cursive",
    fontSize: 52,
    color: "#5a0e1c",
    marginBottom: "1.8rem",
    lineHeight: 1.05,
    position: "relative",
    zIndex: 1,
  },
  body: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 17,
    lineHeight: 2,
    fontWeight: 300,
    color: "#1e0a0e",
    marginBottom: "1.5rem",
    position: "relative",
    zIndex: 1,
  },
  em: { fontStyle: "italic", color: "#6b1a28" },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "1.8rem 0",
    position: "relative",
    zIndex: 1,
  },
  dividerLine: { flex: 1, height: 0.5, background: "#c4848e" },
  dividerIcon: { fontSize: 16, color: "#6b1a28", flexShrink: 0 },
  closing: {
    textAlign: "right",
    marginTop: "2.6rem",
    position: "relative",
    zIndex: 1,
  },
  closingLine: {
    fontFamily: "'Jost', sans-serif",
    fontSize: 11,
    fontWeight: 300,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#8b3a4a",
    marginBottom: 6,
  },
  signature: {
    fontFamily: "'Great Vibes', cursive",
    fontSize: 54,
    color: "#5a0e1c",
    lineHeight: 1.1,
  },
};
