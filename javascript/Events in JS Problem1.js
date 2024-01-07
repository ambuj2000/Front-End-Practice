// Q1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked
//again.

let modeBtn=document.querySelector("#mode");
let currMode="light";//dark

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").classList.add("dark");
    }else{
        currMode="light";
        document.querySelector("body").classList.add("light");
    }
    console.log(currMode);

});


//OR

let modeBtn=document.querySelector("#mode");
let currMode="light";//dark
let body=document.querySelector("body");


modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});
