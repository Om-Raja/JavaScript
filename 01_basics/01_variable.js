const account_Id = 31414
let email = "omraja4664@yahoo.com"
var account_password = "12345"
account_city = "Ludhiana" 
/* just like python if you don't specify datatype JS
will automatically consider it according to value. But
specifying datatype is good practic. */

let account_state;
//using semicolon(;) in JS is optional
/* When any value is not initialized to a variable it
will output 'undefined'. */

// account_Id = 75847  //not allowed
/*if you change const variable it will throw an error
showing that you cannot use assignment operator with a 
const variable that you have already initialized. */

console.log(account_Id);

console.table([account_Id, email, account_password, account_city])

email = "nikitasingh234@mail.in"
account_password = "5313"
account_city = "Chhapra"

console.table([email, account_password, account_city,account_state])

/*
prefer not to use 'var', because of block issue and functional scope. Its value will get changed if another value is assigned in other functional scope to the variable of same name.
*/
