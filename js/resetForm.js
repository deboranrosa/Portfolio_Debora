const formContact = document.getElementById('contact-form')

formContact.addEventListener('submit', function resetForm(event) {
    event.preventDefault();
    
    formContact.submit();
    formContact.reset();
})

