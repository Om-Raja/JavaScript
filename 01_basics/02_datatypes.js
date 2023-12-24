"use strict"; //treat all JS code as newer version

//alert(3+3) // throws error -> because we are using node.js, not browser

console.log(3+3); console.log("Om Raja")
//seperate two commands by ';' if written in same line
//but it is not good, write commands in different line
//a good example is given below 
console.log(3+3)
console.log("Om Raja")
/* example ends here */


console.log(3+
    5)
//methods ignore whitespaces and new lines but don't write like that 3+5
//because code readability should be high
//a good example is below
console.log(3+5)

//tc39.es <-- real JS documentation
//mdn <-- another documentatin source for JS

let name = "Om Raja"
let roll = 2215197
let booool = false //JS use lower case 'false'
let ghar
let temperature = null;
console.table([name, roll, booool, ghar])

/* ---------Datatypes--------*/
// number => upto 2 raised to power 53
// bigint
// string => prefer using " ", you can use ' ' too.
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique, mostly talked in 'react'




// to check datatype of any variable, use 'typeof'
console.log(typeof"Om Raja")
console.log(typeof name)
console.log(typeof roll)
console.table([typeof roll, typeof booool, typeof ghar])
let a = typeof temperature
console.log(a) // output = 'object'
console.log(typeof temperature) // output = 'object'
console.log(typeof undefined) // output = 'undefined'
console.log(typeof null) // output = 'object'

