const { send } = require("./request");
const response = require("./response"); // Not mentioning extension as "require", by default search for js file
//require searching extension hierarchy : js, json, node

// const read =  require('./response'); //for other method of exporting as it is exporting as a function now

function makeRequest() {
  send("https://www.google.com", "data");
  return response.read();

  // return read(); // for other method of exporting
}

const resp = makeRequest();
console.log(resp);
