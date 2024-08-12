// render_readme.js
document.addEventListener("DOMContentLoaded", function() {
    const aboutButton = document.getElementById("about-button");

    // Add an event listener to the "ABOUT" link
    aboutButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Fetch the README.md file
        fetch('README.md')
            .then(response => response.text())
            .then(text => {
                // Convert Markdown to HTML and display it
                document.getElementById('markdown-content').innerHTML = marked(text);

                // Smoothly scroll to the "about" section
                document.querySelector('#about').scrollIntoView({
                    behavior: 'smooth'
                });
            })
            .catch(error => {
                console.error('Error fetching README.md:', error);
            });
    });
});
