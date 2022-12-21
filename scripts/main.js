
import {BaseStatTotal} from './bst.js'; //class containing information on each Pokemon's base stats (i.e. their strengths and weaknesses)
import {Abilities} from './abilities.js'; //class containing information on each Pokemon's in-game abilities
import {Types} from './types.js'; // class containing general Pokemon information -- their type, name, and image which displays
import {Error} from './error.js'; // class containing how to handle errors, used in the try/catch below

// Declaring variables
const searchBtn = $("#search-button");
const randomBtn = $("#random-button")
const searchInput = $("#search-box");

// Begins here

function RNG() { //randomizer
    return Math.floor(Math.random() * 905)        
} 

// Allowing you to search for Pokemon name
searchBtn.on('click', (event)=>{
    loadPkmn(searchInput.val().toLowerCase());

})

// Randomizes a Pokemon
randomBtn.on('click', (event)=>{
    loadPkmn(RNG());
})

async function loadPkmn(query) { //query parameter searches a pokemon
    try {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        const pkmn = await result.json(); 

        // Declaring imported classes - I have to do it in this function so that I can pass in the pokemon itself
        let bst = new BaseStatTotal(pkmn);
        let abilities = new Abilities(pkmn);
        let types = new Types(pkmn);

        abilities.checkAbilities();
        types.findType();
        types.colorTypes();
        bst.displayBaseStats();
        bst.pokemonRole();
    }

    catch(err) {
        let error = new Error();
        error.handleError();
    
}}
