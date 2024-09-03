let crewData = [];

fetch('../js/data.json')
    .then(response => response.json())
    .then(data =>{
        crewData = data.crew;
        initializeDataCrew()
    });

function initializeDataCrew(){
    updateDataCrew(crewData[0]);
}

function updateDataCrew(crew){
    const contentDataCrew = document.querySelector(".content__allInfoCrew");

    const tpl = `
    <section class="content__infoCrew">
        <h2 class="titlesSections">
          <span class="styleNumberNavbar bold grayColor">02</span>
          MEET YOUR CREW
        </h2>

        <section class="bx-introductionCrew">
          <span class="positionCrew">${crew.role}</span>

          <span class="namePerson">${crew.name}</span>

          <p class="txt">${crew.bio}</p>
        </section>

        <ul class="navbarCrews">
          ${navbarCrewHTML(crew)}
        </ul>
      </section>

      <section class="bx-imagesCrews">
        <img src="${crew.images.webp}" alt="${crew.name}" class="imagesCrews">
      </section>
    `;
    contentDataCrew.innerHTML = tpl;
    assignClickEvents();
}

function navbarCrewHTML(currentCrew){
    return crewData.map((crew) => `
        <li class="itmsCrews ${crew.name === currentCrew.name ? 'activeNavbarCrew' : ''}" data-name="${crew.name}"></li>
    `).join('');
}

function assignClickEvents(){
    const itmsCrews = document.querySelectorAll(".itmsCrews");

    itmsCrews.forEach((element) =>{
        element.addEventListener("click", () =>{
            itmsCrews.forEach((item) => item.classList.remove("activeNavbarCrew"));
            element.classList.add("activeNavbarCrew");

            const selectedCrew = crewData.find(crew => crew.name == element.getAttribute("data-name"));
            if(selectedCrew){
                updateDataCrew(selectedCrew);
            }
        })
    })
}