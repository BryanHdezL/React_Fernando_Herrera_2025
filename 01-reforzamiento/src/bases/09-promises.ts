const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100)
    reject('Mi amigo se perdio')
  }, 2000) // 2 seg
})

myPromise
  .then(myMoney => console.log(`Tengo mi dinero ${myMoney}`))
  .catch(reason => console.log(reason))
  .finally(() => console.log('Pues... a seguir con mi vida'))
