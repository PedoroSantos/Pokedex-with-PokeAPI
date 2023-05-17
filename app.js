const pokemon = document.getElementById("search");
const names = document.getElementById("poke_name");
const img = document.getElementById("poke_pic");
const id = document.getElementById("poke_id");
const weight = document.getElementById("poke_weight");
const height = document.getElementById("poke_height");

function search() {
  if (!pokemon.value) {
    names.innerHTML = "";
    img.src = "";
    id.innerHTML = "";
    weight.innerHTML = "";
    height.innerHTML = ""
    document.getElementsByClassName('message')[0].classList.remove('hide');
    return;
  }


  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    
    .then((data) => {
      console.log(data);

      names.innerHTML = data["name"];
      img.src = data["sprites"]["front_default"];
      id.innerHTML = data["id"];
      weight.innerHTML = "Weight:" + data["weight"];
      height.innerHTML = "Height:" + data["height"];
      document.getElementsByClassName('message')[0].classList.add('hide');
      
    })

    .catch((error)=>{
      console.log(`Pokemon not found`);
    });
}