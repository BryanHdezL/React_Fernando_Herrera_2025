import { describe, expect, test } from 'vitest'
import { giphyApi } from './giphy.api'
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

describe('giphyApi', () => {
  test('should be configured correctly', () => {
    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs')
    expect(giphyApi.defaults.params).toStrictEqual({
      lang: 'es',
      api_key: API_KEY,
    })
  })
})
