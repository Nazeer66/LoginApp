const express = require('express');
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;


const app = express();

app.use(bodyparser.json());

var db;

mongoClient.connect("mongodb://nazeer:nazeer123@ds215172.mlab.com:15172/mydatabase", (error, dataBase)=>{

if(error)
{
    console.log(error);
}
else {

    db = dataBase;

    console.log("DB connected");
}

})

app.use((req, res, next) => {

    // console.log("start");
 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
     next();
 });
app.post('/register', (req, res)=>{
    console.log(req.body);
    db.collection('sample').insert(req.body, (err , data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            let payload = {subject: data._id};
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token});
            // res.json("user successfully registered");
        }
    })
});

app.post('/login', (req, res)=>{
    console.log(req.body);
    // db.collection('mylogin').find(req.body, {_id:1, username:1}).toArray((error, data)=>{
    db.collection('sample').find(req.body, {_id:1, username:1}).toArray((error, data)=>{    
        if(error){
            console.log(error);
        }else{
            console.log(data);
            let payload = {subject: data._id};
            let token = jwt.sign(payload, 'secretkey')
            console.log("login",token);
            res.status(200).send({token});
            // res.json(token);
        }
    })
})



module.exports = app;
