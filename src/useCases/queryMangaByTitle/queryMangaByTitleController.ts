import { Request, Response } from 'express'
import { QueryMangaByTitleUseCase } from './queryMangaByTitleUseCase'

export class QueryMangaByTitleController {
  constructor (
    private readonly queryMangaByTitleUseCase: QueryMangaByTitleUseCase
  ) {};

  async handle (request: Request, response: Response): Promise<Response> {
    const { title } = request.params

    try {
      const mangas = await this.queryMangaByTitleUseCase.execute({ title })

      return response.status(201).send(mangas)
    } catch (error: any) {
      return response.status(400).send({
        message: error.message || 'Unexpected error'
      })
    };
  };
}
