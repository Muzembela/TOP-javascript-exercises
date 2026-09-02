const removeFromArray = function(arr, el)
{
  const deleted = arr.filter(num => num !== el)
  console.log(deleted)
}
const arr= [1,2,3,4]
removeFromArray(arr, 3)
// Do not edit below this line
module.exports = removeFromArray;
