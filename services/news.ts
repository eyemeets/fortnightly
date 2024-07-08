import { Article } from '../types/state'
import { api } from './axios'
import { newsMockupData } from '@/data/news'
import { generateRandomId } from '@/utils'

export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await api.news.get('top-headlines?country=us')

    return response.data.articles
      .filter((i: Article) => i.urlToImage)
      .map((article: Article) => ({
        ...article,
        source: {
          ...article.source,
          id: generateRandomId()
        }
      }))
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return newsMockupData
  }
}
