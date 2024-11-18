// function abc(call){
//     call();
// }

// function one(){
//     setTimeout(function(){
//     console.log("Function 1 ");
//     two();
//     }, 3000)
// }

// function two(){
//     console.log("Function 2 ");
// }
// one();

function person(friend, person2)
{
    setTimeout(function(){
    console.log("My friend's name is " + friend);
    person2();}, 3000);
}

function person2(){
    console.log("My name is Cody")
}

person("Eden", person2);