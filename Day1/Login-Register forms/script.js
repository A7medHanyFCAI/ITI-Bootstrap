'use strict';
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const confirmPassword = document.getElementById('confirmPassword');
const registerPassword = document.getElementById('registerPassword');
const goRegister = document.getElementById('goRegister');
const goLogin = document.getElementById('goLogin');


goRegister.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.classList.add('d-none');
    registerForm.classList.remove('d-none');
});

goLogin.addEventListener('click', function (e) {
    e.preventDefault();
    registerForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
});

const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
form.addEventListener('submit', function (event) {
   
    if (form.id === 'registerForm' && confirmPassword.value !== registerPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
    } else {
    confirmPassword.setCustomValidity("");
    }
    
    if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    } else {
    event.preventDefault()
    if (form.id === 'registerForm') {
        
        registerForm.classList.add('d-none');
        loginForm.classList.remove('d-none');
    }
    }
    form.classList.add('was-validated')
})
})