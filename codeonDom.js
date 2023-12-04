<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Example</title>
</head>
<body>

  <h1 id="myHeading">creating DOM!</h1>
  <p class="myParagraph">This is a paragraph.</p>

  <script>
    // Modifying element content
    let heading = document.getElementById('myHeading');
    heading.textContent = 'Updated Heading';

    // Modifying element style
    let paragraph = document.querySelector('.myParagraph');
    paragraph.style.color = 'blue';
  </script>

</body>
</html>
