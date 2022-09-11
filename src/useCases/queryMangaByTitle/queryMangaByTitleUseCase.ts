import { Manga } from '../../entities/manga'
import { IMangaProviderRepository } from '../../repositories/MangaProviderRepository'
import { IQueryMangaByTitleDTO } from './queryMangaByTitleDTO'

export class QueryMangaByTitleUseCase {
  constructor (
    private readonly mangaProviderRepository: IMangaProviderRepository
  ) {}

  async execute (data: IQueryMangaByTitleDTO): Promise<Manga[]> {
    const mangas = await this.mangaProviderRepository.queryMangaByTitle(data.title)

    if (!mangas) {
      throw new Error('Manga not found.')
    }

    return mangas
  }
}
