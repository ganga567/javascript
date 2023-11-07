// program to generate random strings

// declare all characters
const charactersandnumbers ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersandnumbersLength = charactersandnumbers.length;
    for ( let i = 0; i < length; i++ ) {
        result += charactersandnumbers.charAt(Math.floor(Math.random() * charactersandnumbersLength));
    }

    return result;
}

console.log(generateString(5));