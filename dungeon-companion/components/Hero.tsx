import { ProductMockup } from "./ProductMockup";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div className="glow-orb animate-pulse-glow -left-32 top-20 h-96 w-96 bg-accent/25" />
      <div className="glow-orb -right-24 bottom-0 h-80 w-80 bg-accent-secondary/15" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-medium tracking-wide text-accent">
                Now supporting Season IV dungeons
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Your ultimate{" "}
              <span className="bg-gradient-to-r from-accent via-purple-300 to-accent-secondary bg-clip-text text-transparent">
                dungeon companion
              </span>{" "}
              for every raid
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              Real-time intel, squad coordination, and loot tracking — all in one
              sleek overlay. Descend with confidence and extract with more than you
              came for.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#pricing"
                className="btn-glow inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-purple-600 px-8 py-3.5 text-sm font-semibold text-white sm:w-auto"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-white/[0.07] sm:w-auto"
              >
                View Features
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <Stat label="Active users" value="12K+" />
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <Stat label="Uptime" value="99.9%" />
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <Stat label="Avg. rating" value="4.9★" />
            </div>
          </div>

          <ProductMockup />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center lg:text-left">
      <p className="font-display text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
