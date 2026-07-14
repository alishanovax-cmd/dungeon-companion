export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary shadow-[0_0_20px_rgba(168,85,247,0.4)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 12l-4-2.5v5L12 17l4-2.5v-5L12 12z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      </div>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Dungeon{" "}
        <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
          Companion
        </span>
      </span>
    </div>
  );
}
