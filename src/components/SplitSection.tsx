import { Reveal } from "./Reveal";

function PillarCard({
  label,
  title,
  body,
  index,
}: {
  label?: string;
  title: string;
  body: string;
  index?: number;
}) {
  return (
    <div className="group relative border border-gold/30 bg-white/70 backdrop-blur-sm p-6 transition-all duration-500 hover:border-gold hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(200,169,110,0.4)]">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gold scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />
      {label && (
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium mb-3">
          {label}
        </p>
      )}
      {typeof index === "number" && (
        <p className="font-serif text-xs text-gold/70 mb-2">
          0{index}
        </p>
      )}
      <h4 className="font-serif text-xl text-navy mb-2 leading-snug transition-colors group-hover:text-navy-deep">
        {title}
      </h4>
      <p className="text-sm text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

export function SplitSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-cream">
      {/* For Founders */}
      <div className="px-6 lg:px-14 py-20 lg:py-28 md:border-r border-navy/10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">
            For Founders
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Your first unfair advantage.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-10 max-w-lg">
            We don't lead with a term sheet. We lead with developers, designers, and operators
            embedded in your business. If we like what we see — and you like working with us —
            we invest.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
          {[
            { title: "Technology Services", body: "Development, design, digital marketing, UX, market entry." },
            { title: "Fractional Leadership", body: "Fractional CTO, CFO, CMO, and CPO embedded at your stage, not overhead you carry full-time." },
            { title: "Operational Embedding", body: "We work inside your business, not as advisors from the outside." },
            { title: "Investment", body: "Capital from a team that already knows your numbers." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={120 + i * 80}>
              <PillarCard title={p.title} body={p.body} index={i + 1} />
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
      <div className="px-6 lg:px-14 py-20 lg:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">
            For Club Members
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Not just deal flow. An inside view.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-10 max-w-lg">
            We only bring deals to club members after we've worked inside the business. By the
            time you see an opportunity, the operational risk has already been stress-tested —
            not by analysts, but by our own team on the ground.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
          {[
            {
              label: "For Venture Capital Firms",
              title: "Co-investment with an operational edge.",
              body: "We don't compete with VCs — we de-risk the early stage before you come in. Every company we surface has been through real operational scrutiny.",
            },
            {
              label: "For Angel Investors",
              title: "Back founders. Or build with them.",
              body: "Angels can come in as investors, advisors, or step into an active operating role — as a C-suite member or board seat. If you have capital, expertise, or both, there's a place for you.",
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={120 + i * 120}>
              <PillarCard label={c.label} title={c.title} body={c.body} />
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
