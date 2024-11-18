// const Employee = {
//     Post : function(){
//         return "A software developer";
//     },
//     changeName : function(name){
//         this.name = name;
//     }
// };

// var E1 = Object.create(Employee);
// E1.name = "Cody";
// E1.role = "Writer";
// E1.changeName("Peter");
// console.log(E1);

/*
var E1 = Object.create(Employee, {
    name : {value: "Cody", writable : true},
    role : {value : "Programmer"},
});

E1.changeName("Peter");
console.log(E1);*/

function Employee(name, id, salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function(){
    return (this.name + " " + " Content creator");
}

var Cody = new Employee("Cody", 313, 10000);
console.log(Cody)

function Programmer(name, id, salary, language){
    Employee.call(this, name, id, salary);
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;
var Arun = new Programmer("Arun", 1321, 12000, "JavaScript")
console.log(Arun)