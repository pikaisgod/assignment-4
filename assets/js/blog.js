document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    // Display blog posts
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.username}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  
    // Dark mode toggle
    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  
    // Back button
    document.getElementById('back-button').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  