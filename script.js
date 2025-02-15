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
