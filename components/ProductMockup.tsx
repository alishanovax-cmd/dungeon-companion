export function ProductMockup() {
  return (
    <div className="animate-float relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="glow-border relative overflow-hidden rounded-2xl bg-surface-elevated/80 p-1 shadow-[0_0_60px_rgba(168,85,247,0.15)] backdrop-blur-sm">
        <div className="overflow-hidden rounded-[14px] bg-[#0a0a12]">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Dungeon Companion v2.4
            </span>
            <div className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>

          {/* Mock UI viewport */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-[#12101a] via-[#0d0d14] to-[#1a1208]">
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Minimap */}
            <div className="absolute right-4 top-4 w-24 rounded-lg border border-accent/30 bg-black/50 p-2 backdrop-blur-sm">
              <p className="mb-1.5 font-mono text-[8px] uppercase tracking-wider text-accent">
                Minimap
              </p>
              <div className="relative aspect-square rounded bg-[#1a1a24]">
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                <div className="absolute left-3 top-4 h-1 w-1 rounded-full bg-amber-400" />
                <div className="absolute right-3 bottom-5 h-1 w-1 rounded-full bg-red-400" />
                <div className="absolute left-5 bottom-3 h-1 w-1 rounded-full bg-accent" />
              </div>
            </div>

            {/* Enemy markers */}
            <div className="absolute left-8 top-12 rounded border border-red-500/40 bg-red-500/10 px-2 py-1">
              <span className="font-mono text-[9px] text-red-300">Hostile · 24m</span>
            </div>
            <div className="absolute left-16 bottom-20 rounded border border-red-500/30 bg-red-500/10 px-2 py-1">
              <span className="font-mono text-[9px] text-red-300/80">Elite · 41m</span>
            </div>

            {/* Loot marker */}
            <div className="absolute right-16 top-1/3 rounded border border-amber-400/50 bg-amber-400/10 px-2 py-1 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <span className="font-mono text-[9px] text-amber-200">Rare Chest · 12m</span>
            </div>

            {/* Party panel */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/[0.08] bg-black/60 p-3 backdrop-blur-md">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-muted">
                Squad Status
              </p>
              <div className="space-y-2">
                <SquadRow name="Vanguard" hp={92} color="bg-emerald-400" />
                <SquadRow name="Arcanist" hp={67} color="bg-accent" />
                <SquadRow name="Scout" hp={45} color="bg-amber-400" />
              </div>
            </div>

            {/* Crosshair accent */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-8 w-px bg-white/20" />
              <div className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 bg-white/20" />
            </div>
          </div>

          {/* Stats footer */}
          <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
            <span className="font-mono text-[10px] text-muted">FPS 144 · Latency 8ms</span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 font-mono text-[10px] text-accent">
              LIVE
            </span>
          </div>
        </div>
      </div>

      {/* Decorative glow behind card */}
      <div className="animate-pulse-glow glow-orb -inset-4 -z-10 bg-accent/20" />
      <div className="glow-orb -bottom-8 -right-8 -z-10 h-32 w-32 bg-accent-secondary/15" />
    </div>
  );
}

function SquadRow({
  name,
  hp,
  color,
}: {
  name: string;
  hp: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-14 truncate font-mono text-[10px] text-foreground/80">{name}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${hp}%` }} />
      </div>
      <span className="font-mono text-[10px] text-muted">{hp}%</span>
    </div>
  );
}
