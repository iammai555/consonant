export type Subject = {
  name: string
  tags: string[]
  units: number
  pastPapers: number | null
}

export const STATS: { value: string; label: string }[] = [
  { value: 'II', label: 'Semesters Live' },
  { value: 'XI', label: 'Subjects' },
  { value: '—', label: 'Documents' },
  { value: 'X', label: 'Semesters Total' },
]

/** Sidebar: Semester 1 through 10 (not year → I/II). */
export const NAV_SEMESTERS: {
  number: number
  label: string
  active?: boolean
}[] = [
  { number: 1, label: 'Semester 1', active: true },
  { number: 2, label: 'Semester 2' },
  { number: 3, label: 'Semester 3', active: true },
  { number: 4, label: 'Semester 4' },
  { number: 5, label: 'Semester 5' },
  { number: 6, label: 'Semester 6' },
  { number: 7, label: 'Semester 7' },
  { number: 8, label: 'Semester 8' },
  { number: 9, label: 'Semester 9' },
  { number: 10, label: 'Semester 10' },
]

/** Keep old export name so existing sidebar does not break if it still imports NAV_YEARS. */
export const NAV_YEARS = [
  {
    numeral: '—',
    label: 'Programme',
    semesters: NAV_SEMESTERS.map((s) => ({
      numeral: String(s.number),
      label: s.label,
      active: s.active,
    })),
  },
]

export const CONTENT_TYPES = ['Syllabus', 'Notes', 'Sessional', 'End Semester', 'Extras']

/** Semester 1 — 6 subjects */
export const SEMESTER_1_SUBJECTS: Subject[] = [
  {
    name: 'English Language Skills and Legal Language – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: 1,
  },
  {
    name: 'Political Science – I',
    tags: ['Notes', 'End Semester'],
    units: 5,
    pastPapers: 1,
  },
  {
    name: 'Economics – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: 2,
  },
  {
    name: 'History – I',
    tags: ['Notes', 'Sessional'],
    units: 5,
    pastPapers: 1,
  },
  {
    name: 'Law of Contract – I: General Principles',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: 1,
  },
  {
    name: 'Legal Methods',
    tags: ['Notes', 'End Semester'],
    units: 5,
    pastPapers: 1,
  },
]

/** Semester 3 — 5 subjects */
export const SEMESTER_3_SUBJECTS: Subject[] = [
  {
    name: 'Criminal Law – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: null,
  },
  {
    name: 'Family Law – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: null,
  },
  {
    name: 'Environmental Law',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: null,
  },
  {
    name: 'Constitutional Law – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: null,
  },
  {
    name: 'Sociology – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    pastPapers: null,
  },
]

/** Live table: Semester 1 then Semester 3 only. */
export const SUBJECTS: Subject[] = [
  ...SEMESTER_1_SUBJECTS,
  ...SEMESTER_3_SUBJECTS,
]
