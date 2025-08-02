// navbar scroll effect

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 550) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


        // Initialize wow.js
        new WOW().init();
        
        // Initialize Owl Carousel for featured products
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
        
        // Initialize Owl Carousel for testimonials
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
        
        // Countdown timer for special offer
        function updateCountdown() {
            const now = new Date();
            const endDate = new Date();
            endDate.setDate(now.getDate() + 7); // Set to 7 days from now
            
            const diff = endDate - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Update countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);