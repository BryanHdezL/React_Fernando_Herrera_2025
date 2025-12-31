import { describe, expect, test } from 'vitest'
import { add, subtrack, multiply, divide } from './math.helpers'

describe('add', () => {
  test('should add two numbers', () => {
    expect(add(1, 3)).toBe(4)
    expect(add(3, 6)).toBe(9)
    expect(add(5, 9)).toBe(14)
    expect(add(7, 12)).toBe(19)
    expect(add(9, 15)).toBe(24)
  })
})

describe('subtrack', () => {
  test('should subtrack two numbers', () => {
    expect(subtrack(3, 1)).toBe(2)
    expect(subtrack(6, 3)).toBe(3)
    expect(subtrack(9, 5)).toBe(4)
    expect(subtrack(12, 7)).toBe(5)
    expect(subtrack(15, 9)).toBe(6)
  })
})

describe('multiply', () => {
  test('should multiply two numbers', () => {
    expect(multiply(1, 3)).toBe(3)
    expect(multiply(3, 6)).toBe(18)
    expect(multiply(5, 9)).toBe(45)
    expect(multiply(7, 12)).toBe(84)
    expect(multiply(9, 15)).toBe(135)
  })
})

describe('divide', () => {
  test('should divide two numbers', () => {
    expect(divide(3, 1)).toBe(3)
    expect(divide(6, 3)).toBe(2)
    expect(divide(15, 3)).toBe(5)
  })
})
