const characterNames = ['Goku', 'Vegeta', 'Trunks']
const [p1, , thrunks] = characterNames

console.log({ p1, thrunks })

const returnArrayFn = () => {
  return ['ABC', 123] as const // Se le dice a TypeScript el tipado del valor de retorno [string, number]
}

const [letters, numbers] = returnArrayFn()

console.log({ letters, numbers })

// Tarea (Definición de un hook): 'https://gist.github.com/Klerith/6db6ce73a652e3a5639673adc9be7895'

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue)
    },
  ] as const
}

const [name, setName] = useState('Goku')
console.log(name) // Goku
setName('Vegeta') // Imprime "Vegeta"
