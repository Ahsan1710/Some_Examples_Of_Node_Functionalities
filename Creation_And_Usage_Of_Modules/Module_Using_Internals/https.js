// const internals = require("./Internals") // for first method

const { send, read } = require('./Internals'); // for second and third method

function makeRequest () {
    // internals.request.send('https://www.google.com','data');
    // return internals.response.read(); // for first method

    send('https://www.google.com','data');
    return read(); // for second and third method
}

const resp = makeRequest();
console.log(resp);