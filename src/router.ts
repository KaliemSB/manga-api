import { Router } from 'express'
import { queryMangaByTitleController } from './useCases/queryMangaByTitle'
const router = Router()

router.get('/query/:title', async (req, res) => {
  return await queryMangaByTitleController.handle(req, res)
})

export { router }
