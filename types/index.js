//single line comment
console.log('This is text, and a string');
/*
*/

let str_a = "Justin's This is a double string"
let str_b = ' "Justin" This is a single quote string'

//console.log('This is new')
//Use this to add data into a string
let str_c = `This is a backtick quoute string`

//Just mentioning this, we will talk more about this
let strg_d = String(5)

let f_name = 'Justin'
let l_name = 'Ahman'

//New op: unary operator that gives back type info
console.log(typeof f_name)
console.log(typeof "What is this?")

let full_name = f_name + ' ' + l_name
let template_full = `${f_name} ${l_name}`
let concat_full = f_name.concat(l_name)
console.log(concat_full);
console.log(full_name)
console.log(template_full)

let multi_line1 = 'this is a long string' + 
'and I want it on many lines'

let multi_line2 = 'this is also a long string\ and I want it on many lines'

console.log(multi_line1);
console.log(multi_line2);

demo_str = "this is a demo"
let result = demo_str.slice(3)

console.log(result);

let indexed_str = "Hello World"
console.log(indexed_str);
console.log(indexed_str[0]);

