 const exp = require('constants');
const express = require('express');
 const path = require('path');

const app = express();

const port =3000;
// console.log();

let static_path = path.join(__dirname,'../public');
app.use(express.static(static_path));

app.get('/',(req,res)=>{
    res.send("<img src='/exp.png'>");
});

app.listen(port,()=>{
    console.log("server ready");
})
