// Datos del menú
const menuItems = [
    { id: 1, name: "4 Quesos", category: "Clásicas", desc: "Mezcla de cuatro quesos fundidos.", price: 3.50, img: "empanadas/BLDA6.png" },
    { id: 2, name: "Jamón y Queso", category: "Clásicas", desc: "Clásica de jamón cocido y queso mozzarella.", price: 3.50, img: "empanadas/BLDA4.png" },
    { id: 3, name: "Cebolla y Queso", category: "Clásicas", desc: "Cebolla caramelizada y mucho queso.", price: 3.50, img: "empanadas/BLDA3.png" },
    { id: 4, name: "Pollo", category: "Clásicas", desc: "Pollo jugoso con especias suaves.", price: 3.50, img: "empanadas/BLDA14.png" },
    { id: 5, name: "Humita", category: "Vegetarianas", desc: "Choclo cremoso tradicional.", price: 3.50, img: "empanadas/BLDA7.png" },
    { id: 6, name: "Roquefort y Jamón", category: "Especiales", desc: "El toque fuerte del roquefort con jamón.", price: 3.50, img: "empanadas/BLDA14.png" },
    { id: 7, name: "Zeitan Beef", category: "Vegetarianas", desc: "Alternativa vegana con mucho sabor.", price: 3.50, img: "empanadas/BLDA6.png" },
    { id: 8, name: "Caprese", category: "Vegetarianas", desc: "Queso, tomate y albahaca fresca.", price: 3.50, img: "empanadas/BLDA7.png" },
    { id: 9, name: "Vacío y Provoleta", category: "Especiales", desc: "Vacío desmechado, provoleta fundida.", price: 3.50, img: "empanadas/BLDA4.png" },
    { id: 10, name: "Dulce de Leche", category: "Especiales", desc: "Empanada dulce tradicional.", price: 3.50, img: "empanadas/BLDA6.png" },
    { id: 11, name: "Nutella y Brownie", category: "Especiales", desc: "Bomba dulce de chocolate.", price: 3.50, img: "empanadas/BLDA3.png" },
    { id: 12, name: "Estrella Galicia", category: "Bebidas", desc: "Cerveza, lata 330ml.", price: 2.00, img: "empanadas/BLDA14.png" },
    { id: 13, name: "Vermú", category: "Bebidas", desc: "Vermú de la casa.", price: 2.70, img: "empanadas/BLDA7.png" }
];

// Estado global
let cart = {}; // { itemId: quantity }
let activeCategory = 'Clásicas';

// Elementos del DOM
const menuContainer = document.getElementById('menu-container');
const filterBtns = document.querySelectorAll('.capsule-btn');
const cartSummary = document.getElementById('cart-summary');
const totalPriceEl = document.getElementById('total-price');
const btnConfirm = document.getElementById('btn-confirm');
const form = document.getElementById('checkout-form');

// Mobile DOM
const mobQty = document.getElementById('mob-qty');
const mobTotal = document.getElementById('mob-total');
const openDrawerBtn = document.getElementById('open-drawer');
const closeDrawerBtn = document.getElementById('close-drawer');
const checkoutDrawer = document.getElementById('checkout-drawer');

function init() {
    renderMenu();
    setupEventListeners();
    updateCartUI();
}

function renderMenu() {
    menuContainer.innerHTML = '';
    
    if (activeCategory === 'Todas') {
        const categories = [...new Set(menuItems.map(i => i.category))];
        categories.forEach(cat => {
            const catItems = menuItems.filter(i => i.category === cat);
            const section = document.createElement('div');
            section.className = 'menu-category-section';
            section.innerHTML = `<h4 class="category-header">${cat}</h4>`;
            
            const list = document.createElement('div');
            list.className = 'menu-list-grid';
            
            catItems.forEach(item => {
                list.appendChild(createItemCard(item));
            });
            section.appendChild(list);
            menuContainer.appendChild(section);
        });
    } else {
        const filteredItems = menuItems.filter(item => item.category === activeCategory);
        const list = document.createElement('div');
        list.className = 'menu-list-grid';
        filteredItems.forEach(item => {
            list.appendChild(createItemCard(item));
        });
        menuContainer.appendChild(list);
    }
}

function createItemCard(item) {
    const qty = cart[item.id] || 0;
    const card = document.createElement('article');
    card.className = 'menu-card product-card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="menu-img product-card-img" onerror="this.src='Empanada.png'">
        <div class="product-card-info">
            <h3 class="menu-title product-title">${item.name}</h3>
            <p class="menu-desc product-description">${item.desc}</p>
            <div class="menu-price product-price">€${item.price.toFixed(2)}</div>
        </div>
        <div class="stepper quantity-stepper">
            <button class="stepper-btn minus" data-id="${item.id}">-</button>
            <div class="stepper-val" id="qty-${item.id}">${qty}</div>
            <button class="stepper-btn plus" data-id="${item.id}">+</button>
        </div>
    `;
    return card;
}

function setupEventListeners() {
    // Filtros de categoría
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.getAttribute('data-filter');
            renderMenu();
        });
    });

    // Control de cantidades (delegado)
    menuContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('stepper-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const isPlus = e.target.classList.contains('plus');
            updateQuantity(id, isPlus ? 1 : -1);
        }
    });

    // Inicializar Sliders de Locales
    document.querySelectorAll('.loc-image-slider').forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentIdx = 0;

        function showSlide(index) {
            slides.forEach((s, i) => {
                s.classList.toggle('active', i === index);
            });
        }

                prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentIdx = (currentIdx > 0) ? currentIdx - 1 : slides.length - 1;
            showSlide(currentIdx);
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentIdx = (currentIdx < slides.length - 1) ? currentIdx + 1 : 0;
            showSlide(currentIdx);
        });

    });

        // Formulario de validación
    form.addEventListener('input', checkFormValidity);
    document.querySelectorAll('input[name="delivery"]').forEach(el => {
        el.addEventListener('change', (e) => {
            const addressInput = document.getElementById('customer-address');
            if (e.target.value === 'delivery') {
                addressInput.classList.remove('hidden');
            } else {
                addressInput.classList.add('hidden');
                addressInput.value = '';
                addressInput.classList.remove('valid-field', 'invalid-field');
            }
            checkFormValidity();
        });
    });
    
    btnConfirm.addEventListener('click', handleCheckout);

    // Mobile Drawer Logic
    openDrawerBtn.addEventListener('click', () => {
        checkoutDrawer.classList.add('open');
    });

    closeDrawerBtn.addEventListener('click', () => {
        checkoutDrawer.classList.remove('open');
    });
    
    // Close when clicking handle or background overlay
    checkoutDrawer.addEventListener('click', (e) => {
        if (e.target === checkoutDrawer) {
            checkoutDrawer.classList.remove('open');
        }
    });

    // Mobile Navbar Logic
    const mobileMenuTrigger = document.getElementById('mobile-trigger');
    const navCenter = document.getElementById('nav-center');
    const navRight = document.getElementById('nav-right');

    if (mobileMenuTrigger && navCenter && navRight) {
        mobileMenuTrigger.addEventListener('click', () => {
            navCenter.classList.toggle('is-open');
            navRight.classList.toggle('is-open');
        });

        document.querySelectorAll('#nav-center a, #nav-right a').forEach(link => {
            link.addEventListener('click', () => {
                navCenter.classList.remove('is-open');
                navRight.classList.remove('is-open');
            });
        });
    }

    // Real-time visual validation
    const validateInput = (input) => {
        if (input.value.trim() !== '') {
            input.classList.remove('invalid-field');
            input.classList.add('valid-field');
        } else {
            input.classList.remove('valid-field');
        }
    };
    
    document.getElementById('customer-name').addEventListener('input', (e) => {
        validateInput(e.target);
        checkFormValidity();
    });
    document.getElementById('customer-address').addEventListener('input', (e) => {
        validateInput(e.target);
        checkFormValidity();
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.premium-navbar');
    /* window.addEventListener('scroll', ... ) removed for permanent glassmorphism */
}

function updateQuantity(id, change) {
    const currentQty = cart[id] || 0;
    const newQty = currentQty + change;

    if (newQty > 0) {
        cart[id] = newQty;
    } else {
        delete cart[id];
    }

    const qtyDisplay = document.getElementById(`qty-${id}`);
    if (qtyDisplay) {
        qtyDisplay.textContent = cart[id] || 0;
    }

    updateCartUI();
    checkFormValidity();
}

function updateCartUI() {
    let totalPrice = 0;
    let totalItems = 0;
    let summaryHTML = '';

    const cartIds = Object.keys(cart);

    if (cartIds.length === 0) {
        cartSummary.innerHTML = '<p class="cart-empty">TICKET VACÍO</p>';
    } else {
        cartIds.forEach(idStr => {
            const id = parseInt(idStr);
            const qty = cart[id];
            const item = menuItems.find(i => i.id === id);
            
            if(item) {
                const lineTotal = item.price * qty;
                totalPrice += lineTotal;
                totalItems += qty;
                
                summaryHTML += `
                    <div class="cart-row">
                        <span><strong>${qty}x</strong> ${item.name}</span>
                        <span>€${lineTotal.toFixed(2)}</span>
                    </div>
                `;
            }
        });
        cartSummary.innerHTML = summaryHTML;
    }

    const totalStr = `€${totalPrice.toFixed(2)}`;
    
    // Update Desktop
    totalPriceEl.textContent = totalStr;
    
    // Update Mobile Bottom Bar
    mobTotal.textContent = totalStr;
    mobQty.textContent = totalItems;

    // Show/Hide mobile bar if items exist using CSS class
    const mobBar = document.getElementById('mobile-cart-bar');
    if(totalItems > 0) {
        mobBar.classList.add('has-items');
    } else {
        mobBar.classList.remove('has-items');
        checkoutDrawer.classList.remove('open'); // close drawer if emptied
    }

    checkFormValidity();
}

function checkFormValidity() {
    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const hasItems = Object.keys(cart).length > 0;
    
    const isDelivery = document.querySelector('input[name="delivery"]:checked').value === 'delivery';
    let valid = true;
    if (!name) valid = false;
    if (isDelivery && !address) valid = false;
    if (!hasItems) valid = false;
    if (valid) {
        btnConfirm.removeAttribute('disabled');
    } else {
        btnConfirm.setAttribute('disabled', 'true');
    }
}

function handleCheckout() {
    const branchVal = document.querySelector('input[name="branch"]:checked').value;
    const deliveryVal = document.querySelector('input[name="delivery"]:checked').value;
    
    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const notes = document.getElementById('customer-notes').value.trim();

    if (!name || Object.keys(cart).length === 0) return;
    if (deliveryVal === 'delivery' && !address) return;

    const branchText = branchVal === 'rancho' ? "Rancho (Lepant 125)" : "House (Roger de Flor)";
    const deliveryText = deliveryVal === 'takeaway' ? "Retiro en local" : "Envío a domicilio";
    
    let itemsText = "";
    let totalPrice = 0;
    let totalQty = 0;

    Object.keys(cart).forEach(idStr => {
        const id = parseInt(idStr);
        const qty = cart[id];
        const item = menuItems.find(i => i.id === id);
        if(item) {
            const lineTotal = item.price * qty;
            totalPrice += lineTotal;
            totalQty += qty;
            itemsText += `- ${qty}x ${item.name} (€${lineTotal.toFixed(2)})\n`;
        }
    });

    let message = `Pedido La Baldosa

`;
    message += `📍 Retiro: ${branchText}\n`;
    message += `📦 Entrega: ${deliveryText}

`;
    message += `🥟 Detalle:\n${itemsText}\n`;
    message += `Total: €${totalPrice.toFixed(2)} (${totalQty} unid.)

`;
    message += `👤 Nombre: ${name}\n`;
    
    if (notes) {
        message += `\n📝 Notas: ${notes}`;
    }

    const phoneDest = "34684784550"; 
    const url = `https://wa.me/${phoneDest}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

init();
