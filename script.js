document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navRight = document.querySelector(".nav-right");

    if (menuToggle && navRight) {
        menuToggle.addEventListener("click", function () {
            navRight.classList.toggle("active");

            // Toggle menu icon between ☰ and ✖
            if (navRight.classList.contains("active")) {
                menuToggle.innerHTML = "✖"; // Change to close icon
            } else {
                menuToggle.innerHTML = "☰"; // Change back to hamburger
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
// Testimonials Sliding Effect with Animation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.remove("active");
        if (i === index) {
            setTimeout(() => t.classList.add("active"), 100);
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
