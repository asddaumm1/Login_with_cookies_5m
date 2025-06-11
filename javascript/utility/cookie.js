export const setCookie = (cookieName, cookieValue, minutes) => {
    const calculateFiveMinuteExpiry = () => {
        const now = new Date();
        const fiveMinutesLater = new Date(now.getTime() + (minutes * 60 * 60 * 1000));
        return fiveMinutesLater.toUTCString();
    };

    const expirationDate = calculateFiveMinuteExpiry();
    
    document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate}; path=/`;
}


export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}; 