import { Chapter } from '../entities/chapter'
import { Manga } from '../entities/manga'

export interface IMangaProviderRepository {
  queryMangaByTitle: (title: string) => Promise<Manga[]>
  getMangaBySlug: (slug: string) => Promise<Manga>
  getPagesByChapter: (slug: string, chapter: string) => Promise<Chapter>
}
