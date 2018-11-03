const express = require("express");
const bodyParser=require('body-parser');

/* call express method */
const app= express();
/* parses url URL and JSON web requisistons */
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port=process.env.PORT || 3002;

app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`Server is running on port ${port}`);
    }   
})