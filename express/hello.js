 const express = require('express');
 const path = require('path');

 const nunjucks = require('nunjucks');

const app = express();

const port =3000;

// console.log(__dirname);

// app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.json());

let data = {'name':'anil','age':'22','gender':'male'};
let d =JSON.stringify(data)

app.get('/',(req,res)=>{
    // res.send("hello baby");
    
    // object pass 
    // res.render('index.html');
    // res.render('index.html',{home:{
    //     username:"anil",
    //     lastname:"karikatti"
    // }})

    // variable pass
    // res.render('index.html',{username:"anil"})

    // filter
    // res.render('index.html',{value:'11'});

    // res.render('index.html',{arr : [{title:"badshah",age:22},{title:"jaihind",age:23}]})
    
    // res.json(data)
    res.send(d);

});

app.listen(port,()=>{
    console.log("server ready");
})
