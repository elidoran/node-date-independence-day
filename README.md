# @date/independence-day
[![Build Status](https://travis-ci.org/elidoran/node-date-independence-day.svg?branch=master)](https://travis-ci.org/elidoran/node-date-independence-day)
[![npm version](https://badge.fury.io/js/%date%2Findependence-day.svg)](http://badge.fury.io/js/%date%2Findependence-day)
[![Coverage Status](https://coveralls.io/repos/github/elidoran/node-date-independence-day/badge.svg?branch=master)](https://coveralls.io/github/elidoran/node-date-independence-day?branch=master)

Use with @date/holidays, create Independence Day Date by year, or test if a Date is Independence Day.

Has default info for holiday which can be overridden when loading it into a @date/holidays.


## Install

```sh
npm install --save @date/independence-day
```


## Usage

```javascript
// 1. use package directly
const holiday = require('@date/independence-day')

// the `gen` function creates a Date by year.
const date = holiday.gen(2001)

// the `is` function tests if a Date is the holiday.
const result = holiday.is(new Date(2001, 2, 3))

if (result) {
  // truthy value means it is a holiday.
}

// the actual returned value is a number between 0 and 3.
// 0 - not a holiday
// 1 - is a holiday on its main date in a year without an observed date.
// 2 - is a holiday on an observed date.
// 3 - is a holiday on its main date in a year with an observed date.


// 2. load into a @date/holidays instance:

// create a Holidays instance:
const holidays = require('@date/holidays')()

// load holiday into the Holidays instance:
// 1. without options overrides
holidays.load('@date/independence-day')
// 2. with options overrides:
holidays.load('@date/independence-day', {
  // optional override options here.
})

holidays.isHoliday(date)                 // true
holidays.isHoliday(new Date(2001, 0, 0)) // false

holidays.getHoliday(date)                 // array with info
holidays.getHoliday(new Date(2001, 0, 1)) // returns empty array
```


## [MIT License](LICENSE)
