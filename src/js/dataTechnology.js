let dataTechnologyPort = [];

fetch('../js/data.json')
    .then(response => response.json())
    .then(technology =>{
        dataTechnologyPort = technology.technology;
        initializeContent();
    })

function initializeContent(){
    updateTechnologyContent(dataTechnologyPort[0]);
}

function updateTechnologyContent(technology){
    const viewContent = document.querySelector(".content__allInfoTechnologySpacePort");

    const tplContentTecnology = `
    <section class="allInfoTechnologySpacePort">
        <h2 class="titlesSections">
          <span class="styleNumberNavbar bold grayColor">03</span>
          SPACE LAUNCH 101
        </h2>

        <figure class="descriptionTechnologySpacePort">
          <article class="introductionDescription">
            <section class="content--navbarControlTechnology">
              <ul class="navbar">
                ${controlTecnologyGeneratorHTML(technology)}
              </ul>
            </section>

            <section class="descriptionTechnology">
              <span class="nameTechnologyPort">The terminology...</span>
      
              <span class="nameVehicleTechnology">${technology.name}</span>
      
              <p class="txt">${technology.description}</p>
            </section>
          </article>

          <article class="imageTechnologySpacePort"><img class="imageVehicle" src="${technology.images.portrait}" alt="${technology.name}"></article>
        </figure>
      </section>
    `;

    viewContent.innerHTML = tplContentTecnology;

    assignClickEvents();
}

function controlTecnologyGeneratorHTML(currentTechnology) {
    return dataTechnologyPort.map((technology) => `
        <li class="controlsTechnology ${technology.number === currentTechnology.number ? 'activeControlTechnology' : ''}" data-number="${technology.number}">${technology.number}</li>
    `).join('');
}

function assignClickEvents(){
    const controlsTechnology = document.querySelectorAll(".controlsTechnology");

    controlsTechnology.forEach((control) =>{
        control.addEventListener("click", () =>{
            controlsTechnology.forEach((item) => item.classList.remove("activeControlTechnology"));
            control.classList.add("activeControlTechnology");
            
            const selectedTechnologyPort = dataTechnologyPort.find(tech => tech.number === control.getAttribute("data-number"));
            if(selectedTechnologyPort){updateTechnologyContent(selectedTechnologyPort);}
        })
    })
}