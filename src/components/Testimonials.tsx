import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote: "We engaged MG for two of our underlying entities. Their work with us on market entry and their network within financial markets was of top quality.",
    name: "Nigel Blair",
    role: "Director, Janus (Private Equity)",
  },
  {
    quote: "As a startup we received invaluable support and guidance particularly during the early phase.",
    name: "Balraj Bassi",
    role: "CEO, Tradefeedr (Fintech)",
  },
  {
    quote: "Matwa Group has been a great partner, providing our clients with private investment opportunities.",
    name: "Rohit Bhuta",
    role: "CEO, CrossInvest (Multi-Family Office)",
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy text-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4 text-center">What People Say</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Testimonials</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="h-full border border-gold/60 p-8 flex flex-col bg-navy-deep/40">
                <span className="font-serif text-5xl text-gold leading-none mb-3">“</span>
                <blockquote className="text-white/85 leading-relaxed flex-1 text-[0.95rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-serif text-lg text-white">{t.name}</div>
                  <div className="text-sm text-gold/90">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
