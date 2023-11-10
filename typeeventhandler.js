<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>onkeyup event handler</title>
</head>
<body>
    <input placeholder="mobile number" id="mob" onkeyup="displayMobile()">
    <br></br>
    mobile :<strong id="st"></strong>
    <br></br>
    length : <mark id="mk"></mark>
<script>
   function displayMobile()
  {
    var inputbox = document.getElementById("mob")
    var mobile = inputbox.Value
    var strong = document.getElementById("st")
    var mark = document.getElementById("mk")

    //count length of mobile

    var mLength = mobile.length 
    strong.innerHTML = mobile
    mark.innerHTML = mLength
    
    if(mLength==10)
    {
        inputbox.style.borderColor="green"
        inputbox.style.outlineColor="green"
    }
    else
    {
        inputbox.style.borderColor="red"
        inputbox.style.outlineColor="red"
    }
}
</script>
</body>
</html>