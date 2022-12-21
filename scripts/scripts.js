// declaring variables
const searchBtn = $("#search-button");
const randomBtn = $("#random-button")
const searchInput = $("#search-box");
var div = ''

const pokeApi = "https://pokeapi.co/api/v2/pokemon";

function RNG() {
    return Math.floor(Math.random() * 1154)        
}

// IT STARTS HERE

// Allowing you to search for Pokemon name
searchBtn.on('click', (event)=>{
    loadPkmn(searchInput.val().toLowerCase());

})

// Randomizes a Pokemon
randomBtn.on('click', (event)=>{
    loadPkmn(RNG());
})

async function loadPkmn(query) {
    try {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        const pkmn = await result.json();
        
        //Fetching pkmn info - make loop for type
        const pkmnName = (pkmn.name); //Grabbing pokemoon's name
        
        let typeOne = pkmn.types; //grabbing type which is displayed in an array
        var dualType = ''; //creating a variable to store type data
    
        // forEach loops over the array and adds each type (which is stored in another object) to the dualType variable
        typeOne.forEach((element) => { 
            dualType += element.type.name + ' ';
        })
    
        
        div = document.getElementById('types');
    
        div.innerHTML = pkmnName + ' ' + dualType
    
        
    
        // Styling type colors
        var Obj = {
            water: "<span style='color:aqua'>water</span>",
            fire: "<span style='color:red'>fire</span>",
            grass: "<span style='color:green'>grass</span>",
        };
    
        var divInner = div.innerHTML; 
        var res = divInner.replace(/water|fire|grass/gi, function(matched){
            return Obj[matched];})
        div.innerHTML = res
    }

    catch(err) {
        div.innerHTML = 'thata not a pokemo'
    }
    
}