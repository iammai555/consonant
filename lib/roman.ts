const NUMERALS: [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

/**
 * Convert an integer (1–3999) to its classical Roman numeral.
 * Returns '0' for zero and falls back to the absolute value for negatives.
 */
export function toRoman(value: number): string {
  let n = Math.trunc(Math.abs(value))
  if (n === 0) return '0'

  let result = ''
  for (const [amount, symbol] of NUMERALS) {
    while (n >= amount) {
      result += symbol
      n -= amount
    }
  }
  return result
}
