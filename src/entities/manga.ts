import { Chapter } from './chapter'

interface MangaProps {
  name: string
  cover: string
  slug: string
  description?: string
  chapters?: Chapter[]
}

export class Manga {
  public name!: string
  public cover!: string
  public slug!: string
  public description?: string
  public chapters?: Chapter[]

  constructor (props: MangaProps) {
    Object.assign(this, props)
  }
}
