// JavaScript for handling comments
function submitComment(button) {
    const form = button.closest('.comment-form');
    const commentText = form.querySelector('textarea').value;

    // You can handle the comment submission here, for now, let's just log it
    console.log('Comment submitted:', commentText);

    // Clear the textarea
    form.querySelector('textarea').value = '';

    // Display the comment (you may want to append it to a backend or a database)
    const commentsContainer = form.closest('.interactive-elements').querySelector('.comments');
    const commentElement = document.createElement('p');
    commentElement.textContent = commentText;
    commentsContainer.appendChild(commentElement);
}


// ====================smooth scroll======================
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds

    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const navPanel = document.querySelector('.nav-panel');
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

        if (progress < duration) requestAnimationFrame(step);
              navPanel.style.top = navPanel.style.top === '0px' ? '-380px' : '0';
}  

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(step);
}

function toggleNavPanel() {
    const navPanel = document.querySelector('.nav-panel');
    const body = document.body;

    // Toggle the class to slide the panel in or out
    navPanel.style.top = navPanel.style.top === '0px' ? '-380px' : '0';

    // Toggle dark mode for the entire page when the panel is open
    body.classList.toggle('dark-mode');
}