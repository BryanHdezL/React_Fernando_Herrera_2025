import type { CSSProperties } from 'react'

const firstName = 'Bryan'
const lastName = 'Hernández'
const favoriteGame = ['Elden Ring', 'Smash', 'Metal Gear']
const isActive = true
const address = { zipCode: 'ABC123', country: 'Canadá' }

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
}

export const MyAwesomeApp = () => {
  return (
    <>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGame.join(', ')}</p>
      <p>{isActive ? 'Activo' : 'No Activo'}</p>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  )
}
