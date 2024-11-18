document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner toutes les images sur la page
    let images = document.querySelectorAll('img');

    // Ajouter un écouteur d'événement de clic à chaque image
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Action à effectuer lors du clic sur l'image
            // alert('Image cliquée : vous avez choisie l\'Etalon ' + image.src);

            // redirigé vers la page de l'etalon en fonction de l'image cliquée
            if (image.src == 'http://127.0.0.1:5500/assets/images/etalon1.webp') {
                window.location.href = 'etalon1.html';
            } else if (image.src == 'http://127.0.0.1:5500/assets/images/etalon2.webp') {
                window.location.href = 'etalon2.html';
            }
            else if (image.src == 'http://127.0.0.1:5500/assets/images/etalon3.webp') {
                {
                    window.location.href = 'etalon3.html';
                }
            }

        });
    });
});