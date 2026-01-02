import { useState } from 'react'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions'
import { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const handleTermClicked = (term: string) => console.log({ term })

  // Tarea: https://gist.github.com/Klerith/68c0df33c9010ae6f5dcd9a7f641f78d

  const handleSearch = async (query: string = '') => {
    if (query.trim().length === 0) return

    query = query.toLowerCase()

    if (!previousTerms.includes(query)) {
      setPreviousTerms([query, ...previousTerms].slice(0, 8))

      const apiResponse = await getGifsByQuery(query)
      setGifs(apiResponse)
    }
  }

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />
      {/* Search */}
      <SearchBar
        placeholder="Busca lo que quieras"
        textButton="Buscar"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Tarea: Crear componente GifList: Props => gifs:Gif[] */}
      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  )
}
