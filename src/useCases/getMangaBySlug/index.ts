import { MangaHostRepository } from '../../repositories/implementations/mangaHostRepository'
import { GetMangaBySlugController } from './getMangaBySlugController'
import { GetMangaBySlugUseCase } from './getMangaBySlugUseCase'

const mangaProvider = new MangaHostRepository()

const getMangaBySlugUseCase = new GetMangaBySlugUseCase(mangaProvider)

const getMangaBySlugController = new GetMangaBySlugController(getMangaBySlugUseCase)

export { getMangaBySlugUseCase, getMangaBySlugController }
