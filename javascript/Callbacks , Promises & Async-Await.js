//Classbacks, Promises & Async Await



//example of asynchronous js

console.log("one");
console.log("one");


function hello(){
    console.log("Hello");
}

//setTimeout(hello,8000);

//OR

setTimeout(()=>{
    console.log("Hello world");
},4000);

console.log("two");

//callback
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}

calculator(1,2,sum);

//promises
let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    
});



function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}


//promise chaining

getData(1)
.then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res);
})


//Async-Await

//async function always return a promise

async function hello(){
    console.log("Hello");
}

//await->is used to pause the execution of surrouding async function

function api(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);

         },2000);
    });
}

async function getWeatherData(){
    await api();//1
    await api();//2 this is the way await function is used inside the async function for 
    //calling the previous async function
}

//yaha dekh sakte ho ki await() ko execute karne k liye unnecessarily 1 function k andar daalna
//pada toh isse bacchne k liye haam IIFE (immediately inovked function expression) use karte hai.

 (function(){
    //...

 })();
 //iska disadv yeh hai ki isko 1 hi baar use kar sakte ho

(async function getWeatherData(){
    await api();//1
    await api();//2 this is the way await function is used inside the async function for 
    //calling the previous async function
})();

//filesystem module is also a async function

const fs=require("fs");
//file system module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

//Promise is a self-created async function which we are not using from others async function

function AmbujAsyncFunction(){
    return new Promise(function(resolve){
        resolve("Hi there");
    }); 
}

const value=AmbujAsyncFunction();
value.then(function(data){
    console.log(data);
});

//Async-await

function AmbujAsyncFunction(){
    let p =new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

async function main(){
    const value=await AmbujAsyncFunction();
    console.log(value);
}

main();
