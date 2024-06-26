const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email&&password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        }else {
            alert('Failed to log in');
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username&&email&&password){
        const response = await fetch('api/users/', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok){
            document.location.replace('/');
        }else {
            alert('Failed to sign up.');
        }
    }
};

document.querySelector('.card-login').addEventListener('submit', signupForm ); //you have to call the form class name because it is a form
document.querySelector('.card-login').addEventListener('submit', loginForm);