document.addEventListener("DOMContentLoaded", () => {
    let characters = [];

    // Cargar el archivo JSON con los personajes
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            characters = data;
            shuffleArray(characters);  // Mezclar el array de personajes
            displayCharacters(characters);  // Mostrar todos los personajes al cargar la página
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    // Función para mostrar los personajes en tarjetas (cards)
    function displayCharacters(characters) {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';  // Limpiar cualquier contenido previo

        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${character.image_url}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p><i class="fas fa-user"></i> <strong>Portrayed by:</strong> ${character.portrayed}</p>
                <p><i class="fas fa-id-card"></i> <strong>Full Name:</strong> ${character.full_name}</p>
                <p><i class="fas fa-birthday-cake"></i> <strong>Birth Date:</strong> ${character.birth_date}</p>
                <p><i class="fas fa-briefcase"></i> <strong>Occupation:</strong> ${character.occupation.join(', ')}</p>
                <p><i class="fas fa-tv"></i> <strong>Episodes Count:</strong> ${character.episodes_count}</p>
            `;

            cardContainer.appendChild(card);
        });
    }

    // Función para mezclar un array (algoritmo de Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
