let score = undefined
console.log(typeof score)
console.log(typeof(score)) // allowed

let value_in_number = Number(score) 
//'Number' Starts with uppercase in conversion command
console.log(typeof value_in_number)
console.log(value_in_number)

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 ; false => 0
// undefined => NaN
// (NaN stands for 'Not a Number') but it shows its dataype is 'number'

let is_logged_in = " "
console.log(typeof(is_logged_in))

let boolean_is_logged_in = Boolean(is_logged_in)
//'Boolean' Starts with uppercase in conversion command
console.log(typeof(boolean_is_logged_in))
console.log(boolean_is_logged_in)

// 0 => false
// 1 => true
// null => false
// undefined => false
// 245 => true
// "Hello" => true
// "" => false
// " " => true

let someNumber = 34
let stringNumber = String(someNumber)
//'String' Starts with uppercase in conversion command
console.log(stringNumber)
console.log(typeof(stringNumber))