document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    if (!username || !title || !content) {
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
  
      // Store the blog post
      const post = { username, title, content };
      saveBlogPost(post);
  
      // Redirect to the blog posts page
      window.location.href = 'blog.html';
    }
  });
  
  function saveBlogPost(post) {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }
  