//...................................//
const add = (num1, num2) => {
    return num1 + num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

module.exports = {
    name: "Maths Functions",
    desc: "This is some code to help with your maths",
    add: add,
    multiply,
}
//.......................................//
const sub = (num1, num2) => {
    return num1 - num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

module.exports = {
    name: "My own",
    desc: "Some more practice",
    sub: sub,
    divide: divide,
}