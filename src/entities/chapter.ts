interface PagesProps {
  number: number
  page: string
}

interface ChapterProps {
  number: number | string
  slug: string
  pages?: PagesProps[]
}

export class Chapter {
  public number!: string | number
  public slug!: string
  public pages?: PagesProps[]

  constructor (props: ChapterProps) {
    Object.assign(this, props)
  }
}
