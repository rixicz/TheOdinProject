const palindromes = function (word) {
    const alphabetWithNums = "abcdefghijklmnopqrstuvwxyz1234567890"
    word = word.toLowerCase()
    let wordList = word.split("")
    let polishedList = wordList.filter(element => alphabetWithNums.includes(element));
    let polishedWord = polishedList.join("")
    console.log(polishedWord)
    let reversed = polishedList.reverse()
    let newWord = reversed.join("")
    return polishedWord === newWord
};

// Do not edit below this line
module.exports = palindromes;
