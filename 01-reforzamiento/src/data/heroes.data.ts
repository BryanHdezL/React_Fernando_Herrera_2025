export interface Hero {
  id: number
  name: string
  owner: Owner
}

// Los types son para cuando se tienen valores especificos a utilizar
// type Owner = 'DC' | 'Marvel'

// Los enum se usan para definir un conjunto de valores constantes que pueden reutilizarse y existen en tiempo de ejecución.
export enum Owner {
  DC = 'DC',
  Marvel = 'Marvel',
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 6,
    name: 'Green Lantern',
    // owner: 'DC',
    owner: Owner.DC,
  },
]
