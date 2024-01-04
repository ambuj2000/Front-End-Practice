//DOM- METHODS TO ACCESS OUR ELEMENTS FROM THE PAGE 
//DOCUMENT OBJECT MODEL

let check=document.getElementsByClassName("heading");
console.dir(check);
console.log(check);

let ans=document.getElementById("track");
console.dir(ans);

let paras=document.getElementsByTagName("p");
console.dir(paras);

//QUERY SELECTORS

let firstele=document.querySelector("p");//first element selected & can put anything p or id or class in this
console.dir(firstele);

let allele=document.querySelectorAll("p");//all elements selected
console.dir(allele); //return nodelists
//output:
//NodeList(2)
// 0: p
// 1: p
// length: 2
// [[Prototype]]: NodeList

let classcheck=document.querySelectorAll(".heading");//CLASS
console.dir(classcheck);

let idcheck=document.querySelector("#track");
console.dir(idcheck);


//properties:
//1.tagName:return tag for element nodes
//2.innerText:returns the text content for the element and its all children
//3.innerHTML:returns the plain text or HTML contents in the element
//4.textContent:return the textual content even for the hidden elements


let tag=firstele.tagName;
console.dir(tag);


let div=document.querySelector("div");
console.dir(div);
let test=div.innerText;
console.dir(test);

let head=document.querySelector('h1');
head.innerHTML="<i>new heading</i>";
console.dir(head);

// learn about--->text node, comment node & element node
