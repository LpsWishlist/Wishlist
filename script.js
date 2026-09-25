const HALLOWEEN = false;
const NAVIDAD = false;

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
        { id: 2, name: 'Baboon (244)', image: 'images/nuv-02.jpg', description: 'Mono color rosado con una linda chaqueta "personal' },
        { id: 3, name: 'Elephant (243)', image: 'images/nuv-03.jpg', description: 'Elefante de la nueva generacion de LPS' },
        { id: 4, name: 'Collie', image: 'images/nuv-04.jpg', description: 'LPS alternativo de "Minilpsshop"' },
        { id: 4, name: 'Scout Kerry', image: 'images/lps-31.jpg', description: 'LPS McDonaldS.' },
        { id: 4, name: 'Hamster (1888)', image: 'images/lps-32.jpg', description: 'Hamster con Manzana.' },
        { id: 4, name: 'Caracol de Mar (188)', image: 'images/lps-33.jpg', description: 'Hermoso Caracol de mar color naranja.' },
        { id: 4, name: 'Pink Pig (87)', image: 'images/lps-34.jpg', description: 'Chanchito color rosa.' },
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
let sadFaceTimer = null;

const WHATSAPP_PHONE = '56996467214';

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

const sadFaceOverlay = document.getElementById('sad-face-overlay');
const sadFaceImage = document.getElementById('sad-face-image');

const photoModalOverlay = document.getElementById('photo-modal-overlay');
const photoModal = document.getElementById('photo-modal');
const photoModalClose = document.getElementById('photo-modal-close');
const photoZoomImage = document.getElementById('photo-zoom-image');
const photoZoomInBtn = document.getElementById('photo-zoom-in');
const photoZoomOutBtn = document.getElementById('photo-zoom-out');
const photoZoomResetBtn = document.getElementById('photo-zoom-reset');
const photoZoomContainer = document.querySelector('.photo-zoom-container');

const floatingTip = document.getElementById('floating-tip');
const floatingTipClose = document.getElementById('floating-tip-close');

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
const mobileMenuWhatsApp = document.querySelector('.mobile-menu-whatsapp');


function init() {
    renderProducts();
    attachEventListeners();
    initFloatingTip();
    initMobileMenu();
    
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
    
    modalImage.src = product.image; // Esto cambia la ruta de la foto
    modalImage.alt = product.name;  // Esto añade el texto accesible
    modalProductName.textContent = product.name;
    
    const questionText = currentSection === 'permuta' 
        ? '¿Deseas Permutar?' 
        : '¿Lo tienes?';
    modalQuestion.textContent = questionText;
    
    modalOverlay.classList.add('active');
    
    modal.focus();
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    selectedProduct = null;
    
    document.body.style.overflow = '';
}


function openPhotoModal(photo) {
    photoZoomImage.src = photo.imageUrl;
    photoZoomImage.alt = photo.name;
    
    photoZoomLevel = 1;
    photoOffset = { x: 0, y: 0 };
    updatePhotoZoom();

    photoModalOverlay.classList.add('active');
    photoModal.focus();
    
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    photoModalOverlay.classList.remove('active');
    
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
    
    const phoneNumber = WHATSAPP_PHONE;
    let message;
    
    if (currentSection === 'permuta') {
        message = `Hola, me interesa permutar por el Little Pet Shop: ${selectedProduct.name}`;
    } else {
        message = `Hola, tengo el Little Pet Shop: ${selectedProduct.name}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    closeModal();
}


function showSadFace() {
    if (!sadFaceOverlay) return;
    
    clearTimeout(sadFaceTimer);
    
    sadFaceOverlay.classList.add('active');
    
    sadFaceTimer = setTimeout(() => {
        sadFaceOverlay.classList.remove('active');
    }, 2000);
}

function attachEventListeners() {
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            changeSection(section);
            if (mobileMenu) {
                closeMobileMenu();
            }
        });
    });
    

    modalClose.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    btnYes.addEventListener('click', sendToWhatsApp);
    
    btnNo.addEventListener('click', () => {
        showSadFace();
        closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    photoModalClose.addEventListener('click', closePhotoModal);
    
    photoModalOverlay.addEventListener('click', (e) => {
        if (e.target === photoModalOverlay) {
            closePhotoModal();
        }
    });
    
    photoZoomInBtn.addEventListener('click', zoomInPhoto);
    photoZoomOutBtn.addEventListener('click', zoomOutPhoto);
    photoZoomResetBtn.addEventListener('click', resetPhotoZoom);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && photoModalOverlay.classList.contains('active')) {
            closePhotoModal();
        }
    });
}


function changeSection(section) {
    if (section === currentSection) return;
    
    currentSection = section;
    
    navButtons.forEach(button => {
        button.classList.remove('nav-button--active');
        if (button.getAttribute('data-section') === section) {
            button.classList.add('nav-button--active');
        }
    });
    
    const sectionLabels = {
        lps: 'LPS',
        accesorios: 'ACCESORIOS',
        otros: 'OTROS',
        permuta: 'SE PERMUTA',
        fotos: 'FOTOS'
    };
    sectionTitle.textContent = sectionLabels[section];
    
    const sectionsWithShine = ['lps', 'accesorios', 'otros'];
    sectionTitle.classList.toggle('section-title--shine', sectionsWithShine.includes(section));
    
    
    if (section !== 'fotos') {
        productsGrid.className = 'grid';
    }
    
    renderProducts();
    
    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function initMobileMenu() {
    if (!hamburgerMenu || !mobileMenu) return;
    
    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    }
    
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            if (section) {
                changeSection(section);
                closeMobileMenu();
            }
        });
    });
    
    if (mobileMenuWhatsApp) {
        mobileMenuWhatsApp.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsAppFromMenu();
            closeMobileMenu();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    hamburgerMenu.classList.add('active');
    mobileMenu.classList.add('active');
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    hamburgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.classList.remove('active');
    }
    document.body.style.overflow = '';
}

function openWhatsAppFromMenu() {
    const phoneNumber = WHATSAPP_PHONE;
    const message = encodeURIComponent('Hola, me interesa el Little Pet Shop que tienes.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

window.addEventListener('orientationchange', () => {
    if (modalOverlay.classList.contains('active')) {
        closeModal();
    }
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {

    }, 250);
});


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
                    observer.unobserve(image);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
}

function trackSectionChange(section) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'section_view', {
            section: section
        });
    }
}

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

const EVT_ART = {
    bat: '<svg viewBox="0 0 48 24"><path d="M24 7c1.4 0 2.2 1.2 2.4 2.8L28 8.6c2-2.6 6.4-4.2 11.6-3.4-2.2 1.6-3.4 3.6-3.6 6-2-1.2-4-.8-5.2 1-1-1.4-3-1.6-4.4-.2L24 18l-2.4-6c-1.4-1.4-3.4-1.2-4.4.2-1.2-1.8-3.2-2.2-5.2-1-.2-2.4-1.4-4.4-3.6-6C13.6 4.4 18 6 20 8.6l1.6 1.2C21.8 8.2 22.6 7 24 7z"/></svg>',
    pumpkin: '<svg viewBox="0 0 40 36"><path class="st" d="M18 9c0-3 1-5 3-7l1.5 1.5c-1 1.5-1.5 3-1.5 5.5z"/><ellipse cx="12" cy="22" rx="9" ry="12"/><ellipse cx="28" cy="22" rx="9" ry="12"/><ellipse cx="20" cy="22" rx="8" ry="13"/><path class="fc" d="M13 20l3-4 3 4zM21 20l3-4 3 4zM14 27q6 5 12 0q-6 1-12 0z"/></svg>',
    web: '<svg viewBox="0 0 56 56"><path d="M0 0H56M0 0L51.7 21.4M0 0L39.6 39.6M0 0L21.4 51.7M0 0V56M16 0L14.8 6.1 11.3 11.3 6.1 14.8 0 16M32 0L29.6 12.2 22.6 22.6 12.2 29.6 0 32M48 0L44.3 18.4 33.9 33.9 18.4 44.3 0 48"/></svg>',
    spider: '<svg viewBox="0 0 20 60"><path d="M10 0v40"/><circle cx="10" cy="46" r="5"/><circle cx="10" cy="40.5" r="3"/><path d="M6 44l-5-4M6 46l-6 1M7 49l-5 6M14 44l5-4M14 46l6 1M13 49l5 6"/></svg>',
    flake: '<svg viewBox="0 0 24 24"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 5l-2-2M12 5l2-2M12 19l-2 2M12 19l2 2"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 1c1 6 3 9 11 11-8 2-10 5-11 11-1-6-3-9-11-11 8-2 10-5 11-11z"/></svg>',
    tree: '<svg viewBox="0 0 30 40"><path class="tr" d="M15 3l7 11h-4l7 10h-5l6 10H4l6-10H5l7-10H8z"/><rect class="tk" x="13" y="34" width="4" height="5" rx="1"/><circle class="bl" cx="12" cy="22" r="1.6"/><circle class="bl" cx="19" cy="29" r="1.6"/><circle class="bl" cx="14" cy="13" r="1.3"/></svg>',
    gift: '<svg viewBox="0 0 30 30"><rect class="gb" x="4" y="13" width="22" height="15" rx="2"/><rect class="gb" x="3" y="9" width="24" height="6" rx="2"/><rect class="gr" x="13.5" y="9" width="3" height="19"/><path class="gr" d="M15 9c-3-6-9-5-7-1 1 2 5 1 7 1zM15 9c3-6 9-5 7-1-1 2-5 1-7 1z"/></svg>'
};

function evtDecor(parent, items) {
    parent.insertAdjacentHTML('beforeend', items.map(([art, cls]) =>
        `<span class="evt-item ${cls}" aria-hidden="true">${EVT_ART[art]}</span>`
    ).join(''));
}

function evtLights() {
    let wire = 'M0 2';
    let bulbs = '';
    for (let i = 0; i < 10; i++) {
        const x = i * 100;
        wire += `Q${x + 50} 22 ${x + 100} 2`;
        bulbs += `<ellipse class="b${(i % 2) * 2 + 1}" cx="${x + 30}" cy="15" rx="3.4" ry="5"/>`
               + `<ellipse class="b${(i % 2) * 2 + 2}" cx="${x + 70}" cy="15" rx="3.4" ry="5"/>`;
    }
    return `<div class="evt-lights" aria-hidden="true"><svg viewBox="0 0 1000 24" preserveAspectRatio="xMidYMin slice"><path d="${wire}"/>${bulbs}</svg></div>`;
}

function evtSnow() {
    const box = document.createElement('div');
    box.className = 'evt-snow';
    box.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 22; i++) {
        const flake = document.createElement('i');
        const size = 3 + Math.random() * 3;
        flake.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;opacity:${0.5 + Math.random() * 0.4};animation-duration:${14 + Math.random() * 12}s;animation-delay:${-Math.random() * 26}s;--dx:${(Math.random() - 0.5) * 60}px`;
        box.appendChild(flake);
    }
    document.body.appendChild(box);
}

function initEventos() {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    if (!header || !footer || !(HALLOWEEN || NAVIDAD)) return;

    footer.classList.add('evt-foot');

    if (HALLOWEEN) {
        document.body.classList.add('evt-halloween');
        evtDecor(header, [
            ['bat', 'evt-bat evt-bat--1'], ['bat', 'evt-bat evt-bat--2'],
            ['bat', 'evt-bat evt-bat--3'], ['bat', 'evt-bat evt-bat--4'],
            ['pumpkin', 'evt-pumpkin evt-cl'], ['pumpkin', 'evt-pumpkin evt-cr'],
            ['web', 'evt-web'], ['spider', 'evt-spider']
        ]);
        evtDecor(footer, [['pumpkin', 'evt-pumpkin'], ['pumpkin', 'evt-pumpkin'], ['pumpkin', 'evt-pumpkin']]);
    }

    if (NAVIDAD) {
        document.body.classList.add('evt-navidad');
        header.insertAdjacentHTML('beforeend', evtLights());
        evtDecor(header, [
            ['flake', 'evt-flake evt-fl-1'], ['flake', 'evt-flake evt-fl-2'], ['star', 'evt-star'],
            ['tree', 'evt-tree evt-cl'], ['tree', 'evt-tree evt-cr']
        ]);
        evtDecor(footer, [['tree', 'evt-tree'], ['gift', 'evt-gift'], ['tree', 'evt-tree']]);
        evtSnow();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventos);
} else {
    initEventos();
}

