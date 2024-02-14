//CLASSES AND OBJECTS IN JS


//object is an entity having state and behaviour(properties and method)
//Prototypes in JS
//js objects have special property called prototypes
//we can set prototype using __proto__


const student={
    name:'Ambuj Singh',
    marks: 98,
    printMarks:function(){//function or method
      console.log("Marks", this.marks);

    },
}


//example 2

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};


//now if the more employees objects are added and we want to have the calcTax() function work in all
// of these additonal employees then we use __proto__ it makes easier to add the function instead 
//of adding function one by one to all additional employees directly it can be done by __proto__
//prototype is also a type of object

//if object and prototype have same methods then object's method will be used


const employee2={
    salary:50000,
};

const employee3={
    salary:60000,
};

const employee4={
    salary:70000,
};

employee2.__proto__=employee;//using __proto__
employee3.__proto__=employee;
employee4.__proto__=employee;
employee4.__proto__=employee;


//CLASS


class ToyotaCar{
    constructor(brand){//constructor
       console.log("creating new object");
       this.brand=brand;
    }

    start(){
        console.log("start");
    }

    end(){
      console.log("stop");
    }
}

//now if I want to create any object from this ToyotaCar then use new keyword

let fortuner=new ToyotaCar();//object
let innova=new ToyotaCar("innova");//brand is passed to the consturctor

//inheritance

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
      
}

let obj=new Child();//creating objects

//Inheritance example 2

class Person{
    constructor(){
     this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){//methond overriding -->if parent and child class have same methods then child method will be used.
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    constructor(branch){
        super();//to invoke parent class constructor
        this.branch=branch;
    }
    work(){
        console.log("engineering");
    }
}

let AmbujObj=new Engineer("SDE");//creating object



