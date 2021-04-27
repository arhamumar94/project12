const express =require('express')
const path =require('path')
const {db} =require('./db')
const app=express();
const PORT=process.env.PORT||2678;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)

db.sync().then(()=>{
    console.log(process.env.PORT)
    app.listen(PORT,()=>{
        console.log(`server listeing at port http://localhost:8383`)
    })
   
}).catch((err)=>{
    console.error(new Error(`could not start server`))
    console.error(err);

})

  

