import { Lock } from 'lucide-react'

export function DocumentPreview() {
  return (
    <article className="relative overflow-hidden border border-border bg-card">
      {/* Masthead band */}
      <div className="relative bg-band px-[var(--g3)] py-[var(--g3)] text-band-foreground">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 right-[var(--g3)] select-none font-serif text-[8rem] italic leading-none text-band-foreground/[0.06] sm:text-[11rem]"
        >
          III
        </span>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-band-foreground/70">
          Mathematical Analysis · Notes · Unit III
        </p>
        <h3 className="mt-2 max-w-xl font-serif text-3xl font-light italic leading-tight text-pretty sm:text-4xl">
          Sequences, Series &amp; the Limits of Convergence
        </h3>
      </div>

      {/* Fading body */}
      <div className="relative px-[var(--g3)] pt-[var(--g3)] pb-[var(--g6)]">
        <div className="max-w-2xl [mask-image:linear-gradient(to_bottom,black_35%,transparent_100%)]">
          <p className="font-serif text-base leading-relaxed text-foreground">
            A sequence is said to converge when its terms approach a fixed value
            arbitrarily closely as the index grows without bound. This unit
            establishes the formal apparatus of limits, beginning with the
            epsilon–delta definition and proceeding toward the monotone
            convergence theorem. Each result is developed from first principles,
            with proofs presented in full.
          </p>
          <p className="mt-[var(--g2)] font-serif text-base leading-relaxed text-foreground">
            We then turn to infinite series, where the question of convergence
            acquires fresh subtlety. The comparison, ratio, and root tests are
            introduced in sequence, alongside a careful treatment of absolute and
            conditional convergence. The chapter closes with power series and
            their radii of convergence, anticipating the analytic functions that
            follow in later study.
          </p>
        </div>

        {/* Frosted authentication prompt */}
        <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/60 px-[var(--g3)] py-[var(--g3)] backdrop-blur-md supports-[backdrop-filter]:bg-background/45">
          <div className="mx-auto mb-[var(--g2)] h-1 w-10 rounded-full bg-muted-foreground/30" />
          <div className="flex flex-col items-center justify-between gap-[var(--g2)] sm:flex-row">
            <p className="font-serif text-xl font-light italic text-foreground text-balance">
              Authenticate to continue reading
            </p>
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-band px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-band-foreground transition-opacity duration-200 hover:opacity-85"
            >
              <Lock className="size-3.5" aria-hidden="true" />
              Authenticate
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
