const products = {
    lps: [
        { id: 1, name: 'Fox (673)', image: 'images/lps-01.jpg', description: 'Color marrón claro con detalles blancos y marrones que realzan su cara, cuerpo y cola, y sus orejas tienen un detalle puntiagudo de color rosa.' },
        { id: 2, name: 'Ferret (520)', image: 'images/lps-02.jpg', description: 'Blanco con nariz, orejas, patas y marcas sobre los ojos de color rosa, y ojos turquesa.' },
        { id: 3, name: 'Rat (2206)', image: 'images/lps-03.jpg', description: 'Rosa con un mechón de pelo fucsia, orejas internas, una mancha sobre el ojo' },
        { id: 4, name: 'Persian (891)', image: 'images/lps-04.jpg', description: 'Rosa con rayas de color rosa más oscuro en la cabeza y la cola, nariz, pelaje en el pecho y marcas alrededor de los ojos.' },
        { id: 5, name: 'Persian (1436)', image: 'images/lps-05.jpg', description: 'Rosa con pelaje blanco en el pecho, patas delanteras, punta de la cola y una mancha en forma de nube sobre el ojo izquierdo.' },
        { id: 6, name: 'Kitten (2665)', image: 'images/lps-06.jpg', description: ' Rosa con un mechón de pelo, orejas y punta de la cola marrones , nariz roja, interior de las orejas de color rosa intenso, mejillas sonrojadas y ojos azules.' },
        { id: 7, name: 'Horse (2667)', image: 'images/lps-07.jpg', description: 'Color blanco roto con las orejas internas rosadas y las mejillas sonrojadas.' },
        { id: 8, name: 'Cow (2506)', image: 'images/lps-08.jpg', description: 'Blanca con manchas marrón claro, nariz rosada, orejas internas rosadas, mejillas sonrosadas.' },
        { id: 9, name: 'Rabbit (2629)', image: 'images/lps-09.jpg', description: 'Color rosa claro con orejas, nariz y marcas alrededor de los ojos de color canela' },
        { id: 10, name: 'Baby Sheep (2628)', image: 'images/lps-10.jpg', description: 'Es un pequeño corderito de color beige o crema con orejas oscuras y ojos negros.' },
        { id: 11, name: 'Chick (2631) ', image: 'images/lps-11.jpg', description: 'Pollito bebé redondo de color amarillo con la punta de la cabeza naranja.' },
        { id: 12, name: 'Pink Seal (2239)', image: 'images/lps-12.jpg', description: 'Color rosa salmón con marcas pálidas aerografiadas en el hocico y el pecho' },
        { id: 13, name: 'Bull Terrier (1095)', image: 'images/lps-13.jpg', description: 'Color marrón claro con manchas blancas, nariz marrón oscuro, orejas internas rosadas y ojos azules.' },
        { id: 14, name: 'Chihuahua (1)', image: 'images/lps-14.jpg', description: 'Perro Chihuahua con Soporte Ojos Marrones/Morados.' },
        { id: 15, name: 'Pink Deer (1819)', image: 'images/lps-15.jpg', description: 'Rosa con la nariz y el interior de las orejas de color fucsia, una mancha blanca en el cuello.' },
        { id: 16, name: 'Lavender Rat (1792)', image: 'images/lps-16.jpg', description: 'Color lavanda con manchas moradas , nariz, orejas y almohadillas de las patas de color rosa salmón.' },
        { id: 17, name: 'Deer (634)', image: 'images/lps-17.jpg', description: 'Color canela con una raya más oscura que le recorre la cara y la espalda, la parte inferior blanca y manchas en el lomo.' },
        { id: 18, name: 'Kitten (649)', image: 'images/lps-18.jpg', description: 'Color naranja con rayas más oscuras en la cabeza y la punta de la cola, nariz rosa y calcomanías de flores en las orejas.' },
        { id: 19, name: 'Crounching Kitten (1628)', image: 'images/lps-19.jpg', description: 'Pelaje de color lila pálido o púrpura rosáceo.' },
        { id: 20, name: 'Penguin (686)', image: 'images/lps-20.jpg', description: 'Color azul medianoche con pelo más claro, vientre blanco y pico amarillo.' },
        { id: 21, name: 'Mommy Swan (2504)', image: 'images/lps-21.jpg', description: 'Sonos rosados/blancos con detalles característicos de la época vintage de Hasbro.' },
        { id: 22, name: 'Ladybug (221)', image: 'images/lps-22.jpg', description: 'Roja con la cara blanca, el cuerpo y manchas negras, alas y patas rojas y ojos verdes.' },
        { id: 23, name: 'Bee (2472)', image: 'images/lps-23.jpg', description: 'Color amarillo con rayas de marrón oscuro.' },
        { id: 24, name: 'Bull Terrier (Sin numero)', image: 'images/lps-24.jpg', description: 'Color Blanco con mancha negra en el ojo.' },
        { id: 25, name: 'Cow (150)', image: 'images/lps-25.jpg', description: 'Color blanco con algunos toques rojos.' },
        { id: 26, name: 'Komondor (830)', image: 'images/lps-26.jpg', description: 'Color rosa pálido con pelaje rosa más oscuro, nariz y almohadillas de las patas marrones.' },
        { id: 27, name: 'Poodle (2563)', image: 'images/lps-27.jpg', description: 'Color blanco con pelaje, nariz y marcas en las mejillas de color rosa claro, y ojos azul claro.' },
        { id: 28, name: 'Rat (1863)', image: 'images/lps-28.jpg', description: 'Color rosa claro con un mechón de pelo rosado, una mancha sobre el ojo derecho.' },
        { id: 29, name: 'Cat (1788)', image: 'images/lps-29.jpg', description: 'Rosa con rayas rosa más oscuras en la cabeza, las patas delanteras, la nariz y el interior de las orejas.' },
        { id: 30, name: 'Rabbit (1606)', image: 'images/lps-30.jpg', description: 'Blanco con una oreja naranja, un mechón de pelo naranja y en el cuello.' },
    ],
    accesorios: [
        { id: 1, name: 'Centro de golosinas (Treat Center)', image: 'images/acce-01.jpg', description: 'Incluye una estructura principal de tonos verdes y rosados (como un puesto o dispensador de golosinas.)' },
        { id: 2, name: 'Casa de perritos (Playful Puppies)', image: 'images/acce-02.jpg', description: 'Clásico juego de accesorios y casa de mascotas.' },
        { id: 3, name: 'Picnic Basket', image: 'images/acce-03.jpg', description: 'Cesta de picnic de plástico amarillo' },

    ],
    otros: [
        { id: 1, name: 'Gorro Zanahoria (1606)', image: 'images/otro-01.jpg', description: 'Detalles de color naranja.' },
    ],
    permuta: [
        { id: 1, name: 'Octopus (255)', image: 'images/nuv-01.jpg', description: 'Un tierno pulpo de cuerpo rosado' },
        { id: 2, name: 'Baboon (244)', image: 'images/nuv-02.jpg', description: 'Mono color rosado con una linda chaqueta "personal"' },
        { id: 3, name: 'Elephant (243)', image: 'images/nuv-03.jpg', description: 'Elefante de la nueva generacion de LPS' },
        { id: 4, name: 'Collie', image: 'images/nuv-04.jpg', description: 'LPS alternativo de "Minilpsshop"' },
    ],
    fotos: [
        { id: 1, name: 'Estoy Leyendo..', imageUrl: 'images/fot-01.jpg' },
        { id: 2, name: '¡Me gusta esto!', imageUrl: 'images/fot-02.jpg' },
        { id: 3, name: '¿Donde estoy?', imageUrl: 'images/fot-03.jpg' },
    ],
};

let currentSection = 'lps';
let selectedProduct = null;
let photoZoomLevel = 1;
let photoIsDragging = false;
let photoDragStart = { x: 0, y: 0 };
let photoOffset = { x: 0, y: 0 };


const navButtons = document.querySelectorAll('.nav-button');
const productsGrid = document.getElementById('products-grid');
const sectionTitle = document.getElementById('section-title');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalProductName = document.getElementById('modal-product-name');
const modalQuestion = document.getElementById('modal-question');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

// Photo modal elements
const photoModalOverlay = document.getElementById('photo-modal-overlay');
const photoModal = document.getElementById('photo-modal');
const photoModalClose = document.getElementById('photo-modal-close');
const photoZoomImage = document.getElementById('photo-zoom-image');
const photoZoomInBtn = document.getElementById('photo-zoom-in');
const photoZoomOutBtn = document.getElementById('photo-zoom-out');
const photoZoomResetBtn = document.getElementById('photo-zoom-reset');
const photoZoomContainer = document.querySelector('.photo-zoom-container');

// Floating tip elements
const floatingTip = document.getElementById('floating-tip');
const floatingTipClose = document.getElementById('floating-tip-close');


function init() {
    renderProducts();
    attachEventListeners();
    initFloatingTip();
    // Preload fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}


function renderProducts() {
    if (currentSection === 'fotos') {
        renderPhotos();
        return;
    }
    
    const currentProducts = products[currentSection] || [];
    
    productsGrid.innerHTML = '';
    
    currentProducts.forEach((product, index) => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
        
        // Stagger animation
        card.style.animation = `fadeIn 0.5s ease-out ${index * 0.05}s both`;
    });
}

function renderPhotos() {
    const currentPhotos = products.fotos || [];
    
    productsGrid.innerHTML = '';
    productsGrid.className = 'photos-grid';
    
    currentPhotos.forEach((photo, index) => {
        const photoCard = createPhotoCard(photo);
        productsGrid.appendChild(photoCard);
        
        // Stagger animation
        photoCard.style.animation = `fadeIn 0.5s ease-out ${index * 0.05}s both`;
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${product.name}. ${product.description}. Haz clic para más información.`);
    
    card.innerHTML = `
        <div class="image-container">
            <img class="image" src="${product.image}" alt="${product.name}">
            <div class="shimmer-effect"></div>
        </div>
        <div class="card-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.description || 'Haz clic para consultar'}</p>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(product));
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(product);
        }
    });
    
    return card;
}

function createPhotoCard(photo) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${photo.name}. Haz clic para ampliar.`);
    
    card.innerHTML = `
        <div class="photo-polaroid-image">
            <img src="${photo.imageUrl}" alt="${photo.name}" loading="lazy">
        </div>
        <div class="photo-polaroid-text">
            <p class="photo-polaroid-label">${photo.name}</p>
        </div>
    `;
    
    card.addEventListener('click', () => openPhotoModal(photo));
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openPhotoModal(photo);
        }
    });
    
    return card;
}


function openModal(product) {
    selectedProduct = product;
    
    // Update modal content
    modalImage.src = product.image; // Esto cambia la ruta de la foto
    modalImage.alt = product.name;  // Esto añade el texto accesible
    modalProductName.textContent = product.name;
    
    // ... el resto de tu código de la función openModal sigue igual abajo

    
    // Update question based on section
    const questionText = currentSection === 'permuta' 
        ? '¿Deseas Permutar?' 
        : '¿Lo tienes?';
    modalQuestion.textContent = questionText;
    
    // Show modal with animation
    modalOverlay.classList.add('active');
    
    // Focus on modal for accessibility
    modal.focus();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    selectedProduct = null;
    
    // Restore body scroll
    document.body.style.overflow = '';
}


function openPhotoModal(photo) {
    photoZoomImage.src = photo.imageUrl;
    photoZoomImage.alt = photo.name;
    
    // Reset zoom
    photoZoomLevel = 1;
    photoOffset = { x: 0, y: 0 };
    updatePhotoZoom();
    
    // Show modal
    photoModalOverlay.classList.add('active');
    photoModal.focus();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    photoModalOverlay.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

function updatePhotoZoom() {
    photoZoomImage.style.transform = `scale(${photoZoomLevel}) translate(${photoOffset.x}px, ${photoOffset.y}px)`;
}

function zoomInPhoto() {
    photoZoomLevel = Math.min(photoZoomLevel + 0.25, 3);
    updatePhotoZoom();
}

function zoomOutPhoto() {
    photoZoomLevel = Math.max(photoZoomLevel - 0.25, 1);
    if (photoZoomLevel === 1) {
        photoOffset = { x: 0, y: 0 };
    }
    updatePhotoZoom();
}

function resetPhotoZoom() {
    photoZoomLevel = 1;
    photoOffset = { x: 0, y: 0 };
    updatePhotoZoom();
}


function initFloatingTip() {
    const tipDismissed = localStorage.getItem('lps-tip-dismissed');
    
    if (!tipDismissed) {
        // Show tip after 8 seconds
        setTimeout(() => {
            floatingTip.classList.add('show');
        }, 8000);
    }
    
    floatingTipClose.addEventListener('click', () => {
        floatingTip.classList.remove('show');
        localStorage.setItem('lps-tip-dismissed', 'true');
    });
}


function sendToWhatsApp() {
    if (!selectedProduct) return;
    
    const phoneNumber = '56996467214'; // Number without +
    let message;
    
    if (currentSection === 'permuta') {
        message = `Hola, me interesa permutar por el Little Pet Shop: ${selectedProduct.name}`;
    } else {
        message = `Hola, tengo el Little Pet Shop: ${selectedProduct.name}`;
    }
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp Web URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank');
    
    // Close modal
    closeModal();
}
// ============================================
// ANIMACIÓN CARA TRISTE (BOTÓN NO)
// ============================================

function showSadFace() {
    if (!sadFaceOverlay) return;
    
    // Reinicia el temporizador si se presiona NO varias veces seguidas
    clearTimeout(sadFaceTimer);
    
    sadFaceOverlay.classList.add('active');
    
    sadFaceTimer = setTimeout(() => {
        sadFaceOverlay.classList.remove('active');
    }, 2000); // Tiempo visible en pantalla (ms). Ajusta este número si quieres más o menos duración.
}

function attachEventListeners() {
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            changeSection(section);
        });
    });
    
    // Modal close
    modalClose.addEventListener('click', closeModal);
    
    // Modal overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // YES button
    btnYes.addEventListener('click', sendToWhatsApp);
    
    // NO button
    btnNo.addEventListener('click', closeModal);
    
    // Keyboard close (ESC)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Photo modal close
    photoModalClose.addEventListener('click', closePhotoModal);
    
    // Photo modal overlay click
    photoModalOverlay.addEventListener('click', (e) => {
        if (e.target === photoModalOverlay) {
            closePhotoModal();
        }
    });
    
    // Photo zoom buttons
    photoZoomInBtn.addEventListener('click', zoomInPhoto);
    photoZoomOutBtn.addEventListener('click', zoomOutPhoto);
    photoZoomResetBtn.addEventListener('click', resetPhotoZoom);
    
    // Keyboard close for photo modal (ESC)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && photoModalOverlay.classList.contains('active')) {
            closePhotoModal();
        }
    });
}


function changeSection(section) {
    if (section === currentSection) return;
    
    currentSection = section;
    
    // Update active button
    navButtons.forEach(button => {
        button.classList.remove('nav-button--active');
        if (button.getAttribute('data-section') === section) {
            button.classList.add('nav-button--active');
        }
    });
    
    // Update title
    const sectionLabels = {
        lps: 'LPS',
        accesorios: 'ACCESORIOS',
        otros: 'OTROS',
        permuta: 'SE PERMUTA',
        fotos: 'FOTOS'
    };
    sectionTitle.textContent = sectionLabels[section];
    
    // Efecto de brillo solo para LPS, ACCESORIOS y OTROS (SE PERMUTA queda igual que siempre)
    const sectionsWithShine = ['lps', 'accesorios', 'otros'];
    sectionTitle.classList.toggle('section-title--shine', sectionsWithShine.includes(section));
    
    
    // Reset grid class if coming from photos
    if (section !== 'fotos') {
        productsGrid.className = 'grid';
    }
    
    // Render new products
    renderProducts();
    
    // Scroll to products
    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// Detect if running on mobile
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Handle orientation change
window.addEventListener('orientationchange', () => {
    if (modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Handle window resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Any resize-specific logic here
    }, 250);
});

// Use requestAnimationFrame for smooth animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        requestAnimationFrame(() => {
            init();
        });
    });
} else {
    init();
}


function setupLazyLoading() {
    const images = document.querySelectorAll('.image');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    // Load image logic here
                    observer.unobserve(image);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
}


// Track section changes for analytics
function trackSectionChange(section) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'section_view', {
            section: section
        });
    }
}

// Track product selection
function trackProductSelection(productName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'product_selected', {
            product_name: productName
        });
    }
}


console.log('Little Pet Shop Catalog loaded successfully');
console.log('Sections available:', Object.keys(products));
console.log('Total products:', Object.values(products).reduce((sum, arr) => sum + arr.length, 0));


// ============================================
// ARRASTRAR PARA VER LA FOTO AMPLIADA (cuando hay zoom aplicado)
// Usa las variables photoIsDragging / photoDragStart / photoOffset
// que ya estaban declaradas arriba, y updatePhotoZoom() ya existente.
// ============================================

function attachPhotoDragListeners() {
    if (!photoZoomImage) return;

    const startDrag = (x, y) => {
        if (photoZoomLevel <= 1) return;
        photoIsDragging = true;
        photoDragStart = { x: x - photoOffset.x, y: y - photoOffset.y };
        photoZoomImage.style.cursor = 'grabbing';
    };

    const moveDrag = (x, y) => {
        if (!photoIsDragging) return;
        const maxOffset = (photoZoomLevel - 1) * 120;
        let nextX = x - photoDragStart.x;
        let nextY = y - photoDragStart.y;
        nextX = Math.max(-maxOffset, Math.min(maxOffset, nextX));
        nextY = Math.max(-maxOffset, Math.min(maxOffset, nextY));
        photoOffset = { x: nextX, y: nextY };
        updatePhotoZoom();
    };

    const endDrag = () => {
        photoIsDragging = false;
        photoZoomImage.style.cursor = '';
    };

    photoZoomImage.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup', endDrag);

    photoZoomImage.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    }, { passive: true });
    photoZoomImage.addEventListener('touchmove', (e) => {
        if (!photoIsDragging) return;
        const touch = e.touches[0];
        moveDrag(touch.clientX, touch.clientY);
    }, { passive: true });
    photoZoomImage.addEventListener('touchend', endDrag);
}

attachPhotoDragListeners();
