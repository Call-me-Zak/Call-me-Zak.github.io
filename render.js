 document.addEventListener('DOMContentLoaded', function () {
    fetch('README.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('markdown-content').innerHTML = marked(text);
        });
});
