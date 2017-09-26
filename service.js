'use strict'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const isValidDate = date => {
  return date.getTime() === date.getTime()
} 
  
const parseTimeStamp = timestamp => {
  const date = new Date(timestamp)
  return months[date.getMonth()] +  ' ' + date.getDate() + ', ' + date.getFullYear()
}

const fromTs = timestamp => {
  return {unixtime: timestamp, natural: parseTimeStamp(timestamp*1000)}
}

const fromNatural = date => {
  const ts = date.getTime()
  return {unixtime: ts, natural: parseTimeStamp(ts)}
}

const prepareDate = str => {
  let output = {}
    
  if (typeof str !== 'undefined' && str !== '' && str !== null) {

    const input = parseInt(str)

    if (isNaN(input)) {
      const date = new Date(str)
    
      if (isValidDate(date)) {
        output = fromNatural(date)
      } else {
        output = {error: 'invalid date format'}
      }
  
    } else {
      const pattern = /\d{10}/g
      const regex = new RegExp(pattern)
      let m
      if ((m = regex.exec(input)) !== null) {
        output = fromTs(input)
      } else {
        output = {error: 'invalid timestamp'}
      }
    }
      
  }
  return output
}

module.exports = prepareDate