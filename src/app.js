const express = require("express");
const app = express();
const port = process.env.PORT || 8000
// API
// get-read
// post-create
// put-updaete
// delete-del

// the callback function has 2 param, request and response.
// the request object represnt the HTTP request and
// has properties for te request quesry string,parameters,body,
// HTTP headers etc

//Similalry,the response object represnt the HTTP responce
// that the Express app sendss whrn it recive an HTTP request

app.get("/", (req, res) => {
  res.send("hello from the express");
});
app.get("/about", (req, res) => {
  res.send("This is a about section");
});

app.listen(port, () => 
  console.log(`running on ${port}`)
);
