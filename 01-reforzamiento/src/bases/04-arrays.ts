const myArray: number[] = [1, 2, 3, 4, 5, 6]

console.log(myArray)

const myArray2 = [...myArray]

myArray.push(7)
myArray.push(11)

console.log({ myArray, myArray2 })
