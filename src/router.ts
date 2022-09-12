import { Router } from 'express'
import { getMangaBySlugController } from './useCases/getMangaBySlug'
import { getPagesByChapterController } from './useCases/getPagesByChapter'
import { queryMangaByTitleController } from './useCases/queryMangaByTitle'
const router = Router()

router.get('/query/:title', async (req, res) => {
  return await queryMangaByTitleController.handle(req, res)
})

router.get('/manga/:slug', async (req, res) => {
  return await getMangaBySlugController.handle(req, res)
})

router.get('/manga/:slug/:chapter', async (req, res) => {
  return await getPagesByChapterController.handle(req, res)
})

export { router }
