document.addEventListener("DOMContentLoaded", function () {
    // ======= SEARCH FUNCTION =======
    const searchInput = document.querySelector(".search-box input");
    const posts = document.querySelectorAll(".post");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let filter = searchInput.value.toLowerCase();

            posts.forEach(post => {
                let text = post.innerText.toLowerCase();
                if (text.includes(filter)) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    }

    // ======= SOCIAL MEDIA COUNTER ANIMATION =======
    function animateCounter(element, target) {
        let count = 0;
        let speed = 20; // smaller = faster

        let update = setInterval(() => {
            if (count < target) {
                count++;
                element.textContent = count + "+";
            } else {
                clearInterval(update);
            }
        }, speed);
    }
// Add this closing brace and parenthesis:
});