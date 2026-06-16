import { SUBJECTS } from '@/lib/library-data'
import { toRoman } from '@/lib/roman'

export function SubjectTable() {
  return (
    <div className="overflow-hidden border border-border">
      {/* Header row */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[var(--g3)] bg-band px-[var(--g3)] py-[var(--g2)] font-mono text-[0.62rem] uppercase tracking-[0.2em] text-band-foreground sm:grid-cols-[2.5rem_1fr_auto_auto]">
        <span className="hidden sm:block">№</span>
        <span>Subject</span>
        <span className="hidden text-right sm:block">Units</span>
        <span className="text-right">Past Papers</span>
      </div>

      {/* Rows */}
      <ul>
        {SUBJECTS.map((subject, i) => (
          <li
            key={subject.name}
            className="grid grid-cols-[1fr_auto] items-center gap-x-[var(--g3)] gap-y-1 border-t border-border px-[var(--g3)] py-[var(--g2)] transition-colors hover:bg-secondary/60 sm:grid-cols-[2.5rem_1fr_auto_auto]"
          >
            <span className="hidden font-serif text-base italic text-muted-foreground sm:block">
              {toRoman(i + 1)}
            </span>

            <div className="flex flex-col gap-1.5">
              <a
                href="#"
                className="font-serif text-lg font-medium text-foreground underline-offset-4 hover:underline"
              >
                {subject.name}
              </a>
              <div className="flex flex-wrap gap-1.5">
                {subject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden text-right font-serif text-base italic text-muted-foreground sm:block">
              {toRoman(subject.units)}
            </span>
            <span className="text-right font-serif text-base italic text-muted-foreground">
              {subject.pastPapers ? toRoman(subject.pastPapers) : '—'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
