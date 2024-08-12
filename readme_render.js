<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
    <div id="markdown-content"></div>
    <script>
        fetch('README.md')
            .then(response => response.text())
            .then(text => {
                document.getElementById('markdown-content').innerHTML = marked(text);
            });
    </script>
</body>
</html>
