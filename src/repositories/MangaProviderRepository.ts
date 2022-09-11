import { Manga } from '../entities/manga'

export interface IMangaProviderRepository {
  queryMangaByTitle: (title: string) => Promise<Manga[]>
}
