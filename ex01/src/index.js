let friend = ['Mićo', 'Frki'];
var myPet = {
    species:"dogs",
    name:"Rex",
    legs:4,
    friends:friend
    
}
function myFunction(myObj){

return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction};
