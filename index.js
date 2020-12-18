const express = require('express');
const app = express();
const port = 7000;

app.get('/', function(req, res){
  res.send('Hello My name is Bayu from GET');
});

app.post("/", function (req, res) {
  res.send("Hello My name is Bayu but it from POST");
});

app.put("/", function (req, res) {
  res.send("Hello My name is Bayu but it from PUT");
});

app.patch("/", function (req, res) {
  res.send("Hello My name is Bayu but it from PATCH");
});

app.delete("/", function (req, res) {
  res.send("Hello My name is Bayu but it from DELETE");
});
app.listen(port, function(){
  console.log('Hello my apps is running on port '+port);
});
