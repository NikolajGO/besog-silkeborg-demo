const menuItems = document.querySelectorAll(".menu-item");
const hotspots = document.querySelectorAll(".hotspot");

function filterHotspots(filter) {
    hotspots.forEach(hotspot => {
        if (hotspot.dataset.category === filter) {
            hotspot.style.display = "block";
        } else {
            hotspot.style.display = "none";
        }
    });
}

menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const filter = item.dataset.filter;
        filterHotspots(filter);
    });
});

/* Kør ved første load */
const activeItem = document.querySelector(".menu-item.active");

if (activeItem) {
    filterHotspots(activeItem.dataset.filter);
}

/* animationer ved sideskift*/


document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(".page-transition");
    if (!page) return;

    page.classList.add("enter");

    document.querySelectorAll(".hotspot-link, .back-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const href = this.getAttribute("href");

            page.classList.remove("enter");
            page.classList.add("leave");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});