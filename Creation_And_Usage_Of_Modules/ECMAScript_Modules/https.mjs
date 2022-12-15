import { send } from "./request.mjs";
import * as response from "./response.mjs"; // Must mention extension in ECMAScript files

function makeRequest() {
  send("https://www.google.com", "data");
  return response.read();
}

const resp = makeRequest();
console.log(resp);

// https://nodejs.org/docs/latest/api/esm.html#esm_differences_between_es_modules_and_commonjs
