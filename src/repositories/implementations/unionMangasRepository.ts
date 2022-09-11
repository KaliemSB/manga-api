import { Manga } from '../../entities/manga'
import { IMangaProviderRepository } from '../MangaProviderRepository'
import axios, { AxiosInstance } from 'axios'

export class UnionMangasRepository implements IMangaProviderRepository {
  private static unionMangasClient (): AxiosInstance {
    return axios.create({
      baseURL: 'https://unionleitor.top/'
    })
  }

  async queryMangaByTitle (title: string): Promise<Manga[]> {
    try {
      let response: Manga[] = await UnionMangasRepository.unionMangasClient().get(`https://unionleitor.top/assets/busca.php?nomeManga=${title}`).then(res => res.data.items)

      response = Array.from(response, (elm: any) => {
        return new Manga({
          name: elm.titulo,
          cover: elm.imagem
        })
      })

      return response
    } catch (error) {
      throw new Error('Algo deu errado com a Union Mangas.')
    }
  }
}
