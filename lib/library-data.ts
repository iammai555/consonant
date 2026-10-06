export type Subject = {
  name: string
  tags: string[]
  units: number
  pastPapers: number | null
}

export const STATS: { value: string; label: string }[] = [
  { value: 'II', label: 'Years Covered' },
  { value: 'II', label: 'Odd Semesters' },
  { value: 'XI', label: 'Subjects' },
  { value: '—', label: 'Documents' },
]

export const NAV_YEARS: {
  numeral: string
  label: string
  semesters: { numeral: string; label: string; active?: boolean }[]
}[] = [
  {
    numeral: 'I',
    label: 'First Year',
    semesters: [
      { numeral: 'I', label: 'Semester', active: true },
      { numeral: 'II', label: 'Semester' },
    ],
  },
  {
    numeral: 'II',
    label: 'Second Year',
    semesters: [
      { numeral: 'I', label: 'Semester', active: true },
      { numeral: 'II', label: 'Semester' },
    ],
  },
  {
    numeral: 'III',
    label: 'Third Year',
    semesters: [
      { numeral: 'I', label: 'Semester' },
      { numeral: 'II', label: 'Semester' },
    ],
  },
  {
    numeral: 'IV',
    label: 'Fourth Year',
    semesters: [
      { numeral: 'I', label: 'Semester' },
      { numeral: 'II', label: 'Semester' },
    ],
  },
  {
    numeral: 'V',
    label: 'Fifth Year',
    semesters: [
      { numeral: 'I', label: 'Semester' },
      { numeral: 'II', label: 'Semester' },
    ],
  },
]

export const CONTENT_TYPES = ['Syllabus', 'Notes', 'Sessional', 'End Semester', 'Extras']

export const SUBJECTS: Subject[] = [
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
