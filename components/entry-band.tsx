import { Lock } from 'lucide-react'

export function EntryBand() {
  return (
    <section className="w-full border-y border-border bg-secondary/50">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-[var(--g3)] px-[var(--g3)] py-[var(--g3)]">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
          Restricted Reading Room
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-sm bg-band px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-band-foreground transition-opacity duration-200 hover:opacity-85"
        >
          <Lock className="size-3.5" aria-hidden="true" />
          Authenticate
        </button>
      </div>
    </section>
  )
}
