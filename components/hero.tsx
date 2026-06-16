import { STATS } from '@/lib/library-data'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-screen-xl px-[var(--g3)] pt-[var(--g5)] pb-[var(--g4)]">
      <h1 className="animate-hero-in font-serif text-[clamp(4rem,19vw,22rem)] font-light italic leading-[0.82] tracking-tight text-foreground text-pretty">
        Athenaeum
      </h1>

      <div className="mt-[var(--g4)] h-px w-full bg-border" />

      <dl className="mt-[var(--g3)] grid grid-cols-2 gap-[var(--g3)] sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="animate-fade-up"
            style={{ animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <dt className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
