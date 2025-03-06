function filterProducts(category) {
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}