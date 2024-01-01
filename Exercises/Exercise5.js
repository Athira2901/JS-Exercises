let str="Arrow function  is concise way of writing JavaScript functions in shorter way. arrow functions were introduced in the ES6 version. they make our code more structured and readable. arrow functions are anonymous functions thatis functions without a name but they are often assigned to any variable. they are also called Lambda Functions."
var str1=str.split(". ")
let words= []
for(let i=0;i<str1.length;i++){
    words[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1)
   
}
var str2=words.join(". ")
console.log(str2)

