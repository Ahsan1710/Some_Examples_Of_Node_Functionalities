const TIME_OUT = 500;
function encrypt (data) {
    return `encrypted ${data}`;
}

function send (url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sent ${encryptedData} to ${url}`);
}

export {
    // send: send,
    send, // as exporting same name
    TIME_OUT,
}