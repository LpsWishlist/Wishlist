const products = {
    lps: [
        { id: 1, name: 'Cocker Spaniel #1', image: '🐕', description: 'Perro juguetón y leal' },
        { id: 2, name: 'Gato Persa #5', image: '🐈', description: 'Felino elegante y tranquilo' },
        { id: 3, name: 'Conejo #12', image: '🐰', description: 'Conejito adorable y suave' },
        { id: 4, name: 'Hámster #7', image: '🐹', description: 'Pequeño y energético' },
        { id: 5, name: 'Pájaro Azul #3', image: '🦜', description: 'Ave colorida y cantarina' },
        { id: 6, name: 'Tortuga #8', image: '🐢', description: 'Lenta y sabia' },
        { id: 7, name: 'Gatito Blanco #15', image: '🐱', description: 'Gato tierno y mimoso' },
        { id: 8, name: 'Perro Pequeño #22', image: '🐕‍🦺', description: 'Compañero fiel' },
        { id: 9, name: 'Pato #11', image: '🦆', description: 'Pato acuático' },
        { id: 10, name: 'Gato Negro #19', image: '🐈‍⬛', description: 'Misterioso y elegante' },
        { id: 11, name: 'Poni Rosa #24', image: '🐴', description: 'Equino mágico' },
        { id: 12, name: 'Gato Naranja #31', image: '🐈', description: 'Gato cálido y brillante' },
        { id: 13, name: 'Bulldog Francés #14', image: '🐕', description: 'Perro robusto y cariñoso' },
        { id: 14, name: 'Conejo Gris #28', image: '🐰', description: 'Conejo suave y tranquilo' },
        { id: 15, name: 'Loro Rojo #9', image: '🦜', description: 'Loro parlanchín' },
        { id: 16, name: 'Erizo #16', image: '🦔', description: 'Pequeño y espinoso' },
        { id: 17, name: 'Mariposa #20', image: '🦋', description: 'Insecto delicado y colorido' },
        { id: 18, name: 'Ratón #4', image: '🐭', description: 'Roedorcito adorable' },
        { id: 19, name: 'Gallo #26', image: '🐓', description: 'Ave de granja' },
        { id: 20, name: 'Oveja #13', image: '🐑', description: 'Oveja lanuda' },
        { id: 21, name: 'Canguro #30', image: '🦘', description: 'Saltador australiano' },
        { id: 22, name: 'Leopardo #6', image: '🐆', description: 'Felino salvaje' },
        { id: 23, name: 'Mono #18', image: '🐵', description: 'Primate juguetón' },
        { id: 24, name: 'Oso #25', image: '🐻', description: 'Oso grande y fuerte' },
        { id: 25, name: 'Panda #10', image: '🐼', description: 'Oso tierno chino' },
        { id: 26, name: 'Koala #21', image: '🐨', description: 'Marsupial soñador' },
        { id: 27, name: 'Elefante #2', image: '🐘', description: 'Gigante inteligente' },
        { id: 28, name: 'Jirafas #27', image: '🦒', description: 'Alta y distinguida' },
        { id: 29, name: 'Cebra #17', image: '🦓', description: 'Rayada y veloz' },
        { id: 30, name: 'Rinoceronte #23', image: '🦏', description: 'Fuerte y poderoso' },
        { id: 31, name: 'Lince #29', image: '🐆', description: 'Felino salvaje y ágil' },
    ],
    accesorios: [
        { id: 1, name: 'Casa Acogedora Rosa', image: '🏠', description: 'Casa miniatura perfecta' },
        { id: 2, name: 'Comedero Elegante', image: '🥣', description: 'Para alimentar mascotas' },
        { id: 3, name: 'Cama de Espuma', image: '🛏️', description: 'Cómoda y acogedora' },
        { id: 4, name: 'Collar Delicado', image: '✨', description: 'Accesorio brillante' },
        { id: 5, name: 'Cesta Tejida', image: '🧺', description: 'Decorativa y útil' },
    ],
    otros: [
        { id: 1, name: 'Set Accesorios Mini', image: '📦', description: 'Pack completo de accesorios' },
    ],
    permuta: [
        { id: 1, name: 'Cocker Spaniel #42', image: '🐕', description: 'Perro marrón adorable' },
        { id: 2, name: 'Gato Tabby #58', image: '🐈', description: 'Gato rayado hermoso' },
        { id: 3, name: 'Conejo Blanco #19', image: '🐰', description: 'Conejo blanco níveo' },
        { id: 4, name: 'Loro Verde #27', image: '🦜', description: 'Loro tropical exótico' },
    ],
};

// ============================================
// STATE
// ============================================

let currentSection = 'lps';
let selectedProduct = null;

// ============================================
// DOM ELEMENTS
// ============================================

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

// ============================================
// INITIALIZATION
// ============================================

function init() {
    renderProducts();
    attachEventListeners();
    // Preload fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

// ============================================
// RENDER PRODUCTS
// ============================================

function renderProducts() {
    const currentProducts = products[currentSection] || [];
    
    productsGrid.innerHTML = '';
    
    currentProducts.forEach((product, index) => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
        
        // Stagger animation
        card.style.animation = `fadeIn 0.5s ease-out ${index * 0.05}s both`;
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
            <div class="image">${product.image}</div>
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

// ============================================
// MODAL FUNCTIONS
// ============================================

function openModal(product) {
    selectedProduct = product;
    
    // Update modal content
    modalImage.textContent = product.image;
    modalProductName.textContent = product.name;
    
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

// ============================================
// WHATSAPP INTEGRATION
// ============================================

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
// EVENT LISTENERS
// ============================================

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
}

// ============================================
// SECTION CHANGE
// ============================================

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
        permuta: 'SE PERMUTA'
    };
    sectionTitle.textContent = sectionLabels[section];
    
    // Render new products
    renderProducts();
    
    // Scroll to products
    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

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

// ============================================
// PERFORMANCE & LOADING
// ============================================

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

// Lazy loading images if you replace emoji with actual images later
// Uncomment when ready to use actual images
/*
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
*/

// ============================================
// ANALYTICS (Optional)
// ============================================

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

// ============================================
// CONSOLE LOGGING (for debugging)
// ============================================

console.log('Little Pet Shop Catalog loaded successfully');
console.log('Sections available:', Object.keys(products));
console.log('Total products:', Object.values(products).reduce((sum, arr) => sum + arr.length, 0));
