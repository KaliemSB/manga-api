import { Manga } from '../../entities/manga'
import { IMangaProviderRepository } from '../MangaProviderRepository'
import { parse } from 'node-html-parser'
import axios, { AxiosInstance } from 'axios'
import { Chapter } from '../../entities/chapter'

export class MangaHostRepository implements IMangaProviderRepository {
  private static mangaHostClient (): AxiosInstance {
    return axios.create({
      baseURL: 'https://mangahost4.com/'
    })
  }

  async queryMangaByTitle (title: string): Promise<Manga[]> {
    try {
      let response = await MangaHostRepository.mangaHostClient().get(`find/${title}`).then(res => res.data)

      response = Array.from(parse(response).querySelectorAll('body > div.w-container > main > table > tbody > tr'), (elm: any) => {
        return new Manga({
          name: elm.querySelector('.entry-title').textContent.trim(),
          slug: elm.querySelector('.entry-title > a').attributes.href.match(/([^/]*$)/g)[0],
          cover: elm.querySelector('a > picture > source').attributes.srcset,
          description: elm.querySelector('.entry-content').textContent.trim()
        })
      })

      return response
    } catch (error) {
      console.log(error)
      throw new Error('Algo deu errado com a Manga Host.')
    }
  }

  async getMangaBySlug (slug: string): Promise<Manga> {
    try {
      const response: any = await MangaHostRepository.mangaHostClient().get(`/manga/${slug}`).then(res => parse(res.data))

      const name = response.querySelector('.title').textContent
      const cover = response.querySelector('.widget').querySelector('picture > source').attributes.srcset
      const description = response.querySelector('.paragraph').textContent.trim()
      const chapters = Array.from(response.querySelectorAll('.btn-caps.w-button'), (elm: any, index) => {
        return {
          number: elm.attributes.id.replace('_', '.'),
          slug: elm.attributes.id.replace('_', '.')
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
      console.log(error)
      throw new Error('Algo deu errado com a Manga Host.')
    }
  }

  async getPagesByChapter (slug: string, chapter: string): Promise<Chapter> {
    try {
      const response: any = await MangaHostRepository.mangaHostClient().get(`/manga/${slug}/${chapter}`).then(res => parse(res.data))

      return new Chapter({
        number: slug,
        slug,
        pages: Array.from(response.querySelector('.read-slideshow').childNodes.filter((elm: any) => elm.tagName === 'A'), (elm: any) => {
          return {
            number: elm.attributes['data-read-hash'],
            page: elm.childNodes[1]?.childNodes[1]?.attributes?.srcset || elm.childNodes[1].attributes.src
          }
        })
      })
    } catch (error) {
      throw new Error('Algo deu errado com a Manga Host.')
    }
  }
}
