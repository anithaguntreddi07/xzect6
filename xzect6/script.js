document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('ajax-contact');
    var formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            formMessages.innerHTML = '<div class="alert alert-success">' + text + '</div>';
            form.reset();
        })
        .catch(function(error) {
            formMessages.innerHTML = '<div class="alert alert-danger">Oops! There was a problem.</div>';
        });
    });
});

