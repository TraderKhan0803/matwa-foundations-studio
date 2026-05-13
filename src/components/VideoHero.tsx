import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-poster.jpg";

export function VideoHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-navy-deep">
      {isMobile ? (
        <img
          src={heroPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35" />
      {/* extra top gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 h-full flex flex-col justify-start pt-36 md:pt-40">
        <div className="max-w-3xl text-white">
          <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Venture Studio
          </p>
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            We build with founders<br />before we back them.
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Matwa Group is a venture studio. We work alongside founders who are already
            committed — providing technology services first, then capital. Skin in the game
            is the starting point, not the finish line.
          </p>
          <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap gap-4">
            <Link
              to="/founders"
              className="inline-flex items-center gap-2 bg-gold text-navy-deep px-7 py-3.5 font-medium tracking-wide hover:bg-gold/90 transition-colors"
            >
              I'm a Founder <span aria-hidden>→</span>
            </Link>
            <Link
              to="/club-members"
              className="inline-flex items-center gap-2 border border-white/80 text-white px-7 py-3.5 font-medium tracking-wide hover:bg-white hover:text-navy-deep transition-colors"
            >
              I'm an Investor <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
