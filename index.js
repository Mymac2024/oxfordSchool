const express = require('express');
const path = require('path');
const app = express()
let mysql = require('mysql2');
const port = 4000
const bp = require("body-parser")

app.use(bp.urlencoded({extended:false}))

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root@users',
    database: 'op_school',
});
conn.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

app.use(express.static(path.join(__dirname, 'views')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','home.html'));
})

app.get('/aca',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','academics.html'));
})

app.get('/fac',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','facilities.html'));
})

app.get('/con',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'));
})

app.get('/abt',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','aboutus.html'));
})

app.get('/gal',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','gallery.html'));
})

app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','signin.html'));
})

app.post("/save",function(req,res){
    Rollno=req.body.Rollno
    Name=req.body.Name
    Age=req.body.Age 
    Dob=req.body.Dob 
    Class=req.body.Class
    Address=req.body.Address
    console.log(Rollno,Name,Age,Dob,Class,Address)
  let sql="insert into sign_stu(rollno,name,age,dob,class,address) values('"+Rollno+"','"+Name+"','"+Age+"','"+Dob+"','"+Class+"','"+Address+"')"
  conn.query(sql)
  
  res.send("data inserted")
  
  
  })

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','login.html'));
})

const PORT = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Server has started on http://localhost:${PORT}`);
});