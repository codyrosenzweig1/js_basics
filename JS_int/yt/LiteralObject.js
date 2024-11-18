var rect1 = {
    length : 5,
    width : 10,

    getarea : function(){
        return (this.length * this.width);
    },

    getperimeter : function(){
        return 2 * this.length + 2 * this.width
    }
}

document.write("<h2>"+"The length of the rectangle is: " + rect1.length+"</h2>");
document.write("<h2>"+"The width of the rectangle is: " + rect1.width+"</h2>");
document.write("<h2>"+"The area of the rectangle is: " + rect1.getarea()+"</h2>");
document.write("<h2>"+"The perimeter of the rectangle is: " + rect1.getperimeter()+"</h2>");