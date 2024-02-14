//Q.1 You are creating a website for your college. Create a class User with 2 properties ,name and email.
// It also has a method called ViewData() that allows user to view website data.

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    ViewData(){
        console.log("website data");
    }
}

let Student1=new User("Ambuj","aavjia@gmail.com");
let Student2=new User("Shubham","aman@gmail.com");


//Q2. Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows 
// to edit website data.

let DATA="website data";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    ViewData(){
        console.log("data= ",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
  editData(){
     DATA="Some new value";
  }
}

let admin=new Admin("admin","admin@gmail.com");
