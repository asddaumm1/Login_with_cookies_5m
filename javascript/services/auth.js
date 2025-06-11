import { setCookie } from '../utility/cookie.js';
import { checkUser } from './fetchuser.js';

const setUserInfo = (user) => {
    setCookie('userInfo', user.role, 5);
    localStorage.setItem('userInfo', user.username);
}

const clearUserInfo = () => {
    document.cookie = 'userInfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('userInfo');
}

const checkLogin = (email, password) => {
    return checkUser(email, password)
    .then(users => {
        if (users) {
            setUserInfo(users); 
            window.location.href = 'index.html';
        } else {
            clearUserInfo();
            window.location.href = 'login.html';
        }
    });
}

export const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    checkLogin(email, password);
};
