//strings are immutable in JS
//Arrays are mutable in JS

str="Ambuj";
newstr=str.toUpperCase();
console.log(newstr);

newstr1=str.toLowerCase();
console.log(newstr1);


str2="    hello ji kaise ho aap      ";
console.log(str2.trim());//remove white spaces before and after the string

str1="012383832";
console.log(str1.slice(2,5));//238

let res=str1.concat(str2);
console.log(res);//joins the string

let str3="ILoveJS";
console.log(str3.charAt(2));

str3=str3.replace("I","S");// to repalce I with S
console.log(str3);
