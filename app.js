// Datos del menú
const menuItems = [
    // CLÁSICAS
    { id: 1, name: "Ternera Suave", category: "Clásicas", desc: "Carne de ternera picada, pimientos, cebolla, cebolla tierna, huevo duro, olivas verdes, comino y pimentón dulce.", price: 3.50, img: "empanadas/BLDA6.webp" },
    { id: 2, name: "Ternera Picante", category: "Clásicas", desc: "Carne de ternera picada, pimientos, cebolla, cebolla tierna, huevo, olivas verdes, comino, pimentón dulce y ají molido picante.", price: 3.50, img: "empanadas/BLDA4.webp" },
    { id: 3, name: "Pollo", category: "Clásicas", desc: "Pechuga de pollo, pimientos, tomate, cebolla tierna, huevo duro y pimentón dulce.", price: 3.50, img: "empanadas/BLDA14.webp" },
    { id: 4, name: "Jamón y Queso", category: "Clásicas", desc: "Empanada rellena con jamón cocido natural, queso emmental, mozzarella, provolone, parmesano.", price: 3.50, img: "empanadas/BLDA3.webp" },
    { id: 5, name: "Cebolla y Queso", category: "Clásicas", desc: "Cebollas caramelizadas, queso emmental, mozzarella, provolone, parmesano y cebollino.", price: 3.50, img: "empanadas/BLDA7.webp" },
    
    // ESPECIALES
    { id: 6, name: "Vacío y Provoleta", category: "Especiales", desc: "Vacío tiernizado en larga cocción, con chimichurri, pimiento asado y provoleta.", price: 3.50, img: "empanadas/BLDA4.webp" },
    { id: 7, name: "Ternera Malbec", category: "Especiales", desc: "Carne de ternera braseada, cebolla, puerro, setas y reducción de vino Malbec.", price: 3.50, img: "empanadas/BLDA6.webp" },
    { id: 8, name: "Pulled Pork", category: "Especiales", desc: "Cerdo braseado, barbacoa, pimientos, cebolla, mango y bacon.", price: 3.50, img: "empanadas/BLDA14.webp" },
    { id: 9, name: "Roquefort y Jamón", category: "Especiales", desc: "Roquefort, jamón cocido, mozzarella, provolone, emmental, parmesano, cebollas caramelizadas y cebollino.", price: 3.50, img: "empanadas/BLDA7.webp" },
    { id: 10, name: "Setas y Pecorino", category: "Especiales", desc: "Champiñón, portobello, shiitakes y enokis, tomillo fresco, queso trufado y pecorino.", price: 3.50, img: "empanadas/BLDA3.webp" },
    { id: 11, name: "Dulce de Leche", category: "Especiales", desc: "Bizcocho de tres leches, dulce de leche y merengue.", price: 3.50, img: "empanadas/BLDA6.webp" },
    { id: 12, name: "Nutella y Brownie", category: "Especiales", desc: "Nutella y brownie fudge.", price: 3.50, img: "empanadas/BLDA4.webp" },

    // VEGGIES
    { id: 13, name: "4 Quesos", category: "Vegetarianas", desc: "Queso emmental, mozzarella, pecorino y provolone.", price: 3.50, img: "empanadas/BLDA6.webp" },
    { id: 14, name: "Humita", category: "Vegetarianas", desc: "Rellena con granos de maíz amarillo, calabaza, pimientos, cebolla, cebolla tierna, variedad de quesos y albahaca fresca.", price: 3.50, img: "empanadas/BLDA7.webp" },
    { id: 15, name: "Caprese", category: "Vegetarianas", desc: "Queso emmental, mozzarella, provolone, parmesano, albahaca fresca y variedad de tomates cherry.", price: 3.50, img: "empanadas/BLDA3.webp" },
    { id: 16, name: "Espinaca", category: "Vegetarianas", desc: "Espinaca baby, pimientos, cebolla, puerro, verdeo, salsa bechamel, variedad de quesos y huevo duro.", price: 3.50, img: "empanadas/BLDA14.webp" },
    { id: 17, name: "Seitán Beef", category: "Vegetarianas", desc: "Seitán, pimientos, cebolla, cebolla tierna, olivas verdes, comino y pimentón dulce.", price: 3.50, img: "empanadas/BLDA4.webp" },

    // BEBIDAS (Frías y de bar)
    { id: 18, name: "Estrella Galicia", category: "Bebidas", desc: "Cerveza, lata 330ml.", price: 2.00, img: "empanadas/BLDA14.webp" },
    { id: 19, name: "Vermú", category: "Bebidas", desc: "Vermú de la casa.", price: 2.70, img: "empanadas/BLDA7.webp" },
    
    // CAFECITO (Cafetería, Infusiones, Panadería)
    { id: 20, name: "Espresso", category: "Cafecito", desc: "Café espresso corto e intenso.", price: 1.50, img: "cafe/coffe.png" },
    { id: 21, name: "Americano", category: "Cafecito", desc: "Espresso doble con agua caliente.", price: 1.60, img: "cafe/coffe.png" },
    { id: 22, name: "Cortado", category: "Cafecito", desc: "Espresso cortado con un toque de leche.", price: 1.70, img: "cafe/coffe.png" },
    { id: 23, name: "Latte", category: "Cafecito", desc: "Café espresso suave con abundante leche.", price: 1.90, img: "cafe/late.jpeg" },
    { id: 24, name: "Capuccino", category: "Cafecito", desc: "Espresso con leche texturizada y espuma cremosa.", price: 1.90, img: "cafe/late.jpeg" },
    { id: 25, name: "Flatwhite", category: "Cafecito", desc: "Doble shot de espresso con leche microespumada.", price: 2.30, img: "cafe/coffe.png" },
    { id: 26, name: "Iced Latte", category: "Cafecito", desc: "Café espresso con leche fría y hielo.", price: 2.70, img: "cafe/late.jpeg" },
    { id: 27, name: "Rooibos Vainilla Orgánico", category: "Cafecito", desc: "Infusión orgánica.", price: 1.80, img: "cafe/coffe.png" },
    { id: 28, name: "Negro Chai Orgánico", category: "Cafecito", desc: "Infusión orgánica.", price: 1.80, img: "cafe/coffe.png" },
    { id: 29, name: "Té Verde Orgánico", category: "Cafecito", desc: "Infusión orgánica.", price: 1.80, img: "cafe/coffe.png" },
    { id: 30, name: "Manzanilla Orgánico", category: "Cafecito", desc: "Infusión orgánica.", price: 1.80, img: "cafe/coffe.png" },
    { id: 31, name: "Menta Orgánico", category: "Cafecito", desc: "Infusión orgánica.", price: 1.80, img: "cafe/coffe.png" },
    { id: 32, name: "Medialuna", category: "Cafecito", desc: "Medialuna dulce tradicional de manteca.", price: 2.20, img: "cafe/coffe.png" },
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

    if (mobileMenuTrigger && navCenter) {
        // Abrir el overlay al tocar hamburguesa
        mobileMenuTrigger.addEventListener('click', () => {
            navCenter.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });

        // Cerrar con la X
        const navCloseBtn = document.getElementById('nav-close-btn');
        if (navCloseBtn) {
            navCloseBtn.addEventListener('click', () => {
                navCenter.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        }

        // Cerrar al tocar cualquier link
        document.querySelectorAll('#nav-center a').forEach(link => {
            link.addEventListener('click', () => {
                navCenter.classList.remove('is-open');
                document.body.style.overflow = '';
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


    // FIX 4: Scroll input into view on mobile when keyboard appears
    document.querySelectorAll('.clean-form input').forEach(function(input) {
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 899) {
                setTimeout(function() {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 320);
            }
        });
    });

    // FIX 5: Visual feedback en local seleccionado
    var branchInputs = document.querySelectorAll('[name=branch]');
    function updateBranchLabels() {
        branchInputs.forEach(function(input) {
            var label = input.closest('.radio-label');
            if (label) {
                if (input.checked) { label.classList.add('is-selected'); }
                else { label.classList.remove('is-selected'); }
            }
        });
    }
    branchInputs.forEach(function(input) { input.addEventListener('change', updateBranchLabels); });
    updateBranchLabels();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.premium-navbar');
    /* window.addEventListener('scroll', ... ) removed for permanent glassmorphism */
}

function updateQuantity(id, change) {
    const currentQty = cart[id] || 0;
    const newQty = currentQty + change;
    const wasEmpty = Object.keys(cart).length === 0;

    if (newQty > 0) {
        cart[id] = newQty;
    } else {
        delete cart[id];
    }

    const qtyDisplay = document.getElementById(`qty-${id}`);
    if (qtyDisplay) {
        qtyDisplay.textContent = cart[id] || 0;

        // FIX 1: Microanimacion en la card al cambiar cantidad
        const card = qtyDisplay.closest('.menu-card');
        if (card) {
            card.classList.remove('qty-active', 'qty-zero');
            void card.offsetWidth;
            if (cart[id] > 0) {
                card.classList.add('qty-active');
            } else {
                card.classList.add('qty-zero');
                setTimeout(function() { card.classList.remove('qty-zero'); }, 400);
            }
        }
    }

    // FIX 3: Animacion panel al agregar primer item (Desktop)
    const ticket = document.querySelector('.checkout-ticket');
    if (ticket) {
        const isNowFirstItem = wasEmpty && Object.keys(cart).length > 0;
        if (isNowFirstItem) {
            ticket.classList.remove('first-item');
            void ticket.offsetWidth;
            ticket.classList.add('first-item');
            setTimeout(function() { ticket.classList.remove('first-item'); }, 500);
        }
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
        cartSummary.innerHTML = '';
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
