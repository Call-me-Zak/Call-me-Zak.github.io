document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var form = event.target;
    var formData = new FormData(form);

    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('form-message').textContent = data;
        form.reset();
    })
    .catch(error => {
        document.getElementById('form-message').textContent = "Sorry, something went wrong. Please try again.";
    });
});
