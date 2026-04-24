const photos = [
    { src: 'Imagenes/Primera salida.jpeg', caption: 'Nuestra primera aventura juntos', date: '2026' },
    { src: 'Imagenes/Imagen junsos.jpeg', caption: 'Siempre conmigo en las buenas y malas', date: '2026' },
    { src: 'Imagenes/Imagen en grupo.jpeg', caption: 'Luchando lado a lado como verdaderos Toman', date: '2026' },
    { src: 'Imagenes/Selfi.jpeg', caption: 'Por ti atravesaría el tiempo si fuera necesario', date: '2026' },
    { src: 'Imagenes/Cuadros.jpeg', caption: 'Sin importar qué, siempre estaré ahí', date: '2026' },
    { src: 'Imagenes/Primera carta.jpeg', caption: 'Hasta el final, como los capitanes de Toman', date: '2026' },
    { src: 'Imagenes/Favorita.jpeg', caption: 'Mi persona especial en este mundo', date: '2026' },
    { src: 'Imagenes/Salida casa.jpeg', caption: 'Juntos escribiendo nuestra historia', date: '2026' },
    { src: 'Imagenes/Mi habraso favorito.jpeg', caption: 'Siempre hay un refugio en un abrazo', date: '2026' },
    { src: 'Imagenes/habraso lengua.jpeg', caption: 'Contigo cada momento es especial', date: '2026' },
    { src: 'Imagenes/dedos.jpeg', caption: 'Mi mejor compañera de aventuras', date: '2026' },
    { src: 'Imagenes/Fondo ojos.jpeg', caption: 'Por muchos más años de amistad', date: '2026' },
    { src: 'Imagenes/tikets.jpeg', caption: 'Los mejores momentos son contigo', date: '2026' },
    { src: 'Imagenes/rockstar.jpeg', caption: 'Contigo todo es más divertido', date: '2026' },
    { src: 'Imagenes/Algodon.jpeg', caption: 'Mi persona favorita del mundo', date: '2026' },
    { src: 'Imagenes/llaveros.jpeg', caption: 'Por nuestra amistad infinita', date: '2026' },
    { src: 'Imagenes/gatos parados.jpeg', caption: 'Juntos somos imparables', date: '2026' },
    { src: 'Imagenes/tiro.jpeg', caption: 'Mis recuerdos favoritos tienen tu cara', date: '2026' },
    { src: 'Imagenes/lengua.jpeg', caption: 'Eres la mejor persona que conozco', date: '2026' },
    { src: 'Imagenes/gatos.jpeg', caption: 'Gracias por existir', date: '2026' },
    { src: 'Imagenes/Corazones.jpeg', caption: 'Sabiendo que contigo todo es más fácil', date: '2026' },
    { src: 'Imagenes/Llamadita.jpeg', caption: 'Eres mi persona favorita para todo', date: '2026' },
    { src: 'Imagenes/Minecraft.jpeg', caption: 'A tu lado hasta el infinito', date: '2026' },
    { src: 'Imagenes/mine.jpeg', caption: 'Siempre juntos en cada aventura', date: '2026' },
    { src: 'Imagenes/Espuma.jpeg', caption: 'Somos esos que hacen especial lo simple.', date: '2026' },
    { src: 'Imagenes/Mia.jpeg', caption: 'Somos diferentes…', date: '2026' },
    { src: 'Imagenes/Ella.jpeg', caption: '…pero inseparables.', date: '2026' },
];

document.addEventListener('DOMContentLoaded', function() {
    // Create fire particles
    const fireContainer = document.getElementById('fireParticles');
    if (fireContainer) {
        for (let i = 0; i < 15; i++) {
            const flame = document.createElement('div');
            flame.className = 'flame';
            flame.style.left = Math.random() * 100 + '%';
            flame.style.top = Math.random() * 100 + '%';
            flame.style.animationDelay = Math.random() * 2 + 's';
            flame.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
            fireContainer.appendChild(flame);
        }
    }

    // Create sakura particles
    const sakuraContainer = document.getElementById('sakuraParticles');
    const sakuraChars = ['🌸', '✿', '❀'];
    if (sakuraContainer) {
        for (let i = 0; i < 20; i++) {
            const petal = document.createElement('div');
            petal.className = 'sakura';
            petal.textContent = sakuraChars[Math.floor(Math.random() * sakuraChars.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDelay = Math.random() * 8 + 's';
            petal.style.animationDuration = (6 + Math.random() * 4) + 's';
            petal.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            sakuraContainer.appendChild(petal);
        }
    }

    window.openLightbox = function(index) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        
        if (lightbox && lightboxImg && photos[index]) {
            lightboxImg.src = photos[index].src;
            if (lightboxCaption) {
                lightboxCaption.textContent = photos[index].caption;
            }
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function(event) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close') || event.target.classList.contains('lightbox-content'))) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    window.addPhotos = function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const newPhoto = {
                            src: e.target.result,
                            caption: 'Nuevo recuerdo especial',
                            date: new Date().getFullYear().toString()
                        };
                        photos.push(newPhoto);
                        createPhotoElement(newPhoto, photos.length - 1);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
    };

    function createPhotoElement(photo, index) {
        const grid = document.getElementById('photoGrid');
        if (grid) {
            const frame = document.createElement('div');
            frame.className = 'photo-frame';
            frame.style.setProperty('--rotation', `${(Math.random() - 0.5) * 8}deg`);
            frame.style.animationDelay = `${index * 0.1}s`;
            frame.onclick = () => openLightbox(index);
            frame.innerHTML = `
                <div class="frame-decoration"></div>
                <div class="frame-inner">
                    <img src="${photo.src}" alt="Foto ${index + 1}">
                </div>
                <div class="photo-caption">${photo.caption}</div>
                <div class="photo-date">${photo.date}</div>
            `;
            grid.appendChild(frame);
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const lightbox = document.getElementById('lightbox');
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
});