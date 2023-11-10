<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Promises Example</title>
</head>
<body>

<script>
  // Function that returns a Promise
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from a server)
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        // Simulate success
        resolve(data);
        // Simulate an error
        // reject("Error fetching data");
      }, 2000);
    });
  }

  // Using the Promise
  fetchData()
    .then((result) => {
      console.log(result.message);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Request completed.");
    });
</script>

</body>
</html>
