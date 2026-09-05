/* =================================
   MOBILE MENU
================================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


/* =================================
   CONTACT FORM
================================= */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    document
        .querySelector(".contact-form")
        .reset();

}


/* =================================
   CURRENT YEAR
================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();