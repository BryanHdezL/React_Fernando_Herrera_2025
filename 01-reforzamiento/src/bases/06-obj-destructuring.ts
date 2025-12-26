const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman',
}

// const name = person.name
// const age = person.age
// const key = person.key
const { name, age, key } = person

console.log({ name, age, key })

interface Hero {
  name: string
  age: number
  key: string
  rank?: string
}

const useContext = ({ key, name, age, rank = 'Sin rango' }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  }
}

const {
  rank,
  keyName,
  user: { name: newName },
} = useContext(person)

console.log({ rank, keyName, newName })
