const produceDrivingRange = function(blockRange) {
  return function (begRange, endRange) {
    let beg = parseInt(begRange.slice(0, 2))
    let end = parseInt(endRange.slice(0, 2))
    const distance = end - beg - blockRange
    if (distance > 0) {
      return `${distance} blocks out of range`
    } else {
      return `within range by ${-distance}`
    }
  }
}

const produceTipCalculator = function(percent) {
  return function(amount) {
    return amount * percent
  }
}

const createDriver = function() {
  let driverId = 0;
  class Driver {
    constructor (name) {
      this.name = name
      this.id = driverId++
    }
  }
}
