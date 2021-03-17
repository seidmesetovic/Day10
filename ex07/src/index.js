function myFunction(par1){
    var lion = {
        name:"Simba",
        legs: 4,
        tails: 1,
        roar:"roar-roar"
        
    };
    delete lion[par1];
    return lion;
}
myFunction("roar");
module.exports = myFunction;