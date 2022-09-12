import { MangaHostRepository } from '../../repositories/implementations/mangaHostRepository'
import { QueryMangaByTitleController } from './queryMangaByTitleController'
import { QueryMangaByTitleUseCase } from './queryMangaByTitleUseCase'

const mangaProvider = new MangaHostRepository()

const queryMangaByTitleUseCase = new QueryMangaByTitleUseCase(mangaProvider)

const queryMangaByTitleController = new QueryMangaByTitleController(queryMangaByTitleUseCase)

export { queryMangaByTitleUseCase, queryMangaByTitleController }
