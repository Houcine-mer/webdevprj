document.getElementById('email')?.addEventListener('blur', function() {
    const email = this.value.trim();
    if (email && !validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
    } else if (email) {
        clearFieldError('email');
    }
});

// Password validation on input
document.getElementById('password')?.addEventListener('input', function() {
    const password = this.value;
    if (password && !validatePassword(password)) {
        showError('password', 'Password must be 8-12 characters');
    } else if (password) {
        clearFieldError('password');
    }
});

// Confirm password validation on input
document.getElementById('confirmpassword')?.addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmpassword = this.value;
    
    if (confirmpassword) {
        if (password !== confirmpassword) {
            showError('confirmpassword', 'Passwords do not match');
        } else {
            showSuccess('confirmpassword', 'Passwords match');
        }
    }
});

// Full name validation on blur
document.getElementById('fullname')?.addEventListener('blur', function() {
    const fullname = this.value.trim();
    if (fullname === '') {
        showError('fullname', 'Please enter your full name');
    } else if (fullname.length > 255) {
        showError('fullname', 'Name is too long (max 255 characters)');
    } else {
        clearFieldError('fullname');
    }
});

// Validation helper functions
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 8 && password.length <= 12;
}

// Error display functions
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.add('input-error');
        field.classList.remove('input-success');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('error');
        errorElement.classList.remove('success-message');
    }
}

function showSuccess(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.add('input-success');
        field.classList.remove('input-error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('success-message');
        errorElement.classList.remove('error');
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.remove('input-error', 'input-success');
    }
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('error', 'success-message');
    }
}