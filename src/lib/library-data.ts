export type Subject = {
  code: string
  name: string
  tags: string[]
  units: number
  unitTitles: string[]
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

export const SEMESTER_1_SUBJECTS: Subject[] = [
  {
    code: 'BALLB-101',
    name: 'English Language Skills and Legal Language – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [],
    pastPapers: 1,
  },
  {
    code: 'BALLB-102',
    name: 'Political Science – I',
    tags: ['Notes', 'End Semester'],
    units: 5,
    unitTitles: [],
    pastPapers: 1,
  },
  {
    code: 'BALLB-103',
    name: 'Economics – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [],
    pastPapers: 2,
  },
  {
    code: 'BALLB-104',
    name: 'History – I',
    tags: ['Notes', 'Sessional'],
    units: 5,
    unitTitles: [],
    pastPapers: 1,
  },
  {
    code: 'BALLB-105',
    name: 'Law of Contract – I: General Principles',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [],
    pastPapers: 1,
  },
  {
    code: 'BALLB-106',
    name: 'Legal Methods',
    tags: ['Notes', 'End Semester'],
    units: 5,
    unitTitles: [],
    pastPapers: 1,
  },
]

export const SEMESTER_3_SUBJECTS: Subject[] = [
  {
    code: 'BALLB-301',
    name: 'Criminal Law – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [
      'Introduction',
      'Concept of Punishment and Inchoate Crimes',
      'Common and Group Liability',
      'General Exceptions – I',
      'General Exceptions – II',
    ],
    pastPapers: null,
  },
  {
    code: 'BALLB-302',
    name: 'Family Law – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [
      'Foundation of Muslim Law',
      'Muslim Marriage (Nikah)',
      'Divorce, Maintenance and Guardianship',
      'Succession and Inheritance',
      'Property under Muslim Law',
    ],
    pastPapers: null,
  },
  {
    code: 'BALLB-303',
    name: 'Environmental Law',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [
      'Introduction and Theoretical Framework',
      'International Environmental Law',
      'Environmental Protection Laws and Policies in India',
      'Judicial Activism and Institutional Mechanisms in Environmental Protection',
      'Contemporary Issues and Critical Perspectives',
    ],
    pastPapers: null,
  },
  {
    code: 'BALLB-304',
    name: 'Constitutional Law – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [
      'Ideas of Constitutionalism, Fundamental Rights and Constitutional Antecedents',
      'Citizenship, State Action Doctrine and Remedies',
      'The Equality Code (Articles 14 to 18)',
      'Freedom and Liberty (Articles 19 to 22)',
      'Religious Freedoms, Minority Rights and Directive Principles of State Policy',
    ],
    pastPapers: null,
  },
  {
    code: 'BALLB-305',
    name: 'Sociology – I',
    tags: ['Notes', 'Sessional', 'End Semester'],
    units: 5,
    unitTitles: [
      'Sociology: An Introduction',
      'Theoretical Perspective of Sociology',
      'Sociological Concepts',
      'Social Institutions and Social Control',
      'Social Stratification and Social Inequality',
    ],
    pastPapers: null,
  },
]

export const SUBJECTS: Subject[] = SEMESTER_3_SUBJECTS

export const SITE_NAME = 'Athenaeum'

export default SUBJECTS
