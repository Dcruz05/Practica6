function Greetr(){
    this.greating = "Hello from the function constructor"
    this.greet = function(){
        console.log(this.greating);
    }
}
module.exports = new Greetr

