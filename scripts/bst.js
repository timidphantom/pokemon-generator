// Class which handles Pokemon's base stat totals and outputs the results into the bootstrap progress bars on the webpage.

const hp = $("#hp")
const attack = $("#attack")
const defense = $("#defense")
const spAtk = $("#spatk")
const spDef = $("#spdef")
const speed = $("#speed")
const role = $("#pokemon-role")
const BST = $("#stat-total")

export class BaseStatTotal {
    constructor(pkmn) {
        this.hp = pkmn.stats[0].base_stat
        this.attack = pkmn.stats[1].base_stat
        this.defense = pkmn.stats[2].base_stat
        this.spAtk = pkmn.stats[3].base_stat
        this.spDef = pkmn.stats[4].base_stat
        this.speed = pkmn.stats[5].base_stat
        this.displayBaseStats();
        this.pokemonRole();
    }
    
    displayBaseStats() {
        const hpPercent = this.hp / 255 * 100;
        const attackPercent = this.attack / 255 * 100;
        const defensePercent = this.defense / 255 * 100;
        const spAtkPercent = this.spAtk / 255 * 100;
        const spDefPercent = this.spDef / 255 * 100;
        const speedPercent = this.speed / 255 * 100;

        hp.attr('style', `width: ${hpPercent}%`);
        attack.attr('style', `width: ${attackPercent}%`);
        defense.attr('style', `width: ${defensePercent}%`);
        spAtk.attr('style', `width: ${spAtkPercent}%`);
        spDef.attr('style', `width: ${spDefPercent}%`);
        speed.attr('style', `width: ${speedPercent}%`);

        hp.text(`HP: ${this.hp}`)
        attack.text(`Attack: ${this.attack}`)
        defense.text(`Defense: ${this.defense}`)
        spAtk.text(`Sp. Atk: ${this.spAtk}`)
        spDef.text(`Sp. Def: ${this.spDef}`)
        speed.text(`Speed: ${this.speed}`)

    }

    pokemonRole() { // displays pokemon's role based on their statistics

        if(this.attack == this.defense || this.attack == this.spDef || this.spAtk == this.defense || this.spAtk == this.spDef){
            role.text('an all-rounder')
        }

        if(this.spDef == this.defense && this.spDef > this.attack && this.spDef > this.spAtk){
            role.text('a general defender.')
        }

        if(this.spAtk == this.attack && this.spAtk > this.defense && this.spAtk > this.spDef){
            role.text('a general attacker.')
        }

        if(this.attack > this.spAtk && this.attack > this.spDef && this.attack > this.defense){
            role.text('a physical attacker.')
        }

        if(this.spAtk > this.attack && this.spAtk > this.spDef && this.spAtk > this.defense){
            role.text('a special attacker.')
        }

        if(this.defense > this.attack && this.defense > this.spDef && this.defense > this.spAtk){
            role.text('a physical defender.')
        }

        if(this.spDef > this.attack && this.spDef > this.defense && this.spDef > this.spAtk){
            role.text('a special defender.')
        }

        const total = this.hp + this.attack + this.defense + this.spAtk + this.spDef + this.speed
        BST.text(`Base stat total: ${total}`)

    }


}