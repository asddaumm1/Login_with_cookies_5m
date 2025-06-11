import { getCookie } from '../utility/cookie.js';

const clearUserInfo = () => {
    document.cookie = 'userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('userInfo');
}

export const checkAuth = () => {
    const userInfo = getCookie('userInfo');
    const userInfoLocal = localStorage.getItem('userInfo');

    if (!userInfo || !userInfoLocal) {
        clearUserInfo();
        window.location.href = 'login.html';
        return false;
    }
    return true;
};

export const checkLoginPage = () => {
    const userInfo = getCookie('userInfo');
    const userInfoLocal = localStorage.getItem('userInfo');
    const checkLoginPath = window.location.pathname.includes('login.html');
    if (userInfo && userInfoLocal && checkLoginPath) {
        window.location.href = "index.html";
    }
}