document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    clearErrors();
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    
    let isValid = true;
    
    if (fullname === '') {
        showError('fullname', 'Please enter your full name');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!validatePassword(password)) {
        showError('password', 'Password must be at least 8 characters');
        isValid = false;
    }
    
    if (!validatePasswordMatch(password, confirmpassword)) {
        showError('confirmpassword', 'Passwords do not match');
        isValid = false;
    }
    

    if (isValid) {
        window.location.href = 'Login.html';

    }
});

document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    if (email && !validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearFieldError('email');
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    if (password && !validatePassword(password)) {
        showError('password', 'Password must be at least 8 characters');
    } else {
        clearFieldError('password');
    }
});

document.getElementById('confirmpassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmpassword = this.value;
    if (confirmpassword && password !== confirmpassword) {
        showError('confirmpassword', 'Passwords do not match');
    } else if (confirmpassword && password === confirmpassword) {
        showSuccess('confirmpassword', 'Passwords match');
    }
});


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function validatePassword(password) {
    return password.length >= 8;
}

function validatePasswordMatch(password, confirmpassword) {
    return password === confirmpassword && confirmpassword !== '';
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    field.classList.add('input-error');
    field.classList.remove('input-success');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.className = 'error';
    }
}

function showSuccess(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    field.classList.add('input-success');
    field.classList.remove('input-error');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.className = 'success-message';
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    field.classList.remove('input-error', 'input-success');
    
    if (errorElement) {
        errorElement.textContent = '';
    }
}


function clearErrors() {
    const errorElements = document.querySelectorAll('.error, .success-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('input-error', 'input-success');
    });
}
