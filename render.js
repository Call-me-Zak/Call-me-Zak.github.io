document.addEventListener('DOMContentLoaded', function () {
    // Static test to check if marked works
    const sampleMarkdown = '# Hello, Markdown!';
    document.getElementById('markdown-content').innerHTML = marked(sampleMarkdown);
});
