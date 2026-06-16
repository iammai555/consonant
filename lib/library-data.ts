export type Subject = {
  name: string
  tags: string[]
  units: number
  pastPapers: number | null
}

export const STATS: { value: string; label: string }[] = [
  { value: 'MMVIII', label: 'Established' },
  { value: 'VIII', label: 'Faculties' },
  { value: 'CXLIV', label: 'Subjects' },
  { value: 'MMMDCXII', label: 'Documents' },
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
      { numeral: 'I', label: 'Semester' },
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
]

export const CONTENT_TYPES = ['Syllabus', 'Notes', 'Past Papers', 'Extras']

export const SUBJECTS: Subject[] = [
  {
    name: 'Mathematical Analysis',
    tags: ['Notes', 'Papers', 'Extras'],
    units: 6,
    pastPapers: 12,
  },
  {
    name: 'Classical Mechanics',
    tags: ['Notes', 'Papers'],
    units: 5,
    pastPapers: 9,
  },
  {
    name: 'Discrete Structures',
    tags: ['Syllabus', 'Notes', 'Papers'],
    units: 7,
    pastPapers: 11,
  },
  {
    name: 'Political Philosophy',
    tags: ['Notes', 'Extras'],
    units: 4,
    pastPapers: null,
  },
  {
    name: 'Comparative Literature',
    tags: ['Syllabus', 'Notes'],
    units: 5,
    pastPapers: 6,
  },
  {
    name: 'Organic Chemistry',
    tags: ['Notes', 'Papers', 'Extras'],
    units: 8,
    pastPapers: 14,
  },
  {
    name: 'Constitutional Law',
    tags: ['Syllabus', 'Papers'],
    units: 6,
    pastPapers: 8,
  },
]
