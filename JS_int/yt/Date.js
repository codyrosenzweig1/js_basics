// function something(){
//     document.write("Welcome to Simplicode ");
// }

//setInterval("something()", 2000);

// var now = new Date(2018, 11, 24, 10, 33, 30, 0);
// document.write(now);

function clock(){
    var cd = new Date();
    var hours = cd.getHours();
    var minutes = cd.getMinutes();
    var seconds = cd.getSeconds();
    document.write("<h1>"+hours+":"+minutes+":"+seconds+"</h1>");
}

setInterval("clock()", 1000);