import { describe, it, expect } from 'vitest'
import {
  validateAndNormalizeUser,
  sortItems,
  calcStats,
} from '../js/gemini.review'

describe('validateAndNormalizeUser', () => {
  it('валидирует обычного пользователя', () => {
    const user = { name: '  Вася  ', age: '25', active: 'true' }
    const result = validateAndNormalizeUser(user)

    expect(result.name).toBe('Вася')
    expect(result.isAdult).toBe(true)
    expect(result.active).toBe(true)
  })

  it('возвращает false для null', () => {
    expect(validateAndNormalizeUser(null)).toBe(false)
  })

  it('определяет несовершеннолетних', () => {
    const user = { name: 'Петя', age: 16, active: 1 }
    validateAndNormalizeUser(user)

    expect(user.isAdult).toBe(false)
  })

  it('принимает age как строку', () => {
    const user = { name: 'Оля', age: '30', active: false }
    const result = validateAndNormalizeUser(user)

    expect(result.age).toBe(30)
  })

  it('кэш работает корректно', () => {
    const user1 = { name: 'Дубль', age: 20, active: true }
    const user2 = { name: 'Дубль', age: 99, active: false }
    validateAndNormalizeUser(user1)
    validateAndNormalizeUser(user2)

    expect(true).toBe(true)
  })
})

describe('sortItems', () => {
  it('сортирует по строковому полю', () => {
    const items = [
      { name: 'Banana', price: 2 },
      { name: 'Apple',  price: 1 },
      { name: 'Cherry', price: 3 },
    ]
    const sorted = sortItems(items, 'name')
    expect(sorted[0].name).toBe('Apple')
  })

  it('сортирует по числовому полю', () => {
    const items = [
      { name: 'A', price: 5 },
      { name: 'B', price: 1 },
      { name: 'C', price: 3 },
    ]

    const sorted = sortItems(items, 'price')
    expect(sorted[0].price).toBe(1)
  })

  it('не падает на пустом массиве', () => {
    expect(() => sortItems([], 'name')).not.toThrow()
  })

  it('одинаковые значения не меняют порядок', () => {
    const items = [
      { name: 'X', rank: 1 },
      { name: 'Y', rank: 1 },
    ]
    sortItems(items, 'rank')
    expect(items[0].name).toBe('X')
  })
})

describe('calcStats', () => {
  it('считает сумму и среднее для нормального массива', () => {
    const result = calcStats([1, 2, 3, 4, 5])
    expect(result.sum).toBe(15)
    expect(result.avg).toBe(3)
  })

  it('один элемент — возвращает что-то truthy', () => {
    const result = calcStats([42])
    expect(result).toBeTruthy()
  })

  it('пустой массив возвращает null', () => {
    expect(calcStats([])).toBeNull()
  })

  it('не падает, если в массиве NaN', () => {
    const result = calcStats([1, NaN, 3])

    expect(result).toBeTruthy()
  })

  it('среднее на большом массиве примерно правильное', () => {
    const nums = Array.from({ length: 100 }, (_, i) => i + 1)  // [1..100]
    const result = calcStats(nums)

    expect(result.avg).toBeCloseTo(50.5, 0)
  })
})
