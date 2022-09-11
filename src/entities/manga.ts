interface MangaProps {
  name: string
  cover: string
  description?: string
  chapters?: number[]
}

export class Manga {
  public props: MangaProps

  constructor (props: MangaProps) {
    this.props = props
  }
}
