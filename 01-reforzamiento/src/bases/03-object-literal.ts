interface Address {
  postalCode: string
  city: string
}

interface Person {
  firstName: string
  lastName: string
  age: number
  address: Address
}

const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC123',
    city: 'New York',
  },
}

// const spiderman = { ...ironman } // Con el operador spread, se crea una copia a primer nivel del objeto
const spiderman = structuredClone(ironman) // structuredClone, rompe la referencia del objeto

spiderman.firstName = 'Peter'
spiderman.lastName = 'Parker'
spiderman.age = 22
spiderman.address.city = 'San José'

console.log(ironman, spiderman)
