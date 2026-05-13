import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "We engaged MG for two of our underlying entities. Their work with us on market entry and their network within financial markets was of top quality.",
    name: "Nigel Blair",
    role: "Director, Janus (Private Equity)",
  },
  {
    quote:
      "As a startup we received invaluable support and guidance particularly during the early phase.",
    name: "Balraj Bassi",
    role: "CEO, Tradefeedr (Fintech)",
  },
  {
    quote:
      "Matwa Group has been a great partner, providing our clients with private investment opportunities.",
    name: "Rohit Bhuta",
    role: "CEO, CrossInvest (Multi-Family Office)",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[active];

  return (
    <section className="relative bg-navy text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* ambient gold glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--gold) / 0.5), transparent)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4 text-center">
            What People Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16">
            Testimonials
          </h2>
        </Reveal>

        <div
          className="relative min-h-[280px] sm:min-h-[240px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ease-out ${
                i === active
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
              aria-hidden={i !== active}
            >
              <span className="font-serif text-6xl sm:text-7xl text-gold leading-none mb-4">
                “
              </span>
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl font-serif italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 sm:mt-10">
                <div className="font-serif text-lg text-white">{t.name}</div>
                <div className="text-sm text-gold/90 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-gold" : "w-4 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* prev/next */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-white/70">
          <button
            onClick={() => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="hover:text-gold transition-colors"
            aria-label="Previous"
          >
            ← Prev
          </button>
          <span className="text-white/40">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setActive((i) => (i + 1) % testimonials.length)}
            className="hover:text-gold transition-colors"
            aria-label="Next"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
