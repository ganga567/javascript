<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Webpage</title>
</head>
<body>

<h1>Welcome to My Webpage</h1>

<p id="demo">Click the button to change this text.</p>

<button onclick="changeText()">Click me</button>

<script>
  // JavaScript code
  function changeText() {
    document.getElementById("demo").innerHTML = "Text changed!";
  }
</script>

</body>
</html>
