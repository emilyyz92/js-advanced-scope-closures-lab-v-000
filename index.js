const produceDrivingRange = function(blockRange) {
  return function (begRange, endRange) {
    let begRange = parseInt(begRange.slice(0, 2))
    let endRange = parseInt(endRange.slice(0, 2))
    const distance = endRange - begRange - blockRange
    if (distance > 0) {
      return `${distance} blocks out of range`
    } else {
      return `within range by ${distance}`
    }
  }
}
