import { checkAuth, checkLoginPage } from '../components/index.js';

document.addEventListener('DOMContentLoaded', () => {
    if (!checkAuth()) {
        window.location.href = 'login.html';
    }
    if (checkLoginPage()) {
        window.location.href = "index.html";
    }
});