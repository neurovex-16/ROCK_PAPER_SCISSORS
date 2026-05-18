// const student={
//      fullName:"Shadman",
//      marks: 95,

//      printMarks: function()
//      {
//         console.log("marks = ",this.marks);
//      }
// };



// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax()
//     {
//         console.log("tax rate is 20%"); 
//     }
// };

// karanArjun.__proto__ = employee;


// class ToyotaCar{
//     constructor(brand,mileage)
//     {
//         console.log("Creating");
//         this.brand=brand;
//         this.milage=milage;
//     }
//     start()
//     { 
//         console.log("Start");
//     }
//     stop()
//     {
//         console.log("Stop");
//     }

//     // setBrand(brand)
//     // {
//     //     this.brand=brand; 
//     // }
// }

// let fortuner= new ToyotaCar("fortuner",10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",12);
// console.log(lexus);





// Inheritance

// class Person {
//     constructor()
//     {
//         this.species="Homo Sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }
// class Engineer extends Person {
//     constructor(branch){
//         super();
//         this.branch=branch; // to invoke parent class constructor
//     }
//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work()
//     {
//         console.log("treat patients");
//     }
// }
// let shradhaObj = new Engineer();







// Practise Questions

let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

let student1 = new User("shradha", "abc@email.com");
let student2 = new User("aman", "aman@email.com");

