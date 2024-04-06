const express = require('express')
const app = express()
const port = 1234
app.use(express.static(__dirname+"/pubic"))
app.get('/mru/:name',(req,res)=>{
  if(req.params.name=="Nishanth")
  res.send("you rae valid user"+"<h1>"+req.params.name)
else{
  res.send("you are theft")
}
  //res.send("<h1>"+req.params.name+"</h1>")
})
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.listen(1234, () => {
  console.log(`Example app listening on port ${port}`)
})