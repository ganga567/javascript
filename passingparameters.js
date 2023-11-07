// pass parameter to a setTimeout() function

function greet() {
    console.log('Function parameter');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');