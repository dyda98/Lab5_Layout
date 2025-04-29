document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded.');

    // Example: confirm before submitting forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted successfully!');
        });
    });
});
