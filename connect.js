// -------------------- About -----------------------

// Get the tab links and tab contents elements
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

// Function to open a specific tab
function openTab(tabName) {
    // Remove the "active-link" class from all tab links
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    // Remove the "active-tab" class from all tab contents
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    // Add the "active-link" class to the clicked tab link
    event.currentTarget.classList.add('active-link');

    // Add the "active-tab" class to the corresponding tab content
    document.getElementById(tabName).classList.add('active-tab');
}

// ---------------- JS for Mobile Menu ------------------

// Get the mobile menu element
var mobileMenu = document.getElementById("mobile-menu");

// Function to open the mobile menu
function openMenu() {
    mobileMenu.style.right = "0px"; // Move the menu to the right to show it
}

// Function to close the mobile menu
function closeMenu() {
    mobileMenu.style.right = "-400px"; // Move the menu back to the left to hide it
}
