import { useCounter } from '../hooks/useCounter'
import { usePokemon } from '../hooks/usePokemon'

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter()
  const { pokemon, isLoading, formattedId } = usePokemon({ id: counter })

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{formattedId} {pokemon?.name}
      </h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`} alt={pokemon?.name} className="h-64 w-64" />

      <div className="flex gap-2">
        <button
          disabled={isLoading || counter === 1}
          onClick={decrement}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer ${isLoading || counter === 1 ? 'opacity-50' : ''}`}
        >
          Anterior
        </button>

        <button
          disabled={isLoading}
          onClick={increment}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer ${isLoading ? 'opacity-50' : ''}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
