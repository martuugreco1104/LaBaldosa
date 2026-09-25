// Datos del menú
const menuItems = [
    { id: 1, name: "4 Quesos", category: "Clásicas", desc: "Mezcla de cuatro quesos fundidos.", price: 2.50, img: "empanadas/BLDA6.png" },
    { id: 2, name: "Jamón y Queso", category: "Clásicas", desc: "Clásica de jamón cocido y queso mozzarella.", price: 2.50, img: "empanadas/BLDA4.png" },
    { id: 3, name: "Cebolla y Queso", category: "Clásicas", desc: "Cebolla caramelizada y mucho queso.", price: 2.50, img: "empanadas/BLDA3.png" },
    { id: 4, name: "Pollo", category: "Clásicas", desc: "Pollo jugoso con especias suaves.", price: 2.50, img: "empanadas/BLDA14.png" },
    { id: 5, name: "Humita", category: "Vegetarianas", desc: "Choclo cremoso tradicional.", price: 2.50, img: "empanadas/BLDA7.png" },
    { id: 6, name: "Roquefort y Jamón", category: "Especiales", desc: "El toque fuerte del roquefort con jamón.", price: 2.80, img: "empanadas/BLDA14.png" },
    { id: 7, name: "Zeitan Beef", category: "Vegetarianas", desc: "Alternativa vegana con mucho sabor.", price: 2.80, img: "empanadas/BLDA6.png" },
    { id: 8, name: "Caprese", category: "Vegetarianas", desc: "Queso, tomate y albahaca fresca.", price: 2.50, img: "empanadas/BLDA7.png" },
    { id: 9, name: "Vacío y Provoleta", category: "Especiales", desc: "Vacío desmechado, provoleta fundida.", price: 3.00, img: "empanadas/BLDA4.png" },
    { id: 10, name: "Dulce de Leche", category: "Especiales", desc: "Empanada dulce tradicional.", price: 2.50, img: "empanadas/BLDA6.png" },
    { id: 11, name: "Nutella y Brownie", category: "Especiales", desc: "Bomba dulce de chocolate.", price: 2.50, img: "empanadas/BLDA3.png" },
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
    card.className = 'menu-card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="menu-img" onerror="this.src='Empanada.png'">
        <div class="menu-content">
            <h3 class="menu-title">${item.name}</h3>
            <p class="menu-desc">${item.desc}</p>
        </div>
        <div class="menu-actions">
            <div class="menu-price">€${item.price.toFixed(2)}</div>
            <div class="stepper">
                <button class="stepper-btn minus" data-id="${item.id}">-</button>
                <div class="stepper-val" id="qty-${item.id}">${qty}</div>
                <button class="stepper-btn plus" data-id="${item.id}">+</button>
            </div>
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

        prevBtn.addEventListener('click', () => {
            currentIdx = (currentIdx > 0) ? currentIdx - 1 : slides.length - 1;
            showSlide(currentIdx);
        });

        nextBtn.addEventListener('click', () => {
            currentIdx = (currentIdx < slides.length - 1) ? currentIdx + 1 : 0;
            showSlide(currentIdx);
        });
    });

    // Formulario de validación
    form.addEventListener('input', checkFormValidity);
    document.querySelectorAll('input[name="delivery"]').forEach(el => {
        el.addEventListener('change', checkFormValidity);
    });
    
    btnConfirm.addEventListener('click', handleCheckout);

    // Mobile Drawer Logic
    openDrawerBtn.addEventListener('click', () => {
        checkoutDrawer.classList.add('open');
    });
    
    // Close when clicking handle or background overlay
    closeDrawerBtn.addEventListener('click', () => {
        checkoutDrawer.classList.remove('open');
    });
    checkoutDrawer.addEventListener('click', (e) => {
        if (e.target === checkoutDrawer) {
            checkoutDrawer.classList.remove('open');
        }
    });



    // Real-time visual validation
    const validateInput = (input) => {
        if (input.value.trim() !== '') {
            input.classList.remove('invalid-field');
            input.classList.add('valid-field');
        } else {
            input.classList.remove('valid-field');
            // Only add invalid if it's explicitly empty after typing, or let checkFormValidity handle it
        }
    };
    
    document.getElementById('customer-name').addEventListener('input', (e) => {
        validateInput(e.target);
        checkFormValidity();
    });
    document.getElementById('customer-phone').addEventListener('input', (e) => {
        validateInput(e.target);
        checkFormValidity();
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.premium-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
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
    const phone = document.getElementById('customer-phone').value.trim();
    const hasItems = Object.keys(cart).length > 0;
    
    if (name && phone && hasItems) {
        btnConfirm.removeAttribute('disabled');
    } else {
        btnConfirm.setAttribute('disabled', 'true');
    }
}

function handleCheckout() {
    const branchVal = document.querySelector('input[name="branch"]:checked').value;
    const deliveryVal = document.querySelector('input[name="delivery"]:checked').value;
    
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const notes = document.getElementById('customer-notes').value.trim();

    if (!name || !phone || Object.keys(cart).length === 0) return;

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

    let message = `Pedido La Baldosa\n\n`;
    message += `📍 Retiro: ${branchText}\n`;
    message += `📦 Entrega: ${deliveryText}\n\n`;
    message += `🥟 Detalle:\n${itemsText}\n`;
    message += `Total: €${totalPrice.toFixed(2)} (${totalQty} unid.)\n\n`;
    message += `👤 Nombre: ${name}\n`;
    message += `📞 Teléfono: ${phone}`;
    
    if (notes) {
        message += `\n📝 Notas: ${notes}`;
    }

    const phoneDest = "34684784550"; 
    const url = `https://wa.me/${phoneDest}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

init();
