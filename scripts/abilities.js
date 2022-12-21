const abilityOne = $("#ability-1");
const abilityTwo = $("#ability-2");
const hiddenAbility = $("#hidden-ability");

export class Abilities {
    constructor(pkmn) {
        this.abilityOne = pkmn.abilities[0];
        this.abilityTwo = pkmn.abilities[1];
        this.hiddenAbility = pkmn.abilities[2];

        this.firstAbility = this.abilityOne.ability.name.replace(/-/g, ' '); // This appears in the if-else statements below; replaces the - in the ability name with a space.
        this.secondAbility = '';  // need to make this empty so that if there is no second or hidden ability, I can apply an if else statement to handle it.
        this.thirdAbility = '';
        
        this.checkAbilities();
    }
    
    checkAbilities(){ //function replaces text in website with the ability names
        abilityOne.text(this.firstAbility);

        /* I have two if/else statements below. This is because some Pokemon do not have secondary or hidden abilities, in which case the API does not display anything. I need to account for the fact that some abilities will display as undefined, so I have an if/else statement to handle this. Additionally, I applied the code which replaces hyphens with spaces. */
        if(this.abilityTwo == null){  
            this.secondAbility = "null";
            abilityTwo.css({
                'display':'none',
            })
        }
        else{
            this.secondAbility = this.abilityTwo.ability.name; 
            this.secondAbility = this.secondAbility.replace(/-/g, ' ');
            abilityTwo.text(this.secondAbility);
            abilityTwo.css({
                'display':'inline-block',
            })

            
    }

        if(this.hiddenAbility == null){
            this.thirdAbility = "null";
            hiddenAbility.css({
                'display':'none',
            })
        }
        else{
            this.thirdAbility = this.hiddenAbility.ability.name;
            this.thirdAbility = this.thirdAbility.replace(/-/g, ' ');
            hiddenAbility.text(this.thirdAbility);
            hiddenAbility.css({
                'display':'inline-block',
            })
            
        }
               

    }


}