//Events in JS
// The change in state of an object is known as Event
//Events are fired to notify code of "interesting changes" that may affect code execution.
//Diff events in JS-->Mouse events, keyboard events, Form events, Print events & many more


let btn1=document.querySelector("#btn"); //btn is a id created in html button

btn1.onclick = (evt) => {
console.log("button was clicked");
let a=25;
a++;
console.log(a);

console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX, evt.clientY);
}



let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("you are inside div"); 

console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX, evt.clientY);
}

//Event Listeners
//addEEventListener(event,callback)

btn1.addEventListener("click", (evt)=>{
    console.log("button was clicked 1");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
});

btn1.addEventListener("click", (evt)=>{
    console.log("button was clicked 2");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
});

const handler3=()=>{
    console.log("button was clicked 3");
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click", (evt)=>{
    console.log("button was clicked 4");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
});

//removeEventListener
//note the callback reference should be same while removing 
//node.removeEventListener(event,callback);
btn1.removeEventListener("click",handler3);
