const sumAll = function(a, b) {
    let s = 0
    while(a<=b)
    {
        s += a
        a++
    }
  return s
};
console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
