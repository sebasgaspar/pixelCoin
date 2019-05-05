const port = 3000;
const express = require('express');
const app = express();


//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const indRoutes = app.use(require('./routes/index'));


app.listen(port,()=>{
  console.log("Servidor corriendo en el puerto: ",port)
});
