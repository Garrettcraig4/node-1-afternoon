const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const messageController = require(__dirname +
  "/controller/messages_controller");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build/"));
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
//const messageController = require("./controller/messages_controller");

const baseUrl = "/api/messages";

app.post(baseUrl, messageController.create);

app.get(baseUrl, messageController.read);

app.put(`${baseUrl}/:id`, messageController.update);

app.delete(`${baseUrl}/:id`, messageController.delete);
