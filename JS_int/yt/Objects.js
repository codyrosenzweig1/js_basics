var car = {
    car_manufacturer : "Audi",
    car_model : "Q7",
    price : 50000,

    allwheeldrive : function()
    {
        document.write("This car comes four wheel drive");
    }
}

car.allwheeldrive();

//how to add a property to an objects
car.newfun = function(){
    return("function successfully added");
}

document.write(car.newfun());


// How to delete a property
delete car.car_model;
document.write(car.car_model);




//document.write("<h1>"+ car.allwheeldrive()+"</h1>")

// var car_manufacturer = "Audi";
// var car_model = "Q7";
// var price = 50000;

// function allwheeldrive() {
//     document.write("This car comes with Quattro all-wheel drive");
// }

// allwheeldrive();

function cars(car_manufacturer, car_model, price){
    this.car_manufacturer = car_manufacturer;
    this.car_model = car_model;
    this.price = price;

    this.allwheldrive = function() {
        document.write("<h2>"+"This car comes with four-wheel drive"+"</h2>");
    }
}

var c1 = new cars("Audi", "Q7", 50000);
c1.allwheldrive();

var c2 = new cars("BMW", "X7", 40000)
document.write(c2.car_model)