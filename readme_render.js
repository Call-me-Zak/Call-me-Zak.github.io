// render_readme.js
document.addEventListener("DOMContentLoaded", function() {
    const aboutButton = document.getElementById("about-button");

    // Add an event listener to the "ABOUT" button
    aboutButton.addEventListener("click", function() {
        // Fetch the README.md file
        fetch('README.md')
            .then(response => response.text())
            .then(text => {
                // Convert Markdown to HTML and display it
                document.getElementById('markdown-content').innerHTML = marked(text);
            })
            .catch(error => {
                console.error('Error fetching README.md:', error);
            });
    });
});
