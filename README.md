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
// use package directly
const holiday = require('@date/independence-day')

// the `gen` function creates a Date by year.
const date = holiday.gen(2001)

// the `is` function tests if a Date is the holiday.
holiday.is(new Date(2001, 2, 3))


// use as a plugin with @date/holidays instance:

// create a Holidays instance:
const holidays = require('@date/holidays')()

// load holiday into the Holidays instance:
holidays.load('@date/independence-day', {
  // optional override options here.
})

holidays.isHoliday(date)                 // true
holidays.isHoliday(new Date(2001, 0, 0)) // false

holidays.getHoliday(date)                 // array with info
holidays.getHoliday(new Date(2001, 0, 1)) // returns empty array
```


## [MIT License](LICENSE)
