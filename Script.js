document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Shopping Cart Functionality
    const cart = [];
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function () {
            const kitName = this.parentElement.querySelector("h3").textContent;
            addToCart(kitName);
        });
    });

    function addToCart(item) {
        cart.push(item);
        alert(`${item} added to cart!`);
        updateCart();
    }

    function updateCart() {
        const cartDisplay = document.getElementById("cart-display");
        cartDisplay.innerHTML = cart.length > 0 ? cart.join(", ") : "Cart is empty";
    }

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "10px";
    darkModeToggle.style.right = "10px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.backgroundColor = "gold";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.fontWeight = "bold";
    darkModeToggle.setAttribute("aria-label", "Toggle Dark Mode");
    darkModeToggle.setAttribute("role", "button");
    darkModeToggle.setAttribute("tabindex", "0");

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "gold";
        } else {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "white";
        }
    });

    // Add Image Next to Title
    const title = document.querySelector("header h1");
    if (title) {
        const logo = document.createElement("img");
        logo.src = "kit-logo.png"; // Change to your logo file path
        logo.alt = "Football Kit Logo – Image of a football kit logo";
        logo.style.width = "50px";
        logo.style.height = "50px";
        logo.style.marginLeft = "10px";
        logo.style.verticalAlign = "middle";
        title.appendChild(logo);
    }

    // Add Skip to Content Link for Accessibility
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.classList.add("skip-link");
    skipLink.textContent = "Skip to content";
    skipLink.style.position = "absolute";
    skipLink.style.top = "0";
    skipLink.style.left = "0";
    skipLink.style.padding = "10px";
    skipLink.style.backgroundColor = "#000";
    skipLink.style.color = "#fff";
    skipLink.style.zIndex = "100";
    document.body.appendChild(skipLink);

    // Main Content Area (for Skip Link)
    const mainContent = document.querySelector("main");
    if (mainContent) {
        mainContent.setAttribute("id", "main-content");
    }

    // Accessible Navigation (ARIA roles)
    const nav = document.querySelector("nav");
    if (nav) {
        nav.setAttribute("role", "navigation");
    }

    // Ensure Links Have Focus Styles
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("focus", function () {
            this.style.outline = "3px solid gold";
        });
        link.addEventListener("blur", function () {
            this.style.outline = "none";
        });
    });

    // Add ARIA Role for Buttons
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.setAttribute("role", "button");
        button.setAttribute("aria-label", "Add item to cart");
    });
});
