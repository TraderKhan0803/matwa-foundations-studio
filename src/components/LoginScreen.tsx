import { useState, type FormEvent } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LoginScreen({ title }: { title: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend wired up yet
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav transparentOnTop={false} />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md">
          <h1 className="font-serif text-5xl md:text-6xl text-navy text-center mb-12">
            {title}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-navy mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b border-navy/40 bg-transparent py-2 text-navy focus:border-gold focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-navy mb-2">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-0 border-b border-navy/40 bg-transparent py-2 text-navy focus:border-gold focus:outline-none focus:ring-0"
              />
            </div>
            <a href="#" className="block text-sm text-navy underline underline-offset-4 hover:text-gold">
              Forgot password?
            </a>
            <button
              type="submit"
              className="w-full bg-navy text-white py-3.5 font-medium tracking-wide hover:bg-navy-deep transition-colors"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
