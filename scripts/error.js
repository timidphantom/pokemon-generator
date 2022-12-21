const abilityOne = $("#ability-1");
const abilityTwo = $("#ability-2");
const hiddenAbility = $("#hidden-ability");
const mainType = $("#type-1");
const secondaryType = $("#type-2");
const image = $("#pkmn-image");
const name = $("#pkmn-name")
const hp = $("#hp")
const attack = $("#attack")
const defense = $("#defense")
const spAtk = $("#spatk")
const spDef = $("#spdef")
const speed = $("#speed")
const statName = $("#pokemon-name")
const role = $("#pokemon-role")
const error = $("#error")

export class Error {
    constructor(){
        this.handleError();
    }

    handleError(){
        // change name 
        name.css({
            'text-transform':'none',
        })
        name.text("Oops! That's not a Pokémon!")

        //change image
        image.attr('src', 'img/missingno.png')

        // change bst
        hp.attr('style', `width: 100%`);
        attack.attr('style', `width: 100%`);
        defense.attr('style', `width: 100%`);
        spAtk.attr('style', `width: 100%`);
        spDef.attr('style', `width: 100%`);
        speed.attr('style', `width: 100%`);
        hp.text(`HP`)
        attack.text(`Attack`)
        defense.text(`Defense`)
        spAtk.text(`Sp. Atk`)
        spDef.text(`Sp. Def`)
        speed.text(`Speed`)
        statName.text(`MissingNo.`)
        role.text('not a Pokémon!')

        // change type
        mainType.text('???')
        mainType.css({
            'background':'#68A090'
        })
        secondaryType.css({
            'display':'none'
        })

        // change ability
        abilityOne.text("Ability One")
        abilityTwo.text("Ability Two")
        hiddenAbility.text("Hidden Ability")
        abilityTwo.css({
            'display':'inline-block',
        })
        hiddenAbility.css({
            'display':'inline-block',
        })

        //disclaimer 
        error.text("Please check that you've spelled the Pokémon's name correctly. Pokémon with multiple forms or symbols in their name sometimes don't display correctly, in which case, try search its Pokédex number instead. This application doesn't have Pokémon exclusive to Hisui or Paldea.")
        error.css({
            'display':'block',
            'text-align':'center',
            'font-size':'0.9rem',
            'opacity':'0.8',
            'padding':'0 50px',
            'font-weight':'normal',
        })

    }
}
