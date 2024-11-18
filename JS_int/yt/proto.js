console.log("Welcome to SimpliCode")

var abc = {
    Name : "Cody",
    Subject : "JavaScript",
    Address : "Melbourne"
}

console.log(abc)

function xyz(name, subject, Address){
    this.name = name;
    this.subject = subject;
    this.Address = Address;
}
xyz.prototype.getName = function(){
    return this.name;
}

xyz.prototype.getAddress = function(){
    return this.Address;
}
var x1 = new xyz("Cody", "Java", "Earth");
console.log(x1);


var x2 = new xyz("Peter", "English", "Mars");


// Adding new properties
xyz.prototype.grades = "A";
