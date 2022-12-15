function decrypt (data) {
    return `decrypted ${data}`;
}

function read() {
    return decrypt('data');
}

module.exports = {
    read
}

//other methods of exporting
// module.exports = function read() {
//     return decrypt('data');
// }