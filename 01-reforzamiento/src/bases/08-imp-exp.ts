import { heroes, type Hero, Owner } from '../data/heroes.data'

export const getHeroById = (id: number): Hero => {
  const hero = heroes.find(hero => hero.id === id)

  if (!hero) throw new Error(`No existe un héroe con el id ${id}`)

  return hero
}

// console.log(getHeroById(4))
// console.log(getHeroById(7))

// Tarea

/**
 *  getHeroesByOwner => Hero[]
 * Filtra héroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC o Marvel), user la enumaeración Owner
 * @returns Array de héroes pertenecientes al propietario especificado
 *
 */

// console.log(getHeroesByOwner('Marvel'))

export const getHeroesByOwner = (owner: Owner): Hero => {
  const hero = heroes.find(hero => hero.owner === owner)

  if (!hero) throw new Error(`No existen héroes con el owner ${owner}`)

  return hero
}
