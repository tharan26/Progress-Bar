document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon i");
    let currentActive = 0;

    document.getElementById("left").addEventListener("click", () => {
        if (currentActive > 0) {
            icons[currentActive].classList.remove("active");
            currentActive--;
        }
    });

    document.getElementById("right").addEventListener("click", () => {
        if (currentActive < icons.length - 1) {
            currentActive++;
            icons[currentActive].classList.add("active");
        }
    });
});
