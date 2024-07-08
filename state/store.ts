import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from './article'

const store = configureStore({
  reducer: {
    articles: articlesReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
