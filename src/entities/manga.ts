interface MangaProps {
  name: string
  cover: string
  description?: string
  chapters?: number[]
}

export class Manga {
  public name!: string
  public cover!: string
  public description?: string
  public chapters?: number[]

  constructor (props: MangaProps) {
    Object.assign(this, props)
  }
}
