type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description:
      "Get a taste of the depths. Perfect for solo players testing the waters.",
    features: [
      "Basic threat radar (50m range)",
      "Standard loot markers",
      "Single-character profile",
      "Community Discord access",
      "Manual patch updates",
      "Basic overlay themes",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description:
      "The complete toolkit for serious raiders. Everything you need to dominate every run.",
    features: [
      "Full threat radar (unlimited range)",
      "Rare loot & chest highlighting",
      "Squad sync for up to 4 players",
      "Route planner with trap markers",
      "Priority patch updates",
      "Custom ESP color profiles",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$59",
    period: "/month",
    description:
      "Maximum edge for competitive groups. Built for teams that never leave loot behind.",
    features: [
      "Everything in Pro",
      "Squad sync for up to 8 players",
      "Elite & boss threat analytics",
      "Private Discord support channel",
      "Early access to new features",
      "Dedicated account manager",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="glow-orb animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-accent/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Choose your{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              descent tier
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Flexible plans for every type of dungeon crawler. Upgrade or cancel
            anytime — no hidden fees.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) =>
            plan.highlighted ? (
              <PricingCardPro key={plan.name} plan={plan} />
            ) : (
              <PricingCard key={plan.name} plan={plan} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article className="card-hover glow-border group relative flex flex-col rounded-2xl p-6 sm:p-7">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {plan.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {plan.description}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-display text-4xl font-bold text-foreground">
            {plan.price}
          </span>
          <span className="text-sm text-muted">{plan.period}</span>
        </div>

        <ul className="mt-8 flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-white/[0.07]"
        >
          Buy Now
        </a>
      </div>
    </article>
  );
}

function PricingCardPro({ plan }: { plan: Plan }) {
  return (
    <article className="card-hover group relative flex flex-col lg:scale-105 lg:z-10">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent via-purple-500/50 to-accent-secondary/40 opacity-80 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="glow-border relative flex flex-col rounded-2xl bg-surface-elevated/90 p-7 shadow-[0_0_60px_rgba(168,85,247,0.25)] backdrop-blur-sm sm:p-8">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/5" />

        <div className="relative flex flex-1 flex-col">
          <div className="mb-4 inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent/20 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Most Popular
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-foreground">
            {plan.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {plan.description}
          </p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="font-display text-5xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              {plan.price}
            </span>
            <span className="text-sm text-muted">{plan.period}</span>
          </div>

          <ul className="mt-8 flex flex-1 flex-col gap-3.5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <CheckIcon highlighted />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="btn-glow mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-purple-600 px-6 py-3.5 text-sm font-semibold text-white"
          >
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
}

function CheckIcon({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-accent" : "text-emerald-400"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
