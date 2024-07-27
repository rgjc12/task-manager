const express=require("express");
const ejs=require("ejs");
const app=express();
const fs=require("fs");
const path=require("path");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
const port=3000;


app.get("/",(req,res)=>{
   fs.readdir(`./tasks`,(err,files)=>{
    if(err){
        res.send(err.message);
    }
    else{
        res.render("index.ejs",{
            files
        });
    }
   });
});
app.get("/create",(req,res)=>{
    res.render("create.ejs");
});
app.get("/edit/:filename",(req,res)=>{
    fs.readFile(`./tasks/${req.params.filename}`,"utf-8",(err,filedata)=>{
        if(err){
            res.send(err.message);
        }
        else{
            res.render("edit.ejs",{filedata,
            filename:req.params.filename});
        }
    })
   
});
app.get("/read/:filename",(req,res)=>{
    fs.readFile(`./tasks/${req.params.filename}`,"utf-8",(err,filedata)=>{
        if(err)
        {
            res.send(err.message);
        }
        else{
            res.render("read.ejs",{
                filedata,
                filename:req.params.filename
            });
        }
    })
  
});
app.get("/delete/:filename",(req,res)=>{
    fs.unlink(`./tasks/${req.params.filename}`,(err)=>{
        if(err){
            res.send(err.message);
        }
        else{
            res.redirect("/");
        }
    })
});

app.post("/createtask",(req,res)=>{
    fs.writeFile(`./tasks/${req.body.title}`,req.body.content,(err)=>{
        if(err)
        {
            res.send(err.message);
        }
        else{
            res.redirect("/");
        }
    });
});
app.post("/update/:filename",(req,res)=>{
    fs.writeFile(`./tasks/${req.params.filename}`,req.body.content,(err)=>{
        if(err)
        {
            res.send(err.message);
        }
        else{
            res.redirect("/");
        };
    });
});




app.listen(port,()=>{
    console.log(`Listening at ${port}`);});