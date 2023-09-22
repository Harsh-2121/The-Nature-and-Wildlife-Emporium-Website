const images = document.querySelectorAll('.section img');
    images.forEach(image => {
      image.addEventListener('click', function(event) {
        const lightboxContainer = document.createElement('div');
        lightboxContainer.className = 'lightbox-container';

        const lightbox = document.createElement('img');
        lightbox.className = 'lightbox';
        lightbox.src = this.src;
        lightbox.alt = this.alt;

        lightboxContainer.appendChild(lightbox);
        document.body.appendChild(lightboxContainer);

        lightboxContainer.addEventListener('click', function() {
          document.body.removeChild(lightboxContainer);
        });
      });
    });
