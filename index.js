
//include request \\\packege
const express = require('express');
//init packeg 
const app =express();
const path=require('path');

//HOME,index,defult page 
function functionOne(req,res){

}

function functionTwo(req,res){

}
app.get('/',[functionOne,functionTwo]);


app.get('^/$|/home',(req,res)=>{

//console.log('Home rout reached')
//res.send('<h1>Welcome</h1>')

res.sendFile(path.join(__dirname,'homePage.html'))
});

app.get('/about',(req,res)=>{    
    res.sendFile(path.join(__dirname,'about.html'))
    });
app.get('/contuct',(req,res)=>{    
 res.sendFile(path.join(__dirname,'contuct.html'))
        });


 app.get('/*',(req,res)=>{    
            res.send('<h1>404</h1>')
                   });
           



//relative ||



//absulote 

//server 
app.listen(3000,()=>{
console.log('Server started port:3000')
console.log('http://localhost:3000')

})