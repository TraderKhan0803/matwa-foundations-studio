import { Reveal } from "./Reveal";

type Item = {
  number: string;
  title: string;
  body: string;
  tag?: string;
};

function NumberedRow({ item, index }: { item: Item; index: number }) {
  return (
    <div
      className="group relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7 py-7 border-b border-navy/10 last:border-b-0 transition-colors hover:bg-navy/[0.02]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="font-serif text-3xl sm:text-4xl text-gold/60 leading-none w-10 sm:w-12 transition-all duration-500 group-hover:text-gold group-hover:translate-x-1">
        {item.number}
      </div>
      <div>
        {item.tag && (
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold font-medium mb-2">
            {item.tag}
          </p>
        )}
        <h4 className="font-serif text-lg sm:text-xl text-navy mb-1.5 leading-snug">
          {item.title}
        </h4>
        <p className="text-sm text-navy/70 leading-relaxed max-w-md">
          {item.body}
        </p>
      </div>
      <div className="absolute left-0 bottom-0 h-[2px] bg-gold w-0 transition-all duration-500 group-hover:w-12" />
    </div>
  );
}

export function SplitSection() {
  const founders: Item[] = [
    { number: "01", title: "Technology Services", body: "Development, design, digital marketing, UX, market entry." },
    { number: "02", title: "Fractional Leadership", body: "Fractional CTO, CFO, CMO, and CPO embedded at your stage — not overhead you carry full-time." },
    { number: "03", title: "Operational Embedding", body: "We work inside your business, not as advisors from the outside." },
    { number: "04", title: "Investment", body: "Capital from a team that already knows your numbers." },
  ];

  const club: Item[] = [
    {
      number: "01",
      tag: "For Venture Capital Firms",
      title: "Co-investment with an operational edge.",
      body: "We don't compete with VCs — we de-risk the early stage before you come in. You get a cleaner entry point and a founder we already trust.",
    },
    {
      number: "02",
      tag: "For Angel Investors",
      title: "Back founders. Or build with them.",
      body: "Come in as an investor, advisor, or step into an active operating role — C-suite or board seat. Capital, expertise, or both.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-cream">
      {/* For Founders */}
      <div className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 md:border-r border-navy/10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">
            For Founders
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Your first unfair advantage.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-8 max-w-lg">
            We don't lead with a term sheet. We lead with developers, designers, and operators
            embedded in your business. If we like what we see — and you like working with us —
            we invest.
          </p>
        </Reveal>
        <div>
          {founders.map((item, i) => (
            <Reveal key={item.number} delay={100 + i * 80}>
              <NumberedRow item={item} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={500}>
          <p className="mt-8 text-sm italic text-navy/60 max-w-lg">
            All services are fee-based. Investment is earned separately, not bundled.
          </p>
        </Reveal>
      </div>

      {/* For Club Members */}
      <div className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 bg-white/40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">
            For Club Members
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Not just deal flow. An inside view.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-8 max-w-lg">
            We only bring deals to club members after we've worked inside the business. By the
            time you see an opportunity, the operational risk has already been stress-tested —
            not by analysts, but by our own team on the ground.
          </p>
        </Reveal>
        <div>
          {club.map((item, i) => (
            <Reveal key={item.number} delay={100 + i * 100}>
              <NumberedRow item={item} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={500}>
          <p className="mt-8 text-sm italic text-navy/60 max-w-lg">
            Membership is curated. Every introduction has already passed our operational bar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
