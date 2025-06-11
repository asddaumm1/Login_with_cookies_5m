import { handleFormSubmit } from '../services/auth.js';
import { checkLoginPage } from '../components/index.js';

const initializeLoginForm = () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }
    checkLoginPage();
}

document.addEventListener('DOMContentLoaded', initializeLoginForm);