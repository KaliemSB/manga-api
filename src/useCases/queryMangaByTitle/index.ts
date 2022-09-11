import { UnionMangasRepository } from '../../repositories/implementations/unionMangasRepository'
import { QueryMangaByTitleController } from './queryMangaByTitleController'
import { QueryMangaByTitleUseCase } from './queryMangaByTitleUseCase'

const mangaProvider = new UnionMangasRepository()

const queryMangaByTitleUseCase = new QueryMangaByTitleUseCase(mangaProvider)

const queryMangaByTitleController = new QueryMangaByTitleController(queryMangaByTitleUseCase)

export { queryMangaByTitleUseCase, queryMangaByTitleController }
