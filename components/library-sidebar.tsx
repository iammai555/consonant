import { CONTENT_TYPES, NAV_YEARS } from '@/lib/library-data'

function SectionHeader({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-[var(--g2)]">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}

export function LibrarySidebar() {
  return (
    <aside className="flex flex-col gap-[var(--g4)]">
      <nav aria-label="Year navigation" className="flex flex-col gap-[var(--g2)]">
        <SectionHeader>Years</SectionHeader>
        <ul className="flex flex-col gap-[var(--g2)]">
          {NAV_YEARS.map((year) => (
            <li key={year.numeral}>
              <a
                href="#"
                className="flex items-baseline gap-2 font-serif text-base text-foreground transition-colors hover:text-[color:var(--rule)]"
              >
                <span className="w-6 font-serif text-sm italic text-muted-foreground">
                  {year.numeral}
                </span>
                <span className="underline-offset-4 hover:underline">
                  {year.label}
                </span>
              </a>
              <ul className="mt-1 ml-8 flex flex-col gap-0.5">
                {year.semesters.map((sem) => (
                  <li key={`${year.numeral}-${sem.numeral}`}>
                    <a
                      href="#"
                      className={`flex items-center gap-2 border-l py-0.5 pl-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors ${
                        sem.active
                          ? 'border-[color:var(--rule)] text-foreground'
                          : 'border-border text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {sem.label} {sem.numeral}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Content types" className="flex flex-col gap-[var(--g2)]">
        <SectionHeader>Material</SectionHeader>
        <ul className="flex flex-col gap-[var(--g2)]">
          {CONTENT_TYPES.map((type, i) => (
            <li key={type}>
              <a
                href="#"
                className={`flex items-center gap-2 border-l py-0.5 pl-3 font-serif text-base transition-colors ${
                  i === 0
                    ? 'border-[color:var(--rule)] text-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="underline-offset-4 hover:underline">
                  {type}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
