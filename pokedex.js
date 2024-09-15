const url="https://pokeapi.co/api/v2/pokemon/";
const contenedor= document.getElementById('pokemon-container');


const colores={
             'grass': '#9eff4d', 
             'fire': '#ffbc4d',
             'rock': '#ada9a4',
             'water': '#9adfe1',
             'bug': '#34c639',
             'normal': '#f4f1aa',
             'psychic': '#b7b209',
             'electric': '#fff700',
             'fighting': '#f14e08',
             'fairy': '#f4aaf0',
             'poison': '#97008c',
             'ghost': '#cf66c7',
             'ice': '#329ed0',
             'dragon': '#6793a8',
             'dark': '#4d176c',
             'ground': '#fffd91',
};

const obtenerPokemon= async (numeropokemon)=>{
    let respuesta= await fetch(url+numeropokemon+"/");
    let datos= await respuesta.json();
    console.log(datos);
    crearPokemon(datos);
    
};

const generarNumeroAleatorio= (valorMaximo) =>{
    let numero= Math.floor(Math.random()*valorMaximo);
    return numero;
};

const crearPokemon= (pokemon) => {
    let tipo= pokemon.types[0].type.name;
    let  div = document.createElement('div');
    let color= colores[tipo];
    let template=`
        <div class='flip-card'>
        <div class='flip-card-inner' style='background-color:${color};'>
           <div class='flip-card-front'>
           <img src="${pokemon.sprites.other.showdown.front_default}" alt="${pokemon.name}">
           <h3 class= "name">${pokemon.name}</h3>
           <small class="type">tipo: <span>${pokemon.types[0].type.name}</span></small>
           </div>
           <div class="flip-card-back">
           <h3>${pokemon.name}</h3>

           <p>altura: ${pokemon.height /10}m</p>
           <p>peso: ${pokemon.weight /10} kg</p>
           </div>
       </div>
       </div>`;

    div.innerHTML=template; 
    contenedor.innerHTML = "";
    contenedor.appendChild(div);

};

// for(let i=1;i<=20;i++)
{
    // obtenerPokemon(i);
}

function buscadorpokemon(){
  
    var id_pokemon= document.getElementById("name_pokemon").value;
    console.log(id_pokemon);
    
    if (id_pokemon == ""){
        contenedor.innerHTML="";
        // for (let i=1;i<=20;i++)
        {
            obtenerPokemon(i);

        }
    } else {
       
        obtenerPokemon(id_pokemon);
    }
};
