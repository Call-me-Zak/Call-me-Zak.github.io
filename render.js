document.addEventListener('DOMContentLoaded', function () {
    const sampleMarkdown = '# Hello, Markdown!';
    document.getElementById('markdown-content').innerHTML = marked(sampleMarkdown);
});
