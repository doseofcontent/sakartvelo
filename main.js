// Sakartvelo Skoniai, UAB - Main JavaScript File
// Handles all interactive elements, animations, and functionality

class GeorgianWineApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.setupFormValidation();
        this.initCarousels();
        this.setupWineFilters();
        this.initBookingSystem();
        this.setupScrollEffects();
    }

    // Event Listeners Setup
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Wine card hover effects
        document.querySelectorAll('.wine-card').forEach(card => {
            card.addEventListener('mouseenter', this.handleWineCardHover);
            card.addEventListener('mouseleave', this.handleWineCardLeave);
        });

        // Modal triggers
        document.querySelectorAll('[data-modal]').forEach(trigger => {
            trigger.addEventListener('click', this.openModal);
        });

        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', this.closeModal);
        });

        // Form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit);
        });
    }

    // Animation Initialization
    initAnimations() {
        // Hero text animation
        if (typeof anime !== 'undefined') {
            // Stagger text animation
            anime({
                targets: '.hero-title .char',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1400,
                delay: (el, i) => 100 + 30 * i
            });

            // Wine cards entrance animation
            anime({
                targets: '.wine-card',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: (el, i) => 200 + 100 * i
            });

            // Section reveal on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [30, 0],
                            opacity: [0, 1],
                            easing: 'easeOutExpo',
                            duration: 800
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }
    }

    // Wine Card Hover Effects
    handleWineCardHover(e) {
        const card = e.currentTarget;
        if (typeof anime !== 'undefined') {
            anime({
                targets: card,
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(114, 47, 55, 0.3)',
                easing: 'easeOutExpo',
                duration: 300
            });
        }
    }

    handleWineCardLeave(e) {
        const card = e.currentTarget;
        if (typeof anime !== 'undefined') {
            anime({
                targets: card,
                scale: 1,
                rotateY: 0,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                easing: 'easeOutExpo',
                duration: 300
            });
        }
    }

    // Modal Management
    openModal(e) {
        const modalId = e.currentTarget.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Animate modal entrance
            if (typeof anime !== 'undefined') {
                anime({
                    targets: modal.querySelector('.modal-content'),
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 400
                });
            }
        }
    }

    closeModal() {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: activeModal.querySelector('.modal-content'),
                    scale: [1, 0.8],
                    opacity: [1, 0],
                    easing: 'easeInExpo',
                    duration: 300,
                    complete: () => {
                        activeModal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            } else {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }

    // Form Validation and Handling
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', this.validateField);
                input.addEventListener('input', this.clearFieldError);
            });
        });
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Šis laukas yra privalomas';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Įveskite teisingą el. pašto adresą';
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Įveskite teisingą telefono numerį';
            }
        }

        this.setFieldValidation(field, isValid, errorMessage);
    }

    setFieldValidation(field, isValid, errorMessage) {
        const errorElement = field.parentNode.querySelector('.error-message');
        
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('valid');
            if (errorElement) errorElement.remove();
        } else {
            field.classList.remove('valid');
            field.classList.add('error');
            
            if (!errorElement) {
                const error = document.createElement('div');
                error.className = 'error-message';
                error.textContent = errorMessage;
                field.parentNode.appendChild(error);
            }
        }
    }

    clearFieldError(e) {
        const field = e.target;
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) errorElement.remove();
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate all fields
        const inputs = form.querySelectorAll('input, textarea, select');
        let isFormValid = true;
        
        inputs.forEach(input => {
            const event = new Event('blur');
            input.dispatchEvent(event);
            if (input.classList.contains('error')) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            this.submitForm(form, data);
        } else {
            this.showNotification('Patikrinkite įvestus duomenis', 'error');
        }
    }

    submitForm(form, data) {
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Siunčiama...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.showNotification('Užklausa išsiųsta sėkmingai!', 'success');
            form.reset();
        }, 2000);
    }

    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        if (typeof anime !== 'undefined') {
            anime({
                targets: notification,
                translateX: [300, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 400
            });
            
            setTimeout(() => {
                anime({
                    targets: notification,
                    translateX: [0, 300],
                    opacity: [1, 0],
                    easing: 'easeInExpo',
                    duration: 400,
                    complete: () => notification.remove()
                });
            }, 4000);
        } else {
            setTimeout(() => notification.remove(), 4000);
        }
    }

    // Carousel Initialization
    initCarousels() {
        if (typeof Splide !== 'undefined') {
            // Hero carousel
            const heroCarousel = document.querySelector('.hero-carousel');
            if (heroCarousel) {
                new Splide(heroCarousel, {
                    type: 'fade',
                    autoplay: true,
                    interval: 5000,
                    arrows: false,
                    pagination: true,
                    speed: 1000
                }).mount();
            }

            // Wine showcase carousel
            const wineCarousel = document.querySelector('.wine-carousel');
            if (wineCarousel) {
                new Splide(wineCarousel, {
                    type: 'loop',
                    perPage: 3,
                    perMove: 1,
                    gap: '2rem',
                    autoplay: true,
                    interval: 4000,
                    breakpoints: {
                        768: { perPage: 1 },
                        1024: { perPage: 2 }
                    }
                }).mount();
            }
        }
    }

    // Wine Shop Filtering
    setupWineFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const wineCards = document.querySelectorAll('.wine-card');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Filter wine cards
                wineCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filter === 'all' || cardCategory === filter) {
                        card.style.display = 'block';
                        if (typeof anime !== 'undefined') {
                            anime({
                                targets: card,
                                opacity: [0, 1],
                                scale: [0.8, 1],
                                easing: 'easeOutExpo',
                                duration: 400
                            });
                        }
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Booking System
    initBookingSystem() {
        const bookingForm = document.querySelector('#booking-form');
        const dateInput = document.querySelector('#booking-date');
        const timeSlots = document.querySelectorAll('.time-slot');
        const packageCards = document.querySelectorAll('.package-card');

        // Set minimum date to today
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        // Time slot selection
        timeSlots.forEach(slot => {
            slot.addEventListener('click', (e) => {
                timeSlots.forEach(s => s.classList.remove('selected'));
                e.target.classList.add('selected');
            });
        });

        // Package selection
        packageCards.forEach(card => {
            card.addEventListener('click', (e) => {
                packageCards.forEach(c => c.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                this.updateBookingPrice();
            });
        });
    }

    updateBookingPrice() {
        const selectedPackage = document.querySelector('.package-card.selected');
        const guestCount = document.querySelector('#guest-count')?.value || 2;
        
        if (selectedPackage) {
            const basePrice = parseFloat(selectedPackage.getAttribute('data-price'));
            const totalPrice = basePrice * Math.ceil(guestCount / 2);
            
            const priceDisplay = document.querySelector('#total-price');
            if (priceDisplay) {
                priceDisplay.textContent = `€${totalPrice.toFixed(2)}`;
            }
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });

            ticking = false;
        };

        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestScrollUpdate);
    }

    // Utility Functions
    static formatPrice(price) {
        return `€${parseFloat(price).toFixed(2)}`;
    }

    static formatDate(date) {
        return new Date(date).toLocaleDateString('lt-LT');
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Wine Data for the application
const wineData = {
    red: [
        {
            id: 1,
            name: 'Saperavi Premium',
            region: 'Kakheti',
            type: 'Red',
            price: 18.99,
            alcohol: '14%',
            description: 'Giliausios spalvos ir intensyvaus skonio raudonasis vynas, brandintas ąžuolinėse statinėse.',
            image: 'resources/saperavi-bottle.jpg',
            category: 'red'
        },
        {
            id: 2,
            name: 'Kindzmarauli',
            region: 'Kakheti',
            type: 'Red Semi-Sweet',
            price: 16.50,
            alcohol: '12.5%',
            description: 'Natūraliai saldus, šilkinio skonio vynas iš vėlyvojo derliaus Saperavi vynuogių.',
            image: 'resources/kindzmarauli-bottle.jpg',
            category: 'red'
        },
        {
            id: 3,
            name: 'Mukuzani Reserve',
            region: 'Kakheti',
            type: 'Red Dry',
            price: 22.00,
            alcohol: '14.5%',
            description: 'Aukščiausios klasės sausas raudonasis vynas, brandintas 3 metus ąžuolo statinėse.',
            image: 'resources/mukuzani-bottle.jpg',
            category: 'red'
        }
    ],
    amber: [
        {
            id: 4,
            name: 'Rkatsiteli Qvevri',
            region: 'Kakheti',
            type: 'Amber Dry',
            price: 19.99,
            alcohol: '13%',
            description: 'Tradiciniu metodu Qvevri inde brandintas gintarinis vynas su išskirtiniu skoniu.',
            image: 'resources/amber-wine-glass.jpg',
            category: 'amber'
        },
        {
            id: 5,
            name: 'Khikhvi Amber',
            region: 'Kakheti',
            type: 'Amber Dry',
            price: 21.50,
            alcohol: '12.8%',
            description: 'Retos Khikhvi vynuogės, brandintos 6 mėnesius Qvevri inde su žievelėmis.',
            image: 'resources/khikhvi-amber.jpg',
            category: 'amber'
        }
    ],
    white: [
        {
            id: 6,
            name: 'Tsinandali',
            region: 'Kakheti',
            type: 'White Dry',
            price: 15.99,
            alcohol: '12.5%',
            description: 'Elegantiškas baltasis vynas iš Rkatsiteli ir Mtsvane vynuogių mišinio.',
            image: 'resources/tsinandali-bottle.jpg',
            category: 'white'
        },
        {
            id: 7,
            name: 'Mtsvane',
            region: 'Kakheti',
            type: 'White Dry',
            price: 14.50,
            alcohol: '12%',
            description: 'Aromatingas baltasis vynas su vaisių ir gėlių natomis.',
            image: 'resources/mtsvane-bottle.jpg',
            category: 'white'
        }
    ]
};

// Food Menu Data
const menuData = {
    appetizers: [
        {
            id: 1,
            name: 'Khachapuri (Adžarų)',
            description: 'Tradicinė gruziniška sūrio duona su kiaušiniu ir sviestu',
            price: 8.50,
            image: 'resources/khachapuri-traditional.jpg',
            winePairing: 'Tsinandali'
        },
        {
            id: 2,
            name: 'Khinkali (10vnt.)',
            description: 'Tradiciniai gruziniški virtinukai su jautiena ir sultiniu',
            price: 12.00,
            image: 'resources/khinkali-plate.jpg',
            winePairing: 'Saperavi'
        },
        {
            id: 3,
            name: 'Pkhali (3 rūšys)',
            description: 'Daržovių užkandžiai su riešutų padažu: špinatų, burokėlių ir morkų',
            price: 9.50,
            image: 'resources/pkhali-selection.jpg',
            winePairing: 'Mtsvane'
        }
    ],
    main: [
        {
            id: 4,
            name: 'Chashushuli',
            description: 'Troškinta jautiena su pomidorais ir prieskoniais',
            price: 16.00,
            image: 'resources/chashushuli-dish.jpg',
            winePairing: 'Saperavi Premium'
        },
        {
            id: 5,
            name: 'Chakhokhbili',
            description: 'Vištiena troškinta pomidorų ir žolelių padaže',
            price: 14.50,
            image: 'resources/chakhokhbili-dish.jpg',
            winePairing: 'Kindzmarauli'
        }
    ],
    desserts: [
        {
            id: 6,
            name: 'Churchkhela (3 vnt.)',
            description: 'Tradiciniai gruziniški saldainiai iš riešutų ir vynuogių sūrio',
            price: 6.50,
            image: 'resources/churchkhela-traditional.jpg',
            winePairing: 'Kindzmarauli'
        },
        {
            id: 7,
            name: 'Pelamushi',
            description: 'Desertas iš vynuogių sūrio su riešutais',
            price: 5.50,
            image: 'resources/pelamushi-dessert.jpg',
            winePairing: 'Amber Wine'
        }
    ]
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GeorgianWineApp();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GeorgianWineApp, wineData, menuData };
}