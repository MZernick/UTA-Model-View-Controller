const newCommentHandler = async (event) => {
    event.preventDefault();

    const notes = document.querySelector('#comment').value.trim();

    if (notes) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ notes, blog_id: parseInt(location.pathname.split('/')[2]) }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create comment');
        }
    }
};

const delCommentButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete comment');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);

document
    .querySelector('.comment-list')
    .addEventListener('click', delCommentButton);