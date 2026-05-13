import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VideoHero } from "@/components/VideoHero";
import { SplitSection } from "@/components/SplitSection";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matwa Group — Venture Studio" },
      { name: "description", content: "Matwa Group is a venture studio. We work alongside founders — providing technology services first, then capital." },
      { property: "og:title", content: "Matwa Group — Venture Studio" },
      { property: "og:description", content: "We build with founders before we back them." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <VideoHero />
        <SplitSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
