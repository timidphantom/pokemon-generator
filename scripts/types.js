const mainType = $("#type-1");
const secondaryType = $("#type-2");
const image = $("#pkmn-image");
const name = $("#pkmn-name")

export class Types {
    constructor(pkmn) {
        this.name = pkmn.name;
        this.typeOne = pkmn.types[0].type.name;
        this.typeTwo = pkmn.types[1];
        this.secondType = ''; // similar to the secondary/hidden abilities in abilities.js -- not all pokemon have second types so I need to make a function to account for this
        this.image = pkmn.sprites.other.home.front_default;
        this.findType();
        this.showImage();
        this.colorTypes();
        this.showName();
        }
        
        showName(){ //simple function to display name, additionally removing hyphens from all pokemon names except certain ones
            if (this.name == "porygon-2" || this.name == "ho-oh"  || this.name == "porygon-z" || this.name == "jangmo-o" || this.name == "hakamo-o" || this.name == "kommo-o"){
                name.text(this.name)
            }
            else{
                this.name = this.name.replace(/-/g, ' ');
                name.text(this.name)
            }
            
        }
    
        findType(){

            mainType.text(this.typeOne)

            if(this.typeTwo == null){  
                this.secondType = "null";
                secondaryType.css({
                    'display':'none',
                })
            }
            else{
                this.secondType = this.typeTwo.type.name; 
                secondaryType.text(this.secondType);
                secondaryType.css({
                    'display':'inline-block',
                })
        }
        }

        colorTypes(){ // absolutely gargantuan function contains switch statements to color the type div according to the mon's type
            switch(this.typeOne){
                case 'normal':
                 mainType.css({
                    'background-color':'#ABAB7D',
                 })  
                 break;
                 case 'grass':
                    mainType.css({
                       'background-color':'#8CD550',
                    })  
                break;
                 case 'fire':
                    mainType.css({
                       'background-color':'#FB5643',
                    })  
                break;
                 case 'water':
                    mainType.css({
                       'background-color':'#55AEFE',
                    })  
                break;
                 case 'fighting':
                    mainType.css({
                       'background-color':'#A55744',
                    })  
                break;
                 case 'flying':
                    mainType.css({
                       'background-color':'#7BA2FE',
                    })  
                break;
                 case 'poison':
                    mainType.css({
                       'background-color':'#A95EA1',
                    })  
                break;
                 case 'ground':
                    mainType.css({
                       'background-color':'#DDBF65',
                    })  
                break;
                 case 'rock':
                    mainType.css({
                       'background-color':'#CAB973',
                    })  
                break;
                 case 'bug':
                    mainType.css({
                       'background-color':'#C3D220',
                    })  
                break;
                 case 'psychic':
                    mainType.css({
                       'background-color':'#F965B5',
                    })  
                break;
                 case 'ghost':
                    mainType.css({
                       'background-color':'#7975D5',
                    })  
                break;
                 case 'electric':
                    mainType.css({
                       'background-color':'#FCE53D',
                    })  
                break;
                 case 'ice':
                    mainType.css({
                       'background-color':'#95F1FE',
                    })  
                break;
                 case 'dragon':
                    mainType.css({
                       'background-color':'#826FE7',
                    })  
                break;
                 case 'dark':
                    mainType.css({
                       'background-color':'#8F6A57',
                    })  
                break;
                 case 'steel':
                    mainType.css({
                       'background-color':'#C3C1D7',
                    })  
                break;
                 case 'fairy':
                    mainType.css({
                       'background-color':'#FAADFF',
                    })  
                break;
            }

            switch(this.secondType){
                case 'normal':
                 secondaryType.css({
                    'background-color':'#ABAB7D',
                 })  
                 break;
                 case 'grass':
                    secondaryType.css({
                       'background-color':'#8CD550',
                    })  
                break;
                 case 'fire':
                    secondaryType.css({
                       'background-color':'#FB5643',
                    })  
                break;
                 case 'water':
                    secondaryType.css({
                       'background-color':'#55AEFE',
                    })  
                break;
                 case 'fighting':
                    secondaryType.css({
                       'background-color':'#A55744',
                    })  
                break;
                 case 'flying':
                    secondaryType.css({
                       'background-color':'#7BA2FE',
                    })  
                break;
                 case 'poison':
                    secondaryType.css({
                       'background-color':'#A95EA1',
                    })  
                break;
                 case 'ground':
                    secondaryType.css({
                       'background-color':'#DDBF65',
                    })  
                break;
                 case 'rock':
                    secondaryType.css({
                       'background-color':'#CAB973',
                    })  
                break;
                 case 'bug':
                    secondaryType.css({
                       'background-color':'#C3D220',
                    })  
                break;
                 case 'psychic':
                    secondaryType.css({
                       'background-color':'#F965B5',
                    })  
                break;
                 case 'ghost':
                    secondaryType.css({
                       'background-color':'#7975D5',
                    })  
                break;
                 case 'electric':
                    secondaryType.css({
                       'background-color':'#FCE53D',
                    })  
                break;
                 case 'ice':
                    secondaryType.css({
                       'background-color':'#95F1FE',
                    })  
                break;
                 case 'dragon':
                    secondaryType.css({
                       'background-color':'#826FE7',
                    })  
                break;
                 case 'dark':
                    secondaryType.css({
                       'background-color':'#8F6A57',
                    })  
                break;
                 case 'steel':
                    secondaryType.css({
                       'background-color':'#C3C1D7',
                    })  
                break;
                 case 'fairy':
                    secondaryType.css({
                       'background-color':'#FAADFF',
                    })  
                break;
            }
        }

        showImage(){
            image.attr("src", this.image);
        }
}