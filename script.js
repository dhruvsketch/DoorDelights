// --- INDIAN MENU DATA ---
const menuData = [
    // ============================================
    // === BREAKFAST / SNACKS (10 Items) ===
    // ============================================
    {
        id: 1,
        name: "Golden Aloo Paratha",
        category: "breakfast",
        price: 8.99,
        img: "img/img.4.png",
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with curd and pickle."
    },
    {
        id: 2,
        name: "Crispy Masala Dosa",
        category: "breakfast",
        price: 10.99,
        img: "img/img.2.png",
        description: "Fermented rice & lentil crepe filled with spiced potato filling, served with sambar."
    },
    {
        id: 3,
        name: "Steamed Idli Sambar",
        category: "breakfast",
        price: 7.99,
        img: "img/img.3.png",
        description: "Soft fluffy rice cakes served with hot lentil stew (sambar) and coconut chutney."
    },
    {
        id: 4,
        name: "Punjabi Poha",
        category: "breakfast",
        price: 6.99,
        img: "https://images.unsplash.com/photo-1630409351217-bc4fa6422075?auto=format&fit=crop&w=600&q=80",
        description: "Flattened rice cooked with onions, peanuts, and mild spices, topped with sev."
    },
    {
        id: 5,
        name: "Gobi Paratha",
        category: "breakfast",
        price: 9.49,
        img: "img/img.4.png",
        description: "Whole wheat bread stuffed with spiced cauliflower, cooked on tawa with ghee."
    },
    {
        id: 6,
        name: "Chole Bhature",
        category: "breakfast",
        price: 11.99,
        img: "img/img.5.png",
        description: "Spiced white chickpeas curry served with fluffy deep-fried bread (bhatura)."
    },
    {
        id: 7,
        name: "Puri Sabzi",
        category: "breakfast",
        price: 8.49,
        img: "img/img.6.png",
        description: "Deep-fried puffy bread (puri) served with potato-based spicy curry (sabzi)."
    },
    {
        id: 8,
        name: "Onion Uttapam",
        category: "breakfast",
        price: 9.99,
        img: "img/img.7.png",
        description: "Thick rice-lentil pancake topped with chopped onions, tomatoes, and green chilies."
    },
    {
        id: 9,
        name: "Methi Thepla",
        category: "breakfast",
        price: 7.49,
        img: "img/img.8.png",
        description: "Gujarati flatbread made with fresh fenugreek leaves and yogurt."
    },
    {
        id: 10,
        name: "Bedmi Puri",
        category: "breakfast",
        price: 8.99,
        img: "img/img.9.png",
        description: "Spicy deep-fried flatbread made from wheat and lentil dough, served with potato curry."
    },

    // ============================================
    // === LUNCH / MAIN COURSES (10 Items) ===
    // ============================================
    {
        id: 11,
        name: "Butter Chicken",
        category: "lunch",
        price: 16.99,
        img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        description: "Tender chicken in creamy tomato-based gravy with butter and aromatic spices."
    },
    {
        id: 12,
        name: "Dal Makhani",
        category: "lunch",
        price: 12.99,
        img: "img/img.10.png",
        description: "Slow-cooked black lentils & kidney beans in rich, creamy tomato gravy."
    },
    {
        id: 13,
        name: "Chicken 65",
        category: "lunch",
        price: 14.99,
        img: "img/img.11.png",
        description: "Spicy deep-fried chicken bursting with curry leaves and green chilies."
    },
    {
        id: 14,
        name: "Roti & Paneer Makhani",
        category: "lunch",
        price: 13.99,
        img: "img/img.12.png",
        description: "Soft whole wheat roti served with cottage cheese in creamy gravy."
    },
    {
        id: 15,
        name: "Hyderabadi Dum Biryani",
        category: "lunch",
        price: 18.99,
        img: "DoorDelights/img/img.15.png",
        description: "Layers of basmati rice & succulent meat cooked with saffron in dum style."
    },
    {
        id: 16,
        name: "Palak Paneer",
        category: "lunch",
        price: 13.49,
        img: "img/img.13.png",
        description: "Cottage cheese cubes in smooth, creamy spinach gravy with ginger."
    },
    {
        id: 17,
        name: "Chicken Tikka Masala",
        category: "lunch",
        price: 17.49,
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
        description: "Grilled tandoori chicken chunks in rich, spiced onion-tomato creamy gravy."
    },
    {
        id: 18,
        name: "Shahi Paneer",
        category: "lunch",
        price: 14.99,
        img: "img/img.14.png",
        description: "Royal cottage cheese curry made with nuts, cream, and aromatic spices."
    },
    {
        id: 19,
        name: "Vegetable Biryani",
        category: "lunch",
        price: 12.99,
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        description: "Fragrant basmati rice layered with mixed vegetables and biryani spices."
    },
    {
        id: 20,
        name: "Egg Curry",
        category: "lunch",
        price: 11.99,
        img: "img/img.16.png",
        description: "Hard-boiled eggs cooked in spiced onion and tomato gravy."
    },

    // ============================================
    // === DINNER / TANDOOR / CURRIES (10 Items) ===
    // ============================================
    {
        id: 21,
        name: "Tandoori Roti",
        category: "dinner",
        price: 2.99,
        img: "img/img.17.png",
        description: "Traditional whole wheat bread baked in the authentic tandoor clay oven."
    },
    {
        id: 22,
        name: "Tandoori Chicken Full",
        category: "dinner",
        price: 21.99,
        img: "img/img.18.png",
        description: "Half chicken marinated in yogurt and spices, grilled to perfection in tandoor."
    },
    {
        id: 23,
        name: "Chicken Chettinad",
        category: "dinner",
        price: 17.99,
        img: "img/img.19.png",
        description: "Fiery Tamil Nadu curry made with freshly ground chettinad spices."
    },
    {
        id: 24,
        name: "Fish Fry Meen Varuval",
        category: "dinner",
        price: 16.49,
        img: "img/img.20.png",
        description: "Crispy fried fish marinated in aromatic South Indian masala."
    },
    {
        id: 25,
        name: "Kadahi Paneer",
        category: "dinner",
        price: 14.99,
        img: "img/img.21.png",
        description: "Cottage cheese cooked in a traditional wok with onions and tomato gravy."
    },
    {
        id: 26,
        name: "Butter Garlic Naan",
        category: "dinner",
        price: 3.99,
        img: "img/img.22.png",
        description: "Soft leavened bread baked in tandoor, brushed with butter and garlic."
    },
    {
        id: 27,
        name: "Lamb Curry",
        category: "dinner",
        price: 19.99,
        img: "img/img.23.png",
        description: "Tender lamb pieces cooked in traditional onion-gravy with aromatic spices."
    },
    {
        id: 28,
        name: "Prawns Masala",
        category: "dinner",
        price: 18.99,
        img: "img/img.24.png",
        description: "Succulent prawns tossed in spiced tomato and onion masala."
    },
    {
        id: 29,
        name: "Chicken Lollipop",
        category: "dinner",
        price: 15.99,
        img: "img/img.25.png",
        description: "Deep-fried chicken wings in hot and Indo-Chinese spicy sauce."
    },
    {
        id: 30,
        name: "Malai Kofta",
        category: "dinner",
        price: 13.99,
        img: "img/img.26.png",
        description: "Cottage cheese and potato dumplings in creamy white gravy."
    }
];

// --- STATE ---
let cart = [];

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
});

// --- RENDER MENU ---
function renderMenu(items) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = items.map(item => `
        <div class="menu-card">
            <div class="card-img" style="background-image: url('${item.img}')"></div>
            <div class="card-body">
                <span class="card-category">${item.category}</span>
                <h3 class="card-title">${item.name}</h3>
                <p style="font-size: 0.9rem; color: #666;">${item.description}</p>
                <div class="card-price">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// --- FILTER MENU ---
function filterMenu(category) {
    // Update active button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter items
    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// --- CART FUNCTIONS ---
function addToCart(id) {
    const item = menuData.find(p => p.id === id);
    const existingItem = cart.find(p => p.id === id);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    
    updateCartUI();
}

function updateCartUI() {
    // Update badge count
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = count;

    // Update sidebar list
    const cartContainer = document.getElementById('cart-items');
    if (count === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        document.getElementById('total-price').innerText = '$0.00';
        return;
    }

    let total = 0;
    cartContainer.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        return `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <small>$${item.price} x ${item.qty}</small>
                </div>
                <div>
                    <b>$${(item.price * item.qty).toFixed(2)}</b>
                    <i class="fas fa-trash" style="color: red; margin-left: 10px; cursor: pointer;" onclick="removeFromCart(${item.id})"></i>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('total-price').innerText = '$' + total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function toggleCart() {
    document.querySelector('.cart-sidebar').classList.toggle('active');
    document.querySelector('.cart-overlay').style.display = 
        document.querySelector('.cart-sidebar').classList.contains('active') ? 'block' : 'none';
}

// --- Mobile Navigation ---
function openMobileNav() {
    const panel = document.getElementById('mobile-nav');
    const btn = document.querySelector('.mobile-menu');
    if (!panel || !btn) return;

    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
    const panel = document.getElementById('mobile-nav');
    const btn = document.querySelector('.mobile-menu');
    if (!panel || !btn) return;

    panel.classList.remove('active');
    panel.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.mobile-menu');
    const panel = document.getElementById('mobile-nav');

    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
        const isOpen = panel.classList.contains('active');
        if (isOpen) closeMobileNav();
        else openMobileNav();
    });

    // Close when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMobileNav();
    });
});
