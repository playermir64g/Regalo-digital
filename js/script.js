document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Photo and Video data
    const photos = [
        { src: 'Imagenes/Primera salida.jpeg', caption: 'Nuestra primera aventura juntas', date: '2024', type: 'image' },
        { src: 'Imagenes/Imagen junsos.jpeg', caption: 'Siempre conmigo en las buenas y malas', date: '2024', type: 'image' },
        { src: 'Imagenes/Imagen en grupo.jpeg', caption: 'Luchando lado a lado como verdaderas Toman', date: '2025', type: 'image' },
        { src: 'Imagenes/Selfi.jpeg', caption: 'Por ti atravesaría el tiempo si fuera necesario', date: '2025', type: 'image' },
        { src: 'Imagenes/Cuadros.jpeg', caption: 'Sin importar qué, siempre estaré ahí', date: '2026', type: 'image', poster: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?w=400&h=300&fit=crop' },
        { src: 'Imagenes/Primera carta.jpeg', caption: 'Hasta el final, como los capitanes de Toman', date: '2026', type: 'image' },
        { src: 'Imagenes/Favorita.jpeg', caption: 'Mi persona especial en este mundo', date: '2026', type: 'image', poster: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop' },
        { src: 'Imagenes/Salida casa.jpeg', caption: 'Juntas escribiendo nuestra historia', date: '2026', type: 'image' },
        { src: 'Imagenes/Mi habraso favorito.jpeg', caption: 'Siempre hay un refugio en un abrazo.', date: '2026', type: 'image' },
        { src: 'Imagenes/habraso lengua.jpeg', caption: 'Contigo cada momento es especial', date: '2026', type: 'image' },
        { src: 'Imagenes/dedos.jpeg', caption: 'Mi mejor compañera de aventuras', date: '2026', type: 'image' },
        { src: 'Imagenes/Fondo ojos.jpeg', caption: 'Por muchos más años de amistad', date: '2026', type: 'image' },
        { src: 'Imagenes/tikets.jpeg', caption: 'Los mejores momentos son contigo', date: '2026', type: 'image' },
        { src: 'Imagenes/rockstar.jpeg', caption: 'Contigo todo es más divertido', date: '2026', type: 'image' },
        { src: 'Imagenes/algodon.jpeg', caption: 'Mi persona favorita del mundo', date: '2026', type: 'image' },
        { src: 'Imagenes/llaveros.jpeg', caption: 'Por nuestra amistad infinita', date: '2026', type: 'image' },
        { src: 'Imagenes/gatos parados.jpeg', caption: 'Juntos somos imparables', date: '2026', type: 'image' },
        { src: 'Imagenes/tiro.jpeg', caption: 'Mis recuerdos favoritos tienen tu cara', date: '2026', type: 'image' },
        { src: 'Imagenes/lengua.jpeg', caption: 'Eres la mejor persona que conozco', date: '2026', type: 'image' },
        { src: 'Imagenes/gatos.jpeg', caption: 'Gracias por existir', date: '2026', type: 'image' }
    ];

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

    // Lightbox functions
    window.openLightbox = function(index) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        
        if (lightbox && photos[index]) {
            if (photos[index].type === 'video') {
                lightboxImg.style.display = 'none';
                let videoEl = document.getElementById('lightboxVideo');
                if (!videoEl) {
                    videoEl = document.createElement('video');
                    videoEl.id = 'lightboxVideo';
                    videoEl.controls = true;
                    videoEl.style.maxWidth = '90%';
                    videoEl.style.maxHeight = '80vh';
                    videoEl.style.border = '4px solid var(--red)';
                    videoEl.style.borderRadius = '5px';
                    videoEl.style.boxShadow = '0 30px 80px rgba(196, 30, 58, 0.4), 0 0 60px rgba(0, 0, 0, 0.5)';
                    lightbox.querySelector('.lightbox-content').appendChild(videoEl);
                }
                videoEl.src = photos[index].src;
                videoEl.style.display = 'block';
                videoEl.play();
            } else {
                lightboxImg.style.display = 'block';
                lightboxImg.src = photos[index].src;
                const videoEl = document.getElementById('lightboxVideo');
                if (videoEl) {
                    videoEl.style.display = 'none';
                    videoEl.pause();
                }
            }
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
            const videoEl = document.getElementById('lightboxVideo');
            if (videoEl) {
                videoEl.pause();
            }
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    // Add photos or videos
    window.addPhotos = function(event) {
        const files = event.target.files;
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const isVideo = file.type.startsWith('video/');
                        const newPhoto = {
                            src: e.target.result,
                            caption: 'Nuevo recuerdo especial',
                            date: new Date().getFullYear().toString(),
                            type: isVideo ? 'video' : 'image',
                            poster: isVideo ? null : e.target.result
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
            
            let mediaContent = '';
            if (photo.type === 'video') {
                const poster = photo.poster || photo.src;
                mediaContent = `
                    <video src="${photo.src}" poster="${poster}" muted loop></video>
                    <div class="video-indicator">▶</div>
                `;
            } else {
                mediaContent = `<img src="${photo.src}" alt="Foto ${index + 1}">`;
            }
            
            frame.innerHTML = `
                <div class="frame-decoration"></div>
                <div class="frame-inner">
                    ${mediaContent}
                </div>
                <div class="photo-caption">${photo.caption}</div>
                <div class="photo-date">${photo.date}</div>
            `;
            grid.appendChild(frame);
        }
    }

    // Keyboard events
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