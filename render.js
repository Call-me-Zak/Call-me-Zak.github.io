document.addEventListener('DOMContentLoaded', function () {
    fetch('README.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            document.getElementById('markdown-content').innerHTML = marked(text);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('markdown-content').innerHTML = '<p>Error loading content.</p>';
        });
});
