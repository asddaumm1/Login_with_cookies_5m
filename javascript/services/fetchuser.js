export const fetchUser = () => {
    return fetch('./data/user.json')
        .then(response => response.json())
        .then(data => data);
};

export const checkUser = (email, password) => {
    return fetchUser()
        .then(users => {
            return users.find(user => user.email === email && user.password === password);
        });
};
