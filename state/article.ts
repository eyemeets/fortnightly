import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticles as fetchArticlesFromApi } from '../services/news'
import { ArticlesState, Article } from '../types/state'

export const fetchArticles = createAsyncThunk<Article[], void>('articles/fetchArticles', async () => {
  const articles = await fetchArticlesFromApi()
  return articles
})

const initialState: ArticlesState = {
  list: [],
  currentArticle: null,
  status: 'idle',
  error: null
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentArticle: (state, action: PayloadAction<Article | null>) => {
      state.currentArticle = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch articles'
      })
  }
})

export const { setCurrentArticle } = articlesSlice.actions

export default articlesSlice.reducer
