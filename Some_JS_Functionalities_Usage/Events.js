const EventEmiiter = require("events");
const celebrity = new EventEmiiter();

//Subscribe to celebrity events by observer 1
celebrity.on("race loss", () => {
  console.log("Heyyyy loooserrr!!! :D");
});

//Subscribe to celebrity events by observer 1
celebrity.on("race win", () => {
  console.log("Anyone can do that :/");
});

//Subscribe to celebrity events by observer 2
celebrity.on("race win", () => {
  console.log("Woohooo!!! Congratulations!!! You are the best...");
});

process.on("exit", (code) => {
  console.log("Process exit with event code: ", code);
});

//Subscribe to celebrity events by observer
celebrity.on("race", (result) => {
  if (result === "loss")
    console.log(
      `It's alright man, no worries... Best of luck for next time...`
    );
  else if (result === "win") {
    console.log("Woohooo!!! Congratulations!!! You are the best...");
  }
});

// //Subscribe to celebrity events by observer 2
// celebrity.on("race", (result) => {
// });

celebrity.emit("race win");
celebrity.emit("race", "loss");
celebrity.emit("race", "win");
