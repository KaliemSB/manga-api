import { Request, Response } from 'express'
import { GetMangaBySlugUseCase } from './getMangaBySlugUseCase'

export class GetMangaBySlugController {
  constructor (
    private readonly getMangaBySlugUseCase: GetMangaBySlugUseCase
  ) {};

  async handle (request: Request, response: Response): Promise<Response> {
    const { slug } = request.params

    try {
      const manga = await this.getMangaBySlugUseCase.execute({ slug })

      return response.status(201).send(manga)
    } catch (error: any) {
      return response.status(400).send({
        message: error.message || 'Unexpected error'
      })
    };
  };
}
