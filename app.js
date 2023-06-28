const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const dateAfter100Days = new Date();
  const res = addDays(
    new Date(
      dateAfter100Days.getFullYear(),
      dateAfter100Days.getMonth(),
      dateAfter100Days.getDate()
    ),
    100
  );
  response.send(`${res.getDate()}/${res.getMonth() + 1}/${res.getFullYear()}`);
});
module.exports = app;
