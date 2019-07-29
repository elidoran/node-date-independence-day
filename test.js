'use strict'

const assert  = require('assert')
const holiday = require('./index.js')

const NOT_HOLIDAY = 0
const MAIN = 1
const OBSERVED = 2
const MAIN_WHEN_OBSERVED = 3

function isDate(year, month, day, expected) {
  const date = new Date(year, month, day)
  const result = holiday.is(date, day, month, year)

  assert.equal(result, expected)
}

describe('test @date/independence-day', () => {

  it('gen date without observed date', () => {
    const date = holiday.gen(2001)

    assert(date, 'should generate the date')
    assert.equal(date.getFullYear(), 2001)
    assert.equal(date.getMonth(), 6)
    assert.equal(date.getDate(), 4)

    assert.equal(date.observed, null, 'no observed date for 2001')
  })

  it('gen date with observed date on Monday', () => {
    const date = holiday.gen(2004)

    assert(date, 'should generate the date')
    assert.equal(date.getFullYear(), 2004)
    assert.equal(date.getMonth(), 6)
    assert.equal(date.getDate(), 4)

    assert(date.observed, 'observed date for 2004')
    assert.equal(date.observed.getFullYear(), 2004)
    assert.equal(date.observed.getMonth(), 6)
    assert.equal(date.observed.getDate(), 5)
  })

  it('gen date with observed date on Friday', () => {
    const date = holiday.gen(2009)

    assert(date, 'should generate the date')
    assert.equal(date.getFullYear(), 2009)
    assert.equal(date.getMonth(), 6)
    assert.equal(date.getDate(), 4)

    assert(date.observed, 'observed date for 2009')
    assert.equal(date.observed.getFullYear(), 2009)
    assert.equal(date.observed.getMonth(), 6)
    assert.equal(date.observed.getDate(), 3)
  })

  it('test main date on weekday with is()', () => {
    isDate(2001, 6, 4, MAIN)
  })

  it('test main date on weekend with is()', () => {
    isDate(2004, 6, 4, MAIN_WHEN_OBSERVED)
  })

  it('test observed date on Friday with is()', () => {
    isDate(2009, 6, 3, OBSERVED)
  })

  it('test observed date on Monday with is()', () => {
    isDate(2004, 6, 5, OBSERVED)
  })

  it('test possible observed date when it\'s not', () => {
    isDate(2001, 6, 3, NOT_HOLIDAY)
    isDate(2001, 6, 5, NOT_HOLIDAY)
  })

  it('test non-holiday day in the same month', () => {
    isDate(2000, 6, 21, NOT_HOLIDAY)
  })

  it('test non-holiday date outside the same month', () => {
    isDate(2000, 1, 2, NOT_HOLIDAY)
  })

})
