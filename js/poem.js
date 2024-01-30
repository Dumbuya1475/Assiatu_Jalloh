// JavaScript for handling comments and likes
function submitComment(button) {
    const form = button.closest('.comment-form');
    const commentText = form.querySelector('textarea').value;

    // Display the comment (you may want to append it to a backend or a database)
    const commentsContainer = form.closest('.interactive-elements').querySelector('.comments');
    const commentElement = document.createElement('p');
    commentElement.textContent = commentText;
    commentsContainer.appendChild(commentElement);

    // Clear the textarea
    form.querySelector('textarea').value = '';
}

function toggleLike(button) {
    const likeCountElement = button.closest('.interactive-elements').querySelector('.like-count');
    let currentLikes = parseInt(likeCountElement.textContent);

    // Check if the button is already liked
    const isLiked = button.classList.contains('liked');

    if (isLiked) {
        // Unlike the poem
        button.classList.remove('liked');
        currentLikes--;
    } else {
        // Like the poem
        button.classList.add('liked');
        currentLikes++;
    }

    // Update the like count
    likeCountElement.textContent = currentLikes;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.poem, header, .like-button, .heading').forEach(element => {
        element.classList.toggle('dark-mode');
    });
}
