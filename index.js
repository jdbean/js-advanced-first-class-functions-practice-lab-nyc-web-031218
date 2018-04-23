// Code your solution in this file!
const logDriverNames = function(array) {
  array.forEach(function(element)
    console.log(element.name)
  )
}

const logDriversByHometown = function(array, hometown) {
  array.forEach(function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  })
}
const driversByRevenue = function(array) {
  return array.slice().sort(function (d1, d2) {
    return d1.revenue - d2.revenue
  })
}

const driversByName = function(array) {
  return array.slice().sort(function (d1, d2) {
    return d1.name.localeCompare(d2.name)
  })
}

const totalRevenue = function(array) {
  return array.reduce(function (agg, el, i, arr) {
    return agg + el.revenue
  }, 0)
}

const averageRevenue = function(array) {
  return totalRevenue(array) / array.length
}
