document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    const copyright = document.querySelector("footer .footerb h3");
    if (copyright) {
        copyright.textContent = `Copyright © ${year}. All rights are reserved`;
    }
});