
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('email-error').innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email && !emailPattern.test(email)) {
        document.getElementById('email-error').innerText = 'Please enter a valid email address.';
        isValid = false;
    }
    if (isValid) {

        alert('Your message has been sent Successfully we will reply you soon.')
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        return 
    }
});
