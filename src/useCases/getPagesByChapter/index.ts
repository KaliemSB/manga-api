import { MangaHostRepository } from '../../repositories/implementations/mangaHostRepository'
import { GetPagesByChapterController } from './getPagesByChapterController'
import { GetPagesByChapterUseCase } from './getPagesByChapterUseCase'

const mangaProvider = new MangaHostRepository()

const getPagesByChapterUseCase = new GetPagesByChapterUseCase(mangaProvider)

const getPagesByChapterController = new GetPagesByChapterController(getPagesByChapterUseCase)

export { getPagesByChapterUseCase, getPagesByChapterController }
