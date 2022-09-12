import { Chapter } from '../../entities/chapter'
import { IMangaProviderRepository } from '../../repositories/MangaProviderRepository'
import { IGetPagesByChapterDTO } from './getPagesByChapterDTO'

export class GetPagesByChapterUseCase {
  constructor (
    private readonly mangaProviderRepository: IMangaProviderRepository
  ) {}

  async execute (data: IGetPagesByChapterDTO): Promise<Chapter> {
    const manga = await this.mangaProviderRepository.getPagesByChapter(data.slug, data.chapter)

    if (!manga) {
      throw new Error('Chapter not found.')
    }

    return manga
  }
}
