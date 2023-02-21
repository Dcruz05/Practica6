let greeting = "Hello from greet 5" // No es accesible desde app
let greet = () => {
    console.log(greeting)
}
let test = ()=>{
    console.log("esto es una prueba")
}
let jump = () => { console.log("I'm jumping") }
let run = () => { console.log("I'm renning") }
module.exports = { 
    greet, // Si la llave tiene el mismo nombre del valor se puede omitir uno
    test1: test,
    //test2:{jump,run}
    jump,
    run
}