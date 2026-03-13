/* ========================================
   SHAHEEN EMIRATES CAR RENTAL
   Professional JavaScript File
   ======================================== */

// ===== DATA OBJECTS =====

// Car data
const CARS_DATA = [
    {
        id: 1,
        name: 'Hyundai Accent ',
        price: 110,
        image: '<img src="images/ecsent.jpg" alt="Hyundai Accent" class="car-image">',
        features: ['5-Seater', 'AC', 'Automatic', 'Power Steering']
    },
    {
        id: 2,
        name: 'Nissan Sunny',
        price: 90,
        image: '<img src="images/sunny.jpg" alt="Nisan sunny" class="car-image">',
        features: ['5-Seater', 'AC', 'Manual', 'ABS']
    },
    {
        id: 3,
        name: 'Kia K4',
        price: 150,
        image: '<img src="images/k4.jpg" alt="kia k4" class="car-image">',
        features: ['5-Seater', 'AC', 'Automatic', 'Leather Seats']
    },
    {
        id: 4,
        name: 'Hyundai Creta',
        price: 100 ,
        image: '<img src="images/creta.jpg" alt="Hyundai Creta" class="car-image">',
        features: ['5-Seater', 'AC', 'Automatic', 'Luxury']
    },
    {
        id: 5,
        name: 'Kia Carens',
        price: 140,
        image: '<img src="images/carens.jpg" alt="Kia Carens" class="car-image">',
        features: ['7-Seater', 'AC', 'Automatic', 'SUV']
    },
    {
        id: 6,
        name: 'Hyundai Elantra',
        price: 110,
        image: '<img src="images/elantra2.jpg" alt="Hyundai Elantra" claas=" car-image">',
        features: ['5-Seater', 'AC', 'Manual', 'Budget-Friendly']
    }
];

// Why Choose Us data
const WHY_CHOOSE_DATA = [
    {
        icon: '💰',
        title: 'Competitive Prices',
        description: 'Best rates in Abu Dhabi with transparent pricing and no hidden charges'
    },
    {
        icon: '✨',
        title: 'Clean & New Cars',
        description: 'Modern, well-maintained vehicles regularly serviced for your safety'
    },
    {
        icon: '⚡',
        title: 'Easy Booking',
        description: 'Simple, fast booking process with instant confirmation'
    },
    {
        icon: '📞',
        title: '24/7 Support',
        description: 'Professional customer support available round the clock'
    },
    {
        icon: '🚚',
        title: 'Delivery Available',
        description: 'Free car delivery to your location in Abu Dhabi'
    },
    {
        icon: '🛡️',
        title: 'Insurance Included',
        description: 'Comprehensive coverage options for your peace of mind'
    }
];

// Reviews data
const REVIEWS_DATA = [
    {
        stars: 5,
        text: 'Excellent service and friendly staff! The booking process was smooth and the car was in perfect condition.',
        author: 'Adnan Hasan'
    },
    {
        stars: 5,
        text: 'Great prices and amazing service. The delivery was quick and the car was spotless. Will definitely rent again!',
        author: 'Sarah Mohammed'
    },
    {
        stars: 5,
        text: 'Modern and clean cars with professional staff. Best car rental experience in Abu Dhabi!',
        author: 'Ahmed Al-Mansouri'
    }
];

// ===== DOM ELEMENTS =====
const carsGrid = document.getElementById('carsGrid');
const whyGrid = document.getElementById('whyGrid');
const reviewsGrid = document.getElementById('reviewsGrid');
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const carSelect = document.getElementById('carSelect');
const pickupDate = document.getElementById('pickupDate');
const dropoffDate = document.getElementById('dropoffDate');
const backToTopBtn = document.getElementById('backToTopBtn');
const langBtn = document.getElementById('langBtn');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚗 Shaheen Emirates - Website Loaded');
    
    // Initialize all components
    renderCars();
    renderWhyChoose();
    renderReviews();
    populateCarSelect();
    setupEventListeners();
    setMinimumDates();
    setupScrollAnimations();
    setupNavigation();
    setupBackToTop();
});

// ===== RENDER FUNCTIONS =====

/**
 * Render cars grid
 */
function renderCars() {
    if (!carsGrid) return;
    
    carsGrid.innerHTML = CARS_DATA.map(car => `
        <div class="car-card">
            <div class="car-image">${car.image}</div>
            <div class="car-body">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-price">
                    AED ${car.price}
                    <small>/day</small>
                </div>
                <ul class="car-features">
                    ${car.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button class="btn btn-primary" onclick="selectCar('${car.name}', ${car.price})">
                    <span class="btn-icon">📅</span> Book Now
                </button>
            </div>
        </div>
    `).join('');
    
    console.log('✓ Cars rendered');
}

/**
 * Render why choose us section
 */
function renderWhyChoose() {
    if (!whyGrid) return;
    
    whyGrid.innerHTML = WHY_CHOOSE_DATA.map(item => `
        <div class="why-item">
            <div class="why-icon">${item.icon}</div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        </div>
    `).join('');
    
    console.log('✓ Why Choose Us rendered');
}

/**
 * Render reviews section
 */
function renderReviews() {
    if (!reviewsGrid) return;
    
    reviewsGrid.innerHTML = REVIEWS_DATA.map(review => `
        <div class="review-card">
            <div class="review-stars">
                ${'⭐'.repeat(review.stars)}
            </div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">— ${review.author}</p>
        </div>
    `).join('');
    
    console.log('✓ Reviews rendered');
}

/**
 * Populate car select dropdown
 */
function populateCarSelect() {
    if (!carSelect) return;
    
    const options = CARS_DATA.map(car => 
        `<option value="${car.name} - AED ${car.price}/day">${car.name} - AED ${car.price}/day</option>`
    ).join('');
    
    carSelect.innerHTML = '<option value="">-- Choose a car --</option>' + options;
    
    console.log('✓ Car select populated');
}

// ===== MODAL FUNCTIONS =====

/**
 * Open booking modal
 */
function openBookingModal() {
    if (!bookingModal) return;
    
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('📋 Booking modal opened');
}

/**
 * Close booking modal
 */
function closeBookingModal() {
    if (!bookingModal) return;
    
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    console.log('📋 Booking modal closed');
}

/**
 * Close modal when clicking outside
 */
window.addEventListener('click', function(event) {
    if (event.target == bookingModal) {
        closeBookingModal();
    }
});

// ===== CAR SELECTION =====

/**
 * Select a car for booking
 */
function selectCar(carName, price) {
    if (carSelect) {
        carSelect.value = `${carName} - AED ${price}/day`;
    }
    openBookingModal();
    console.log(`🚗 Selected: ${carName} - AED ${price}/day`);
}

// ===== FORM HANDLING =====

/**
 * Setup form event listeners
 */
function setupEventListeners() {
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    if (pickupDate && dropoffDate) {
        pickupDate.addEventListener('change', validateDates);
        dropoffDate.addEventListener('change', validateDates);
    }
}

/**
 * Validate pickup and dropoff dates
 */
function validateDates() {
    if (!pickupDate.value || !dropoffDate.value) return;
    
    const pickup = new Date(pickupDate.value);
    const dropoff = new Date(dropoffDate.value);
    
    if (dropoff <= pickup) {
        dropoffDate.value = '';
        alert('Dropoff date must be after pickup date');
        console.warn('⚠️ Invalid date selection');
    }
}

/**
 * Set minimum dates for date inputs
 */
function setMinimumDates() {
    const today = new Date().toISOString().split('T')[0];
    
    if (pickupDate) {
        pickupDate.setAttribute('min', today);
        pickupDate.addEventListener('change', function() {
            if (dropoffDate) {
                dropoffDate.setAttribute('min', this.value);
            }
        });
    }
    
    if (dropoffDate) {
        dropoffDate.setAttribute('min', today);
    }
    
    console.log('✓ Minimum dates set');
}

/**
 * Handle booking form submission
 */
function handleBookingSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const fullName = document.getElementById('fullName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const car = carSelect.value;
    const pickup = pickupDate.value;
    const dropoff = dropoffDate.value;
    const email = document.getElementById('email').value.trim();
    const notes = document.getElementById('notes').value.trim();
    
    // Validate
    if (!fullName || !phoneNumber || !car || !pickup || !dropoff) {
        alert('Please fill in all required fields');
        console.warn('⚠️ Form validation failed');
        return;
    }
    
    // Calculate rental days
    const pickupDateObj = new Date(pickup);
    const dropoffDateObj = new Date(dropoff);
    const days = Math.ceil((dropoffDateObj - pickupDateObj) / (1000 * 60 * 60 * 24));
    
    if (days <= 0) {
        alert('Dropoff date must be after pickup date');
        console.warn('⚠️ Invalid date range');
        return;
    }
    
    // Create booking message
    const message = `
🚗 *Shaheen Emirates Car Rental - Booking Request*

*Customer Details:*
Name: ${fullName}
Phone: ${phoneNumber}
Email: ${email || 'Not provided'}

*Rental Details:*
Car: ${car}
Pickup Date: ${formatDate(pickup)}
Dropoff Date: ${formatDate(dropoff)}
Duration: ${days} day(s)

*Special Requests:*
${notes || 'None'}

Please confirm this booking. Thank you!
    `.trim();
    
    // Send via WhatsApp
    sendViaWhatsApp(phoneNumber, message);
    
    // Reset form
    resetBookingForm();
    
    // Close modal
    setTimeout(closeBookingModal, 1000);
}

/**
 * Send message via WhatsApp
 */
function sendViaWhatsApp(phoneNumber, message) {
    const businessPhone = '+971522077558';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    console.log('✓ WhatsApp message sent');
}

/**
 * Reset booking form
 */
function resetBookingForm() {
    if (bookingForm) {
        bookingForm.reset();
    }
    console.log('✓ Form reset');
}

// ===== UTILITY FUNCTIONS =====

/**
 * Format date for display
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Calculate rental cost
 */
function calculateRentalCost(pricePerDay, days) {
    return pricePerDay * days;
}

/**
 * Format currency to AED
 */
function formatAED(amount) {
    return 'AED ' + amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// ===== SCROLL ANIMATIONS =====

/**
 * Setup scroll animations for sections
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    console.log('✓ Scroll animations setup');
}

// ===== NAVIGATION =====

/**
 * Setup navigation functionality
 */
function setupNavigation() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 20, 25, 0.99)';
            navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 20, 25, 0.98)';
            navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.2)';
        }
    });
    
    // Active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-link').forEach(l => {
                l.style.color = 'var(--color-text-light)';
            });
            this.style.color = 'var(--color-accent-gold)';
        });
    });
    
    console.log('✓ Navigation setup');
}

// ===== BACK TO TOP BUTTON =====

/**
 * Setup back to top button
 */
function setupBackToTop() {
    window.addEventListener('scroll', function() {
        if (!backToTopBtn) return;
        
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    console.log('✓ Back to top button setup');
}

/**
 * Scroll to top smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    console.log('⬆️ Scrolling to top');
}

// ===== LANGUAGE TOGGLE =====

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    
    if (currentLang === 'en') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        if (langBtn) langBtn.textContent = 'English';
        console.log('🌍 Language changed to Arabic');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (langBtn) langBtn.textContent = 'عربي';
        console.log('🌍 Language changed to English');
    }
}

// ===== ANALYTICS & LOGGING =====

/**
 * Log event for analytics
 */
function logEvent(eventName, eventData = {}) {
    console.log(`📊 Event: ${eventName}`, eventData);
    
    // Uncomment for Google Analytics integration:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// ===== ERROR HANDLING =====

window.addEventListener('error', function(event) {
    console.error('❌ Error:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('❌ Unhandled Promise Rejection:', event.reason);
});

// ===== PAGE LOAD COMPLETE =====

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('✓ Page fully loaded');
    console.log('🎉 Shaheen Emirates website is ready!');
});