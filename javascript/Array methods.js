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
