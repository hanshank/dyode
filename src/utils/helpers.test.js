import { getPrice } from './helpers'

describe('getPrice', () => {
  it('should return dollar sign in front of given price', () => {
    expect(getPrice('19.99')).toBe('$19.99')
  })
})
