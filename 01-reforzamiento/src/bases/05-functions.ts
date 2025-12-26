interface User {
  uid: string
  userName: string
}

// Estrcutura de una funcion base
function great(name: string): string {
  return `Hola ${name}`
}

// Estructura de una función de flecha
const great2 = (name: string): string => {
  return `Hola ${name}`
}

// Estructura de una función de flecha que solo retorna un valor
// const great2 = (name: string) => `Hola ${name}`

function getUser(): User {
  return {
    uid: 'ABC-123',
    userName: 'El_Papi23',
  }
}

const getUser2 = (): User => {
  return {
    uid: 'ABC-123',
    userName: 'El_Papi23',
  }
}

// Estructura de una función de flecha que solo retorna un objeto implicito
// const getUser2 = () => ({
//   uid: 'ABC-123',
//   userName: 'El_Papi23',
// })

console.log(great('Goku'))
console.log(great2('Vegeta'))

const user = getUser()
const user2 = getUser2()

console.log(user, user2)
