//.....................local modules..//
let mathsFunctions = require("./mathsFunction")
console.log(mathsFunctions.name)

const { multiply } = require("./mathsFunction")
console.log(multiply(6,8))

//object extract. A bit of what you need
let { add, multiply} = require("./mathsFunction")
console.log(add(5,7))
//......................................//


//......................................//
const { sub} = require("./mathsFunction")
console.log(sub(9,4))
//....................................//


//..................................core modules//
const os = require('os');
const fs = require('fs');

let userDetails = os.userInfo().username;

fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
    if (err){
        console.log('oops');
    }
})
//This creates a txt file with "Hello danny" which is my operating system file name.
//................................//


//....dependency............third-party modules
const _ =require('lodash');

let array = [1,2,3]

console.log(_.reverse(array))

