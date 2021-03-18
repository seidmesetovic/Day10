function myFunction(myObj, checkProp){
    var myprop = myObj[checkProp];
    return myObj.hasOwnProperty(checkProp)? myprop:"Not Found";
}
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre"));
console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor"));
module.exports = myFunction;