import { SUBJECTS } from '@/lib/library-data'
import { toRoman } from '@/lib/roman'
import { SubjectTable } from '@/components/subject-table'
import { DocumentPreview } from '@/components/document-preview'

export function ContentArea() {
  return (
    <div className="flex flex-col gap-[var(--g4)]">
      {/* Section indicator */}
      <div>
        <div className="flex items-baseline justify-between gap-[var(--g3)]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            II · I
          </span>
          <h2 className="font-serif text-xl italic text-foreground sm:text-2xl">
            Second Year · First Semester
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {toRoman(SUBJECTS.length)} Entries
          </span>
        </div>
        <div className="mt-[var(--g2)] h-0.5 w-full bg-[color:var(--rule)]" />
      </div>

      <SubjectTable />
      <DocumentPreview />
    </div>
  )
}
