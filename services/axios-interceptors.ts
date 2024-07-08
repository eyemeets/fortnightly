import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

/**
 * Attach interceptors to the given Axios instance
 * @param api Axios instance to attach interceptors to
 */
export function newsInterceptor(api: AxiosInstance): void {
  api.interceptors.request.use(requestInterceptor)
  api.interceptors.response.use(responseInterceptor)
}

/**
 * Intercept requests to add authorization header
 * @param config Axios request configuration
 * @returns Modified Axios request configuration
 */
function requestInterceptor(config: InternalAxiosRequestConfig) {
  const headers = config.headers
  headers['Authorization'] = `Bearer ${process.env.EXPO_PUBLIC_NEWS_API_KEY}`

  return config
}

/**
 * Intercept responses to handle them globally
 * @param response Axios response
 * @returns Axios response
 */
function responseInterceptor(response: AxiosResponse): AxiosResponse {
  // Placeholder to handle response
  return response
}
