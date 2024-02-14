//try and catch -error handling

let a=10;
let b=5;

console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
try{
    console.log("a+c=",a+c);
}catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);


//output for this code will be like:

// a= 10
// js:7 b= 5
// js:8 a+b= 15
// js:12 ReferenceError: c is not defined
//     at js:10:26
// js:14 a+b= 15
// js:15 a+b= 15
// js:16 a+b= 15


