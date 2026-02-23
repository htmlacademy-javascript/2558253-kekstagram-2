import { describe, it, expect } from 'vitest';
import { checkLength, isPalindrome, getNumbers } from '../js/functions.js';

describe('checkLength', () => {
  it('should return true for short strings', () => {
    expect(checkLength('a', 1)).toBe(true);
    expect(checkLength('ab', 2)).toBe(true);
    expect(checkLength('', 0)).toBe(true);
  });

  it('should return false for long strings', () => {
    expect(checkLength('abc', 2)).toBe(false);
  });
});

describe('isPalindrome', () => {
  it('should detect palindromes (ignoring spaces and case)', () => {
    expect(isPalindrome('радар')).toBe(true);
    expect(isPalindrome('А роза упала на лапу Азора')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
  });

  it('should reject non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('привет')).toBe(false);
  });

  it('empty string should be a palindrome', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('   ')).toBe(true);
  });

  it('should return false for non-strings', () => {
    expect(isPalindrome(123)).toBe(false);
  });
});

describe('getNumbers', () => {
  it('should extract numbers from strings', () => {
    expect(getNumbers('abc123def')).toBe(123);
    expect(getNumbers('Номер 45a67')).toBe(4567);
    expect(getNumbers('2024 год')).toBe(2024);
  });

  it('should handle numbers and edge cases', () => {
    expect(getNumbers(123.45)).toBe(12345);
    expect(getNumbers('')).toBe(0);
    expect(getNumbers('abc')).toBe(0);
    expect(getNumbers(null)).toBe(0);
    expect(getNumbers(undefined)).toBe(0);
  });
});
