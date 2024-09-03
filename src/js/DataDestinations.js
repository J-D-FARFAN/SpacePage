const content = document.querySelector(".content__allDestinations");

// Almacena los datos en una variable global
let destinationsData = [];

// Carga los datos del JSON
fetch('../js/data.json')
    .then(response => response.json())
    .then(data => {
        destinationsData = data.destinations; // Guarda los destinos
        // Inicializa el contenido con el primer destino (por ejemplo, "Moon")
        initializeContent();
    });

// Función para inicializar el contenido
function initializeContent() {
    // Inicializa el contenido con el primer destino
    updateDestinationContent(destinationsData[0]);
}

// Función para actualizar el contenido de la página
function updateDestinationContent(destination) {
    const plt = `
        <section class="bx-destinations">
        <h2 class="titlesSections">
          <span class="styleNumberNavbar bold grayColor">01</span>
          Pick your destination
        </h2>

        <figure class="destinationInfo">
          <section class="bx-planet">
            <img class="imagesPlanet" src="${destination.images.webp}" alt="${destination.name}">
          </section>

          <section class="descriptionPlanet">
            <nav class="navbarPlanets">
              <ul class="navbar">
                ${navbarPlanetsHTML(destination)}
              </ul>
            </nav>

            <span class="titlePlanet">${destination.name}</span>

            <p class="txt">
              ${destination.description}
            </p>

            <hr />

            <section class="bx-extraInfo">
              <div class="contentDistance-Travel">
                <label class="titleDistance-Travel">Avg. distance</label>
                <span class="km stylesGeneralesPlanesKmDays">${destination.distance}</span>
              </div>
              <div class="contentDistance-Travel">
                <label class="titleDistance-Travel">Est. travel time</label>
                <span class="days stylesGeneralesPlanesKmDays">${destination.travel}</span>
              </div>
            </section>
          </section>
        </figure>
      </section>
    `;
    content.innerHTML = plt;

    // Reasigna el evento de clic después de actualizar el contenido
    assignClickEvents();
}

// Función para generar el HTML de la barra de navegación de los planetas
function navbarPlanetsHTML(currentDestination) {
    return destinationsData.map((destination) => `
        <li class="itmsNavbarPlanets ${destination.name === currentDestination.name ? 'sectionActive' : ''}" data-name="${destination.name}">${destination.name}</li>
    `).join('');
}

// Función para asignar eventos de clic a los elementos de la barra de navegación
function assignClickEvents() {
    const navbarItems = document.querySelectorAll(".itmsNavbarPlanets");

    navbarItems.forEach(element => {
        element.addEventListener("click", () => {
            // Remueve la clase active de todos los elementos
            navbarItems.forEach(item => item.classList.remove("sectionActive"));

            // Añade la clase active al elemento seleccionado
            element.classList.add("sectionActive");

            // Encuentra el destino correspondiente
            const selectedDestination = destinationsData.find(dest => dest.name === element.getAttribute("data-name"));

            // Actualiza el contenido con el destino seleccionado
            if (selectedDestination) {
                updateDestinationContent(selectedDestination);
            }
        });
    });
}
