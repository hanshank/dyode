/**
 *
 * @param {string} price the price without currency symbol
 * @returns string with the currency symbol in front, e.g "$"
 */
export const getPrice = price =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price)
