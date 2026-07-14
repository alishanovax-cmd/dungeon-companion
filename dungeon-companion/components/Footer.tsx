import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <Logo />
        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Dungeon Companion. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span id="pricing" className="text-sm text-muted/50">
            Pricing — coming soon
          </span>
          <span id="faq" className="text-sm text-muted/50">
            FAQ — coming soon
          </span>
        </div>
      </div>
    </footer>
  );
}
