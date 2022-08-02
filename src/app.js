const express = require("express");
const app = express();

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
  res.send("hello from the express")
});

app.listen(8000,()=>{
    console.log("listing the port at 8000")
})
