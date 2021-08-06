const formattedStringAndDelimeter = require("./formattedStringAndDelimeter");

module.exports = (numbers) => {
    //split the numbers string into numbers and delimeter
    const {formattedString, delimeter} = formattedStringAndDelimeter(numbers)
    let arrayNum = formattedString.split(delimeter);

    //string to number
    arrayNum = arrayNum.map(n => +n);

    //add all the numbers
    return arrayNum.reduce((i, sum) => {return sum+i}, 0);
}