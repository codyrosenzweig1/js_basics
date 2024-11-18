//var obj_name = new Object();

// var rect2 = new Object(); 

// rect2.length = 5;
// rect2.width = 10;

// rect2.getarea = function(){
//     return this.length*this.width
// }

// rect2.getperimeter = function(){
//     return this.width * 2 + this.length * 2
// }

// document.write("<h2>"+"The length of the rectangle is: " + rect2.length+"</h2>");
// document.write("<h2>"+"The width of the rectangle is: " + rect2.width+"</h2>");
// document.write("<h2>"+"The area of the rectangle is: " + rect2.getarea()+"</h2>");
// document.write("<h2>"+"The perimeter of the rectangle is: " + rect2.getperimeter()+"</h2>");


function rect3(length, width){
    this.length = length;
    this.width = width;
    this.getarea = function(){
        return length * width;
    }
    this.getperimeter = function(){
        return 2*length + 2*width
    }
}

var r1 = new rect3(5, 10);
document.write("<h2>"+"The area of the rectangle is: " + r1.getarea()+"</h2>");
document.write("<h2>"+"The perimeter of the rectangle is: " + r1.getperimeter()+"</h2>");
document.write("<h2>"+"The length of the rectangle is: " + r1.length+"</h2>");
document.write("<h2>"+"The width of the rectangle is: " + r1.width+"</h2>");

var r2 = new rect3(4, 8);
document.write("<h2>"+"The area of the rectangle is: " + r2.getarea()+"</h2>");
document.write("<h2>"+"The perimeter of the rectangle is: " + r2.getperimeter()+"</h2>");
document.write("<h2>"+"The length of the rectangle is: " + r2.length+"</h2>");
document.write("<h2>"+"The width of the rectangle is: " + r2.width+"</h2>");