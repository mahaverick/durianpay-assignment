/* eslint-env jest */
const add = require('./stringcalculator')

describe('add()', () => {
  test('Given empty string, should returns 0', () => {
    const given = ""

    const expected = 0;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given a string, should return sum', () => {
    const given = "1,2"

    const expected = 3;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given a string with newline, should return sum', () => {
    const given = "1,2\n3,4"

    const expected = 10;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })

  test('Given a string with multiple delimiter, should return sum', () => {
    const given = "//;\n1;2;3;4"

    const expected = 10;

    const actual = add(given)

    expect(actual).toEqual(expected)
  })
})