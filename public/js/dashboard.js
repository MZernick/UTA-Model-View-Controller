const newBlogHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-desc').value.trim();
  
    if (post_title && content) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ post_title, content }),
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
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blog/${id}`, {
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
    .addEventListener('submit', newBlogHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  
