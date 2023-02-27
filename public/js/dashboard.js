const newBlogHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#blog-title').value.trim();
    const name = document.querySelector('#name').value.trim();
    const content = document.querySelector('#blog-desc').value.trim();
  
    if (post_title && name && content) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ post_title, name, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('btn-danger')) {
      const id = event.target.getAttribute('btn-danger');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  
    const newCommentHandler = async (event) => {
      event.preventDefault();
    
      const post_title = document.querySelector('#comment-title').value.trim();
      const name = document.querySelector('#name').value.trim();
      const content = document.querySelector('#comment-desc').value.trim();
    
      if (post_title && name && content) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ post_title, name, content }),
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
    
    const delButtonComment = async (event) => {
      if (event.target.hasAttribute('btn-danger')) {
        const id = event.target.getAttribute('btn-danger');
    
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