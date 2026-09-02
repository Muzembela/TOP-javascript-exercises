const repeatString = function(str, num) {
    let i = 0
    let res = ""
    while(i < num)
    {
        res += str
        i++
    }
    console.log(res)
};

// Do not edit below this line
module.exports = repeatString;
repeatString("hey", 4)