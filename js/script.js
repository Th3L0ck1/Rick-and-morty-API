// URL da API de personagens do Rick and Morty
const API_URL = "https://rickandmortyapi.com/api/character";

// Referência ao container onde os cards serão inseridos
const cardsContainer = document.getElementById("cards-container");

// Função para buscar os personagens na API
function buscarPersonagens() {
    fetch(API_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // data.results contém o array de personagens
            criarCards(data.results);
        })
        .catch(function (erro) {
            console.error("Erro ao buscar personagens:", erro);
            cardsContainer.innerHTML = "<p>Erro ao carregar os personagens. Tente novamente.</p>";
        });
}

// Função para criar os cards dinamicamente
function criarCards(personagens) {
    // Percorre cada personagem do array
    for (var i = 0; i < personagens.length; i++) {
        var personagem = personagens[i];

        // Cria o elemento do card
        var card = document.createElement("div");
        card.classList.add("card");

        // Cria a imagem do personagem
        var imagem = document.createElement("img");
        imagem.src = personagem.image;
        imagem.alt = personagem.name;

        // Cria a div com as informações
        var cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        // Cria o nome do personagem
        var nome = document.createElement("h3");
        nome.textContent = personagem.name;

        // Cria o status com o indicador colorido
        var status = document.createElement("p");
        status.classList.add("status");

        var statusIcon = document.createElement("span");
        statusIcon.classList.add("status-icon");

        // Define a cor do indicador conforme o status
        if (personagem.status === "Alive") {
            statusIcon.classList.add("status-alive");
        } else if (personagem.status === "Dead") {
            statusIcon.classList.add("status-dead");
        } else {
            statusIcon.classList.add("status-unknown");
        }

        status.appendChild(statusIcon);
        status.appendChild(document.createTextNode(personagem.status + " - " + personagem.species));

        // Cria a localização
        var localizacao = document.createElement("p");
        localizacao.textContent = "Local: " + personagem.location.name;

        // Monta o card: adiciona os elementos filhos
        cardInfo.appendChild(nome);
        cardInfo.appendChild(status);
        cardInfo.appendChild(localizacao);

        card.appendChild(imagem);
        card.appendChild(cardInfo);

        // Adiciona o card ao container na página
        cardsContainer.appendChild(card);
    }
}

// Chama a função quando a página carrega
buscarPersonagens();
