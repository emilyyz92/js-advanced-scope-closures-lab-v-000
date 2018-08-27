const produceDrivingRange = function(blockRange) {
  return function (begRange, endRange) {
    let beg = parseInt(begRange.slice(0, 2))
    let end = parseInt(endRange.slice(0, 2))
    const distance = end - beg - blockRange
    if (distance > 0) {
      return `${distance} blocks out of range`
    } else {
      return `within range by ${distance}`
    }
  }
}
