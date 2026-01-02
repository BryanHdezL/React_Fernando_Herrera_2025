import { useRef, useState } from 'react'
import { Gif } from '../interfaces/gif.interface'
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions'

//   Manejo de chache
// const gifCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])
  const gifCache = useRef<Record<string, Gif[]>>({})

  const handleTermClicked = async (term: string) => {
    if (gifCache.current[term]) {
      setGifs(gifCache.current[term])
      return
    }

    const gifs = await getGifsByQuery(term)

    setGifs(gifs)
  }

  // Tarea: https://gist.github.com/Klerith/68c0df33c9010ae6f5dcd9a7f641f78d

  const handleSearch = async (query: string = '') => {
    if (query.trim().length === 0) return

    query = query.toLowerCase()

    if (!previousTerms.includes(query)) {
      setPreviousTerms([query, ...previousTerms].slice(0, 8))

      const apiResponse = await getGifsByQuery(query)
      setGifs(apiResponse)

      gifCache.current[query] = apiResponse
      console.log(gifCache)
    }
  }

  return {
    // Properties / Values
    previousTerms,
    gifs,

    // Methots / Actions
    handleTermClicked,
    handleSearch,
  }
}
