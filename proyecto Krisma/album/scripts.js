document.addEventListener("DOMContentLoaded", () => {
    // Remove loader logic
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }

    // Scroll event to hide navigation on scroll down
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        const nav = document.getElementById("nav");
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            nav.style.top = "-60px"; // Hide nav
        } else {
            nav.style.top = "0"; // Show nav
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    });

    // Timeline visibility
    const timelineItems = document.querySelectorAll(".timeline-item");
    function checkTimelineVisibility() {
        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkTimelineVisibility);
    checkTimelineVisibility();
});
