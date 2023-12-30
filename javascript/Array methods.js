//Arrays methods-> push(),pop(),toString(),concat(),unshift(),shift(),slice(),splice()

let fooditems=['A','b,','c','d'];
let ans=fooditems.push('jackfruit');
let deleteitem=fooditems.pop();
console.log(fooditems);
console.log(deleteitem)


let marks=[29,373,37,22,3,4];
let res=marks.toString();
console.log(marks);
console.log(res);


let marvel=['thor','ironman','spiderman'];
let dc=['superman','batman'];
let indianheros=['shaktiman','kris'];

let heroes=marvel.concat(dc,indianheros);
console.log(heroes);


//unshift()-->adds elements to start
marvel.unshift('Antman');
console.log(marvel);

//shift()-->deletes the first 
let track=dc.shift();
console.log('deleted ',track);


//slice()--->returns a piece of the array

let a=['hello','cat','bat','rat','ball'];
console.log(a.slice(1,3));


//splice()--->change original array(add,remove,replace)
//splice(startidx,delCount,newEle);

let num=[1,2,3,4,5,6,7];
num.splice(2,2,101,102);


//Some more Array Methods with examples

// 1. Map method

let nums=[23,43,56,34];

let newArray=nums.map((val)=>{
    return val*2;//new array is created using some returned value
});
console.log(newArray);

//diff b/w forEach and map is forEach use tab hota hai jab normally koi calculation karna
// ho ya kuch print karna ho aur map tab use hota hai jab new array mein kuch store karn ho


//2. filter method-->filter and creates new array based on certain conditions

let newArr=nums.filter((val)=>{
    return val%2===0;
});
console.log(newArr);


//3. Reduce method-->reduces to single value in output result

let arr=[1,2,3,4];

const output=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);

