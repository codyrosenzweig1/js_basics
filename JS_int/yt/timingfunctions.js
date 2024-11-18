var message = () => alert("Welcome to Simplicode");

function Start(){
    id = setInterval(message, 5000);
}

function Stop(){
    clearTimeout(id);
}

var id = 0;

// function Start(){
//     setTimeout(function(){
//         alert("Welcome Back");
//     }, 2000)
// }