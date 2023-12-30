//forEach Loop in Arrays--->Higher order function/ methods-->func which takes function as parameter or returns function 

//arr.forEach(callbackfunction)


let arr=[1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});


let arr2=['hello','hi','how' ];

arr2.forEach((val)=>{
    console.log(val);
});

arr2.forEach((val)=>{
    console.log(val.toUpperCase());
});

arr2.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});
