import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Matwa Group" },
      { name: "description", content: "Get in touch with Matwa Group." },
      { property: "og:title", content: "Contact — Matwa Group" },
      { property: "og:description", content: "Get in touch with Matwa Group." },
    ],
  }),
  component: ContactPage,
});

// TODO: replace with the Formspree form ID once provided
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Field({
  label, name, type = "text", required = false,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-navy mb-2">
        {label}{required && <span className="text-gold"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-border bg-white px-4 py-3 text-navy focus:outline-none focus:border-gold transition-colors"
      />
    </label>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav transparentOnTop={false} />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-5">Contact</p>
            <h1 className="font-serif text-5xl md:text-6xl text-navy leading-tight mb-4">
              Let's talk.
            </h1>
            <p className="text-navy/70 mb-12 max-w-xl">
              Tell us a little about you and what you're working on. We read everything that comes in.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              encType="multipart/form-data"
              className="bg-white p-8 lg:p-10 space-y-6 border border-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="First Name" name="first_name" required />
                <Field label="Last Name" name="last_name" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Organisation" name="organisation" />
              </div>

              <label className="block">
                <span className="block text-sm font-medium text-navy mb-2">Type of Inquiry <span className="text-gold">*</span></span>
                <select
                  name="inquiry_type"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-white px-4 py-3 text-navy focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" disabled>Select one…</option>
                  <option>Join Investment Club</option>
                  <option>Technology Services</option>
                  <option>Seeking Funding</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="block">
                <span className="block text-sm font-medium text-navy mb-2">Message <span className="text-gold">*</span></span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full border border-border bg-white px-4 py-3 text-navy focus:outline-none focus:border-gold transition-colors resize-y"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-medium text-navy mb-2">Information Deck (optional)</span>
                <input
                  type="file"
                  name="deck"
                  className="w-full text-sm text-navy/70 file:mr-4 file:py-2.5 file:px-5 file:border-0 file:bg-navy file:text-white file:font-medium hover:file:bg-navy/90 file:cursor-pointer"
                />
              </label>

              <button
                type="submit"
                className="w-full md:w-auto bg-gold text-navy-deep px-10 py-3.5 font-medium tracking-wide hover:bg-gold/90 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
