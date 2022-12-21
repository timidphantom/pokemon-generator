
import {BaseStatTotal} from './bst.js';
import {Abilities} from './abilities.js';
import {Types} from './types.js';

// Declaring variables
const searchBtn = $("#search-button");
const randomBtn = $("#random-button")
const searchInput = $("#search-box");

const pokeApi = "https://pokeapi.co/api/v2/pokemon"; // fetching API

function RNG() { //randomizer
    return Math.floor(Math.random() * 905)        
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

        // Declaring imported classes - I have to do it in this function so that I can pass in the pkmn.
        let bst = new BaseStatTotal(pkmn);
        let abilities = new Abilities(pkmn);
        let types = new Types(pkmn);

        abilities.checkAbilities();
    }

    catch(err) {
        console.log(err)
    }
    
}



