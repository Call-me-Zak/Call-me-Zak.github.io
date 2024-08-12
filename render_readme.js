document.addEventListener('DOMContentLoaded', function () {
    fetch('README.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = marked(text);
        });
});
