// Add event listeners for post buttons
document.querySelector('.post-btn').addEventListener('click', function() {
    alert('Status posted!');
  });
  
  // Like button functionality
  const likeButtons = document.querySelectorAll('.post-action:first-child');
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (button.textContent.includes('Like')) {
        button.innerHTML = '❤️ Liked';
      } else {
        button.innerHTML = '👍 Like';
      }
    });
  });
  
  // Comment button functionality
  const commentButtons = document.querySelectorAll('.post-action:nth-child(2)');
  commentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const postElement = button.closest('.user-post');
      const commentBox = document.createElement('div');
      commentBox.innerHTML = `
        <div style="display: flex; margin-top: 10px;">
          <input type="text" placeholder="Write a comment..." style="flex: 1; padding: 5px; border: 1px solid #ddd; border-radius: 3px;">
          <button style="margin-left: 5px; background-color: #5b9bd5; color: white; border: none; padding: 5px 10px; border-radius: 3px;">Send</button>
        </div>
      `;
      
      // Check if comment box already exists
      const existingCommentBox = postElement.querySelector('input[type="text"]');
      if (!existingCommentBox) {
        postElement.appendChild(commentBox);
      }
    });
  });
  
  // Friend request buttons
  document.querySelector('.accept-btn').addEventListener('click', function() {
    alert('Friend request accepted!');
    document.querySelector('.friend-request').style.display = 'none';
  });
  
  document.querySelector('.decline-btn').addEventListener('click', function() {
    alert('Friend request declined!');
    document.querySelector('.friend-request').style.display = 'none';
  });
  
  // Minimize chat box
  document.querySelector('.minimize-btn').addEventListener('click', function() {
    const chatContent = document.querySelector('.chat-content');
    if (chatContent.style.display === 'none') {
      chatContent.style.display = 'block';
    } else {
      chatContent.style.display = 'none';
    }
  });