const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    const userHint = document.getElementById('userHint')
    const passHint = document.getElementById('passHint')

    if (user === 'admin' && pass === 'admin123') {
        // localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        userHint.classList.remove('invisible');
        passHint.classList.remove('invisible');
    }

})
