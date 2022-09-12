import { Request, Response } from 'express'
import { GetPagesByChapterUseCase } from './getPagesByChapterUseCase'

export class GetPagesByChapterController {
  constructor (
    private readonly getPagesByChapterUseCase: GetPagesByChapterUseCase
  ) {};

  async handle (request: Request, response: Response): Promise<Response> {
    const { slug, chapter } = request.params

    try {
      const chapterRes = await this.getPagesByChapterUseCase.execute({ slug, chapter })

      return response.status(201).send(chapterRes)
    } catch (error: any) {
      return response.status(400).send({
        message: error.message || 'Unexpected error'
      })
    };
  };
}
