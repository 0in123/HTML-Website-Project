document.addEventListener("DOMContentLoaded", function () {
    // Create lightbox elements
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement("img");
    lightboxImage.id = "lightbox-img";
    lightbox.appendChild(lightboxImage);

    // Lightbox styling
    Object.assign(lightbox.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        display: "none"
    });

    Object.assign(lightboxImage.style, {
        maxWidth: "90%",
        maxHeight: "90%",
        boxShadow: "0 0 15px white",
        borderRadius: "8px"
    });

    // Show lightbox on image click
    const galleryImages = document.querySelectorAll("#gallery img");
    galleryImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            const fullSrc = img.src.replace("thumb/", ""); // assumes full-size images in ./images/
            lightboxImage.src = fullSrc;
            lightbox.style.display = "flex";
        });
    });

    // Close on outside click or ESC
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImage.src = "";
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
            lightboxImage.src = "";
        }
    });
});
