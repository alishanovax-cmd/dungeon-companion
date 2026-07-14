const features = [
  {
    icon: <RadarIcon />,
    title: "Threat Radar",
    description:
      "Spot hostiles, elites, and ambush zones before they spot you. Distance tags and health bars keep every fight readable.",
    accent: "from-red-500/20 to-red-500/5",
    border: "group-hover:border-red-500/30",
  },
  {
    icon: <LootIcon />,
    title: "Loot Intel",
    description:
      "Highlight chests, rare drops, and extraction points on your route. Filter by rarity so you never miss high-value gear.",
    accent: "from-amber-500/20 to-amber-500/5",
    border: "group-hover:border-amber-500/30",
  },
  {
    icon: <PartyIcon />,
    title: "Squad Sync",
    description:
      "Share positions, loadouts, and callouts with your party in real time. Stay coordinated through every floor descent.",
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "group-hover:border-emerald-500/30",
  },
  {
    icon: <MapIcon />,
    title: "Route Planner",
    description:
      "Plan optimal paths before you drop in. Mark portals, traps, and ore nodes to maximize every run's efficiency.",
    accent: "from-accent/20 to-accent/5",
    border: "group-hover:border-accent/30",
  },
  {
    icon: <ShieldIcon />,
    title: "External Overlay",
    description:
      "Runs as a lightweight external overlay on Windows 10 & 11. Zero injection, minimal footprint, maximum clarity.",
    accent: "from-blue-500/20 to-blue-500/5",
    border: "group-hover:border-blue-500/30",
  },
  {
    icon: <UpdateIcon />,
    title: "Live Updates",
    description:
      "Automatic patch-aligned updates after every game wipe. English and multi-language menus with Discord support.",
    accent: "from-accent-secondary/20 to-accent-secondary/5",
    border: "group-hover:border-accent-secondary/30",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              dominate the depths
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Six powerful tools built for dungeon crawlers who play to win. Clean
            UI, deep customization, and zero clutter.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group card-hover glow-border relative overflow-hidden rounded-2xl p-6 ${feature.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-3 text-accent transition-colors group-hover:border-accent/30 group-hover:text-accent-secondary">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RadarIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6a6 6 0 100 12M12 12l4-4" />
    </svg>
  );
}

function LootIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function PartyIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function UpdateIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}
