import { Manga } from '../../entities/manga'
import { IMangaProviderRepository } from '../MangaProviderRepository'
import { parse } from 'node-html-parser'
import axios, { AxiosInstance } from 'axios'

export class UnionMangasRepository implements IMangaProviderRepository {
  private static unionMangasClient (): AxiosInstance {
    return axios.create({
      baseURL: 'https://unionleitor.top/'
    })
  }

  async queryMangaByTitle (title: string): Promise<Manga[]> {
    try {
      let response: Manga[] = await UnionMangasRepository.unionMangasClient().get(`assets/busca.php?nomeManga=${title}`).then(res => res.data.items)

      response = Array.from(response, (elm: any) => {
        return new Manga({
          name: elm.titulo,
          cover: elm.imagem,
          slug: elm.url
        })
      })

      return response
    } catch (error) {
      throw new Error('Algo deu errado com a Union Mangas.')
    }
  }

  async getMangaBySlug (slug: string): Promise<Manga> {
    try {
      const response = await UnionMangasRepository.unionMangasClient().get(`/manga/${slug}`).then(res => parse(res.data))

      const name = response.querySelector('body > div.container > div:nth-child(5) > div.col-md-8.perfil-manga > div:nth-child(1) > div > h2')!.textContent
      const cover = response.querySelector('body > div.container > div:nth-child(5) > div.col-md-8.perfil-manga > div:nth-child(3) > div.col-md-4.col-xs-12.text-center.col-md-perfil > img')!.attributes.src
      const description = response.querySelector('body > div.container > div:nth-child(5) > div.col-md-8.perfil-manga > div:nth-child(3) > div:nth-child(9) > div > div')!.textContent
      const chapters = Array.from(response.querySelectorAll('.row.capitulos'), (elm: any) => {
        return {
          number: elm.childNodes[1].childNodes[3].attributes.href.match(/[\d][.]*(?!\/){1,}/g).join(''),
          slug: elm.childNodes[1].childNodes[3].attributes.href
        }
      })

      return new Manga({
        name,
        cover,
        slug,
        description,
        chapters
      })
    } catch (error) {
      throw new Error('Algo deu errado com a Union Mangas.')
    }
  }
}
