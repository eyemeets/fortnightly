interface Source {
  id: string
  name: string
}

export interface Article {
  source: Source
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string | null  // Ensure this matches across all definitions
}

export interface ArticlesState {
  list: Article[]
  currentArticle: Article | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

export type RootStackParamList = {
  Home: undefined
  'article/[id]': { id: string, title: string }
}


