var express =require('express');
const app=express();
const port=3000;
var multer=require('multer');
var upload =multer({dest:'uploads/'});

app.get('/',(req,res)=>{
    res.send('Hello ');
});

app.listen(port,()=>{
    console.log('listening to this port',+port);
})


app.post('/single',upload.single('profile'),(req,res)=>{
    try{
        res.send(req.file);

    }catch(err){
        res.send(400);
    }
});
