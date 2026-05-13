import { Reveal } from "./Reveal";

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-gold pl-5 py-1">
      <h4 className="font-serif text-lg text-navy mb-1">{title}</h4>
      <p className="text-sm text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

function SubCard({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="border border-gold/40 bg-white/60 p-6">
      <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium mb-3">{label}</p>
      <h4 className="font-serif text-xl text-navy mb-3 leading-snug">{title}</h4>
      <p className="text-sm text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

export function SplitSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* For Founders */}
      <div className="bg-cream px-6 lg:px-16 py-20 lg:py-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">For Founders</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Your first unfair advantage.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-10 max-w-lg">
            We don't lead with a term sheet. We lead with developers, designers, and operators
            embedded in your business. If we like what we see — and you like working with us —
            we invest.
          </p>
          <div className="space-y-6 max-w-lg">
            <Pillar title="Technology Services" body="Development, design, digital marketing, UX, market entry." />
            <Pillar title="Fractional Leadership" body="Fractional CTO, CFO, CMO, and CPO embedded at your stage, not overhead you carry full-time." />
            <Pillar title="Operational Embedding" body="We work inside your business, not as advisors from the outside." />
            <Pillar title="Investment" body="Capital from a team that already knows your numbers." />
          </div>
          <p className="mt-8 text-sm italic text-navy/60 max-w-lg">
            All services are fee-based. Investment is earned separately, not bundled.
          </p>
        </Reveal>
      </div>

      {/* For Club Members */}
      <div className="bg-white border-l border-border px-6 lg:px-16 py-20 lg:py-28">
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">For Club Members</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6">
            Not just deal flow. An inside view.
          </h2>
          <p className="text-navy/75 leading-relaxed mb-10 max-w-lg">
            We only bring deals to club members after we've worked inside the business. By the
            time you see an opportunity, the operational risk has already been stress-tested —
            not by analysts, but by our own team on the ground.
          </p>
          <div className="grid grid-cols-1 gap-5 max-w-lg">
            <SubCard
              label="For Venture Capital Firms"
              title="Co-investment with an operational edge."
              body="We don't compete with VCs — we de-risk the early stage before you come in. Every company we surface has been through real operational scrutiny. You get a cleaner entry point, a founder we already trust, and a team already embedded alongside them."
            />
            <SubCard
              label="For Angel Investors"
              title="Back founders. Or build with them."
              body="Club membership isn't just a cheque. Angels can come in as investors, advisors, or step into an active operating role — as a C-suite member or board seat. If you have capital, expertise, or both, there's a place for you inside a Matwa-backed company."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
