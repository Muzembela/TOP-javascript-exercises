const leapYears = function(num) {
    if ((num % 4 || num % 400) === 0) 
      return true
    else
      return false
};

leapYears(1985)

// Do not edit below this line
module.exports = leapYears;
