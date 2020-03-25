import { Elm } from "./src/Main";

import Ports from "./ports";

document.addEventListener("DOMContentLoaded", function() {
  const app = Elm.Main.init({
    flags: null
  });

  Ports.init(app, {
    toJs: (msg, { fromJs }) => {
      console.log("toJs", msg);
      fromJs("asd1");
    },
    toJs2: (msg, { fromJs }) => {
      console.log("toJs2", msg);
      fromJs("asd2");
    }
  });
});
