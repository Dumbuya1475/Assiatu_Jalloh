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
            const navPanel = document.querySelector('.nav-panel');
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            navPanel.style.top = navPanel.style.top === '0px' ? '-490px' : '1';

        if (progress < duration) requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(step);
}

// ============================Function for navigation panel============================
function toggleNavPanel() {
    const navPanel = document.querySelector('.nav-panel');
    const body = document.body;

    // Toggle the class to slide the panel in or out
    navPanel.style.top = navPanel.style.top === '0px' ? '-490px' : '0';

    // Toggle dark mode for the entire page when the panel is open
    // body.classList.toggle('dark-mode');
}

function downloadPoem(downloadButton) {
    const poemContent = downloadButton.closest('.poem').querySelector('p').textContent;
    const blob = new Blob([poemContent], { type: 'text/plain' });

    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'poem.txt';  // You can set the desired filename here
    document.body.appendChild(a);
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function downloadPoem(downloadButton) {
    const poemContainer = downloadButton.closest('.poem');
    const poemText = poemContainer.querySelector('.poem-text').textContent;

    // Create a div to contain the poem text with specific styling
    const poemTextContainer = document.createElement('div');
    poemTextContainer.style.textAlign = 'center';
    poemTextContainer.textContent = poemText;

    // Use html2pdf to generate a PDF from the poem text container
    html2pdf(poemTextContainer, {
        margin: 10,
        filename: 'poem.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}