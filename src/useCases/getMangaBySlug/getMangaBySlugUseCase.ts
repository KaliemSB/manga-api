import { Manga } from '../../entities/manga'
import { IMangaProviderRepository } from '../../repositories/MangaProviderRepository'
import { IGetMangaBySlugDTO } from './getMangaBySlugDTO'

export class GetMangaBySlugUseCase {
  constructor (
    private readonly mangaProviderRepository: IMangaProviderRepository
  ) {}

  async execute (data: IGetMangaBySlugDTO): Promise<Manga> {
    const manga = await this.mangaProviderRepository.getMangaBySlug(data.slug)

    if (!manga) {
      throw new Error('Manga not found.')
    }

    return manga
  }
}
