document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".fade-effect img");
    

    const lazyLoad = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add("show");
                observer.unobserve(img);
            }
        });
    };

    const imageObserver = new IntersectionObserver(lazyLoad, {
        rootMargin: "0px",
        threshold: 0.5,
    });

    lazyImages.forEach((img) => {
        imageObserver.observe(img);
    });
    
});
