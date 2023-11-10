<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Visibility</title>
</head>
<body>

<button onclick="toggleVisibility()">Toggle Text</button>
<p id="myText">Hello, World!</p>

<script>
  // JavaScript code
  function toggleVisibility() {
    let textElement = document.getElementById("myText");
    textElement.style.display = (textElement.style.display === 'none') ? 'block' : 'none';
  }
</script>

</body>
</html>


