// eslint-next-line no-unused-vars
function validatelgForm(event) {

  event.preventDefault();
  

  const email = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  

  clearErrors();
  
  let isValid = true;
  

  const emailrgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    showError('username', 'Email address is required');
    isValid = false;
  } else if (!emailrgx.test(email)) {
    showError('username', 'Please enter a valid email address');
    isValid = false;
  }
  

  if (password === '') {
    showError('password', 'Password is required');
    isValid = false;
  } else if (password.length < 8) {
    showError('password', 'Password must be at least 8 characters');
    isValid = false;
  }
  
  if (isValid) {
    window.location.href = 'index.html';

  }
}

function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.color = '#820c0c';
  errorDiv.style.fontSize = '12px';
  errorDiv.style.marginTop = '5px';
  errorDiv.textContent = message;
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
  input.style.borderColor = '#820c0c';
}

function clearErrors() {
 
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => error.remove());
  
  document.getElementById('username').style.borderColor = '';
  document.getElementById('password').style.borderColor = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', validatelgForm);
  }
});