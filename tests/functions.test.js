import { describe, it, expect } from 'vitest';
import { checkLength, isPalindrome, getNumbers } from '../js/functions.js';

describe('checkLength', () => {
  it('должна возвращать true для коротких строк', () => {
    expect(checkLength('a', 1)).toBe(true);
    expect(checkLength('ab', 2)).toBe(true);
    expect(checkLength('', 0)).toBe(true);
  });

  it('должна возвращать false для длинных строк', () => {
    expect(checkLength('abc', 2)).toBe(false);
  });
});

describe('isPalindrome', () => {
  it('должна находить палиндромы (игнорируя пробелы и регистр)', () => {
    expect(isPalindrome('радар')).toBe(true);
    expect(isPalindrome('А роза упала на лапу Азора')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
  });

  it('должна отвергать не-палиндромы', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('привет')).toBe(false);
  });

  it('пустая строка — палиндром', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('   ')).toBe(true);
  });

  it('должна возвращать false для не-строк', () => {
    expect(isPalindrome(123)).toBe(false);
  });
});

describe('getNumbers', () => {
  it('должна извлекать числа из строк', () => {
    expect(getNumbers('abc123def')).toBe(123);
    expect(getNumbers('Номер 45a67')).toBe(4567);
    expect(getNumbers('2024 год')).toBe(2024);
  });

  it('должна обрабатывать числа и edge-кейсы', () => {
    expect(getNumbers(123.45)).toBe(12345);
    expect(getNumbers('')).toBe(0);
    expect(getNumbers('abc')).toBe(0);
    expect(getNumbers(null)).toBe(0);
    expect(getNumbers(undefined)).toBe(0);
  });
});
