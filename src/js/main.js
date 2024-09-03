document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.linksPageNavbar');
  
    // Cargar el path guardado en localStorage
    const savedPath = localStorage.getItem('activeLink');
  
    links.forEach(link => {
      const linkPath = link.getAttribute('href').split("/").pop(); // Obtiene solo el nombre del archivo
      
      // Primero, eliminar la clase 'sectionActive' de todos los elementos
      link.querySelector('.itms-navbar').classList.remove('sectionActive');
  
      // Aplica la clase si el path coincide con lo guardado en localStorage
      if (linkPath === savedPath) {
        link.querySelector('.itms-navbar').classList.add('sectionActive');
      }
  
      // Escucha el clic en el enlace y guarda el path en localStorage
      link.addEventListener('click', function() {
        localStorage.setItem('activeLink', linkPath);
      });
    });
  });
  