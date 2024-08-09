<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Listener Example</title>
</head>
<body>

    <button id="myButton">Click Me</button>
    <p id="output"></p>

    <script>
        // Get the button element
        const button = document.getElementById('myButton');

        // Attach an event listener to the button for the 'click' event
        button.addEventListener('click', function() {
            // This code runs when the button is clicked
            document.getElementById('output').textContent = 'Button was clicked!';
        });
    </script>

</body>
</html>
