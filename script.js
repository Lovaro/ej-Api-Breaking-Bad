const cards = document.getElementById("cards");
const search = document.getElementById("search");
const modal = document.getElementById("openModal");
const testD = document.getElementById("test");

testD.addEventListener("click", () => {
  modal.currentTarget = "_self";
});
const renderCharacters = (data) => {
  const personajes = data.reduce((html, personaje) => {
    return (
      html +
      `<div class="card" style="width: 18rem;">
            <img src="${personaje.img}"
                class="card-img-top" id="img" alt="Pamela" />
            <div class="card-body" id="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">
                <ul>
                    <li>cumpleaños: ${personaje.birthday}</li>
                    <li>status: ${personaje.status}</li>
                    <li>apodo: ${personaje.nickname}</li>
                    <li>temporada: ${personaje.appearance}</li>
                </ul>
                </p>
            </div>
            
        </div>`
    );
  }, "");
  cards.innerHTML = personajes;
};

const getCharacters = () => {
  fetch(`https://breakingbadapi.com/api/characters`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCharacters(data);
    });
};

const searchCharacters = (name) => {
  fetch(`https://breakingbadapi.com/api/characters/?name=${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCharacters(data);
    });
};

search.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    searchCharacters(search.value);
  }
});

const modalDead = (name) => {
  fetch(`https://breakingbadapi.com/api/death-count/?name=${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCharacters(data);
    });
};
cards.addEventListener("click", (e) => {
  fetch;
});

getCharacters();
