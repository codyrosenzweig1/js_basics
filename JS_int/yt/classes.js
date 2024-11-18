class Student {
    constructor(name, age, roll){
    this.name = name;
    this.age = age;
    this.roll = roll;
    }

Org(){
    return ("I am " + this.name + " from Aus");
}

dob(){
    return ("The date of birth of " + this.name + " is " + (2024 - this.age));
}

static add(a, b){
    return a+b;
}

}

class Student2 extends Student{
    constructor(name, age, roll, language, section){
        super(name, age, roll)
        this.language = language;
        this.section = section;
    }
}

var Cody = new Student2("Cody", 35, 2, "JavaScript", "A");
console.log(Cody)
console.log(Student.add(1, 3))
