import axios from 'axios'
import { newsInterceptor } from './axios-interceptors'

export const api = {
  news: axios.create({
    baseURL: process.env.EXPO_PUBLIC_NEWS_API_ENDPOINT
  })
}

// Apply the interceptor
newsInterceptor(api.news)
