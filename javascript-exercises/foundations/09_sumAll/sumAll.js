const sumAll = function(a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0)) {
        return "ERROR"
    }
    
    let val = 0
    let small;
    let large;
    if (a < b) {
        small = a;
        large = b;

    } else {
        small = b;
        large = a;
    }
    console.log(small)
    for (i = small; i <= large; i++) {
        val += i
    } 
    
    return val

};

// Do not edit below this line
module.exports = sumAll;
