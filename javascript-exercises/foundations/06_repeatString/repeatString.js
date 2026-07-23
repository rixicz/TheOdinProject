const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR"
    }
    let repeatedWords = "";
    for (i = 0; i < times; i++) {
        repeatedWords += word
    }
    return repeatedWords
};

// Do not edit below this line
module.exports = repeatString;
