const nlp = require("compromise");

const commands = [
  {
    name: "greeting",
    phrases: ["hi", "hello", "hey"],
  },
  {
    name: "farewell",
    phrases: ["bye", "goodbye", "see you later"],
  },
  {
    name: "question",
    phrases: ["how are you", "what's up", "how do you do"],
  },
  {
    name: ["I'm fine, thanks for asking!", "I'm fine, whats up?"],
    phrases: ["how are you", "what's up", "how do you do"],
  },
];

const processMessage = (message) => {
  let response = "";
  for (const command of commands) {
    for (const phrase of command.phrases) {
      if (nlp(message).has(phrase)) {
        if (Array.isArray(command.name)) {
          const random = Math.floor(Math.random() * command.name.length);
          const reply = command.name[random];
          response = reply;
          break;
        }
        response = `I recognize the "${command.name}" command.`;
        break;
      } else {
        response = `Sorry, I don't understand!`;
      }
    }
  }
  return response;
};

const message = "how are you";
const response = processMessage(message);
console.log(response); // "I recognize the "greeting" command."
