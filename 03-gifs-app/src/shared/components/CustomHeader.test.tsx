import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomHeader } from './CustomHeader'

describe('Customheader', () => {
  const title = 'Test title'
  const description = 'Test description'

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />)

    expect(screen.getByText(title)).toBeDefined()
  })

  test('should render the description whem provided', () => {
    render(<CustomHeader title={title} description={description} />)

    expect(screen.getByText(description)).toBeDefined() // Evalua si el texto existe
    expect(screen.getByRole('paragraph')).toBeDefined() // Evalua si el elemento HTML existe
    expect(screen.getByRole('paragraph').innerHTML).toBe(description) // Evalua si el texto existe en el elemento HTML
  })

  test('should not render description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />)

    const divElement = container.querySelector('.content-center')
    const h1 = divElement?.querySelector('h1')
    const p = divElement?.querySelector('p')

    expect(h1?.innerHTML).toBe(title)
    expect(p?.innerHTML).not.toBeDefined() // El elemento no esta definido
    expect(p).toBeNull() // El elemento no existe
  })
})
