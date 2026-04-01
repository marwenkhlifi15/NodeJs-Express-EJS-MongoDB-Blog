document.addEventListener('DOMContentLoaded', function () {

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    // Vérifie que les éléments principaux existent
    if (searchBar && searchInput && allButtons.length > 0) {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click', function () {
                searchBar.style.visibility = 'visible';
                searchBar.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
                searchInput.focus();
            });
        }
    }

    // Vérifie que le bouton close existe avant d'ajouter l'événement
    if (searchClose && searchBar) {
        searchClose.addEventListener('click', function () {
            searchBar.style.visibility = 'hidden';
            searchBar.classList.remove('open');
            this.setAttribute('aria-expanded', 'false');
        });
    }

});