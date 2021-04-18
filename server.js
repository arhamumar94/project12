const {db}=require('./db')
const express =require('express')
const path =require('path')
const app=express();
const PORT=process.env.PORT||2678;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)

db.sync({alter: true}).then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`started on http://localhost:${PORT}`)
    })
  })