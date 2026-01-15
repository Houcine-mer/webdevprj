const API_BASE_URL = 'http://127.0.0.1:8000/api';

function getToken() {   //this is a js file to handle auth operations
    return localStorage.getItem('auth_token');
}

function saveToken(token) {
    localStorage.setItem('auth_token', token);
}

function removeToken() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
}

function saveUserData(user) {
    localStorage.setItem('user_data', JSON.stringify(user));
}

function getUserData() {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
}

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function displaySuccess(elementId, message) {
    const successElement = document.getElementById(elementId);
    if (successElement) {
        successElement.textContent = message;
        successElement.style.display = 'block';
    }
}

async function register(name, email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            if (data.errors) {
                const errorMessages = Object.values(data.errors).flat().join(', ');
                throw new Error(errorMessages);
            }
            throw new Error(data.error || 'Registration failed');
        }

        saveToken(data.token);
        saveUserData(data.user);

        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function login(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Login failed');
        }

        saveToken(data.token);
        saveUserData(data.user);

        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function getDashboard() {
    const token = getToken();
    
    if (!token) {
        return { success: false, error: 'No token found. Please login.' };
    }

    try {
        const response = await fetch(`${API_BASE_URL}/dashboard`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            if (response.status === 401) {
                removeToken();
                throw new Error('Session expired. Please login again.');
            }
            throw new Error(data.error || 'Failed to load dashboard');
        }

        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

async function logout() {
    const token = getToken();
    
    if (!token) {
        return { success: false, error: 'No token found' };
    }

    try {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        removeToken();

        if (!response.ok) {
            throw new Error(data.error || 'Logout failed');
        }

        return { success: true, data };
    } catch (error) {
        removeToken();
        return { success: false, error: error.message };
    }
}

function isAuthenticated() {
    return getToken() !== null;
}

function requireAuth(redirectUrl = 'Login.html') {
    if (!isAuthenticated()) {
        window.location.href = redirectUrl;
    }
}

function redirectIfAuthenticated(redirectUrl = 'home.html') {
    if (isAuthenticated()) {
        window.location.href = redirectUrl;
    }
}