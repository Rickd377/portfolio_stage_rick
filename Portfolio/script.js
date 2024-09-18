setTimeout(function () {
    document.getElementById("scroll").style.display = "none";
}, 5000);

// JavaScript om secties te tonen/te verbergen
const navLinks = document.querySelectorAll('header div a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Verwijder 'active' class van alle links
        navLinks.forEach(link => link.classList.remove('active'));

        // Voeg 'active' class toe aan de aangeklikte link
        e.target.classList.add('active');

        // Verberg alle pagina's
        pages.forEach(page => page.style.display = 'none');

        // Toon de doelpagina
        const targetPage = e.target.getAttribute('data-target');
        document.getElementById(targetPage).style.display = 'block';
    });
});