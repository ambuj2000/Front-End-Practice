//create a game where you start with a game number. Ask the user to keep guessing the number
//until the user enters the correct value.

let gameNumber=25;

let userNumber=prompt("Guess the game number: ");
console.log(userNumber);

while(userNumber!=gameNumber){
   userNumber=prompt("You entered wrong number!! Guess again: ");
}

console.log("Congratulations, You entered the correct number!!")



//Template literals-->(string written in backticks ` `)
//string interpolation--> ${}

let obj={
    item:"pen",
    price:10,
};

console.log(`The cost of ${obj.item} is ${obj.price} rupees`);



// Q2. Prompt the user to enter their fullname. Generate a username for them based on the input.
// Start the username with @, followed by their fullname and ending with the fullname length.
// e.g- username='Ambuj' o/p=@Ambuj5


let usrname=prompt("Enter your name to generate the username :");
let str='@';
let len=usrname.length;
let ans=str.concat(usrname);
console.log(ans+len);


//Q3. For a given array with marks of students->[85,97,44,37,76,60].
//Find the average marks of the entire class.

let marks=[85,97,44,37,76,60];
let len=marks.length;
let sum=0;
for(let mark of marks){
    sum+=mark;
}
let ans=sum/len;
console.log(ans);

//Q.4 For a given array with prices of 5 items->[250,645,300,900,50].
//All item have an offer of 10% OFF on them. Change the array to store
//the final price after applying offer.

//Approach-1
let items=[250,645,300,900,50];
let i=0;
for(let item of items){
    let cnt=item/10;
    items[i]=items[i]-cnt;
    i++;
}
console.log(items);

//Approach-2

for(let i=0;i<items.length;i++){
    let check=items[i]/10;
    items[i]=items[i]-check;
}
console.log(items);
