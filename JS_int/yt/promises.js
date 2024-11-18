var prom = new Promise(function(resolve, reject){

    var drive = false;
    if (drive){
        resolve("Yes ");
    }
    else{
        reject("No ");
    }

});

prom.then(function(resolve){
    console.log(resolve + "the user knows how to drive")
}).catch(function(reject){
    console.log(reject + "the user does not know how to drive")
})