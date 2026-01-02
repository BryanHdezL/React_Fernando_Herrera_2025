import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
  const { handleSearch, handleTermClicked, previousTerms, gifs } = useGifs()

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
