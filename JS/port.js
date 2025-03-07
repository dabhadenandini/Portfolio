document.addEventListener("DOMContentLoaded", function () {
    function animateText() {
        let heroText = document.querySelector("#animated-text");
        if (!heroText) return;

        let text = heroText.innerText.trim(); // Get the text
        heroText.innerHTML = ""; // Clear the content

        text.split("").forEach((char, index) => {
            let span = document.createElement("span");
            span.classList.add("letter"); // Add animation class
            span.style.animationDelay = `${index * 0.1}s`; // Delay each letter
            // Preserve spaces correctly
            span.innerHTML = char === " " ? "&nbsp;" : char;
            heroText.appendChild(span);
        });
    }
    // Run the animation once
    animateText();
    // Repeat animation every 10 seconds
    setInterval(() => {
        let heroText = document.querySelector("#animated-text");
        heroText.style.opacity = "0"; // Hide text smoothly
        setTimeout(() => {
            heroText.style.opacity = "1"; // Show text and restart animation
            animateText();
        }, 500); // Delay before restarting
    }, 7000); // Repeat every 10 seconds
});

// Education Section 
document.addEventListener("DOMContentLoaded", function () {
    function animateOnScroll() {
        const timelineItems = document.querySelectorAll(".timeline-item");

        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                item.classList.add("active");
            } else {
                item.classList.remove("active"); // Removes animation when scrolling away
            }
        });
    }
    // Trigger animation on scroll
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run on page load
});

//Flip skills 
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        let percentage = this.querySelector('.percentage').innerText.replace('%', '');
        let progressCircle = this.querySelector('.progress');
        progressCircle.style.strokeDashoffset = `calc(251.2 - (${percentage} * 251.2 / 100))`;
    });
});

// JS For Prject Filter on button click 
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            projectCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block"; // Show matching category
                } else {
                    card.style.display = "none"; // Hide others
                }
            });
        });
    });
});



