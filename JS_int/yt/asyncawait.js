function makeOrder(Coffee){
    return new Promise((resolve, reject) => {
        console.log("Making request for a " + Coffee)
        if (Coffee == "Black coffee"){
            resolve("Here is your coffee, Have a nice day!")
        }
        else{
            reject("Sorry! We serve black coffee only.")
        }
    })
}

function processOrder(order){
    return new Promise((resolve, reject)=> {
        console.log("Processing Order")
        resolve("Extra information " + order)
    })
}

// makeOrder("Black cffee").then(order=> {
//     console.log("Order has been received")
//     return processOrder(order)
// }).then(processOrder=>{
//     console.log(processOrder)
// }).catch(error => {
//     console.log(error)
// })

async function func1(){
    try{
    var order = await makeOrder("Black coee")
    console.log("Order has been received")

    var processedOrder = await processOrder(order)
    console.log(processedOrder)}
    catch(error){
        console.log(error)
    }
}

func1();