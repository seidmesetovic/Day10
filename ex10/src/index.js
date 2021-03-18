function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Gn'R",
            title: "Piano Man",
            release_year: 1973,
            id: "fifty",
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
            

        }
          
    };
    return myMusic
    
}
console.log(myFunction()[2]);
module.exports = myFunction;