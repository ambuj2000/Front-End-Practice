//fetch API
// fetch api provides an interface for fetching (sending/receving) resources.
// It uses Request and Response Objects.
// The fetch() method is used to fetch a resource(data).

// let promise=fetch(url,[options])

const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#facts");
const button=document.querySelector("#btn");

const getFacts=async() => {
    console.log("getting data...");
    let response=await fetch(URL);
    console.log(response);//JSON format
    let data= await response.json();//yaha ham json format ko js object format mein convert kar rahe hai
    factPara.innerText=data[0].text;
    console.log(data);
    console.log(data[0].text);
}

btn.addEventListener("click",getFacts);



//HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="facts"></p>
    <button id="btn">get a fact</button>
    <script src="app.js"></script>

</body>
</html>
