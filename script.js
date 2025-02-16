document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navRight = document.querySelector(".nav-right");

    if (menuToggle && navRight) {
        menuToggle.addEventListener("click", function () {
            navRight.classList.toggle("active");

            // Rotate menu button for animation
            if (navRight.classList.contains("active")) {
                menuToggle.innerHTML = "✖"; // Change to close icon
                menuToggle.style.transform = "rotate(90deg)";
            } else {
                menuToggle.innerHTML = "☰"; // Change back to hamburger
                menuToggle.style.transform = "rotate(0deg)";
            }
        });
    }
});

// Function to open the popup modal
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Function to close the popup modal
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// Open Social Media Popup
function openSocialPopup() {
    document.getElementById("social-popup").style.display = "block";
}

// Close Social Media Popup
function closeSocialPopup() {
    document.getElementById("social-popup").style.display = "none";
}
// Testimonials Sliding Effect with Ultra-Smooth Animation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out"; // Smoothest transition

        if (i === index) {
            t.classList.add("active");
            t.style.opacity = "1"; // Fade in
            t.style.transform = "translateY(0) scale(1)"; // Slide & scale effect
        } else {
            t.classList.remove("active");
            t.style.opacity = "0"; // Fade out
            t.style.transform = "translateY(30px) scale(0.95)"; // Move down & shrink slightly
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Show first testimonial on load
showTestimonial(currentTestimonial);




// Close Popup
function closeProductPopup() {
    document.getElementById("product-popup").style.display = "none";
}
// Function to show alert before navigating to product.html
function showProductPopup(event) {
    if (!window.location.href.includes("product.html")) { 
        event.preventDefault(); // Prevent immediate navigation
        alert("🛑 Note : Payments are not available on this website. You can only view products.\n\n📞 For placing orders, please contact us.");
        window.location.href = event.target.href; // Redirect to product.html after alert
    }
}
