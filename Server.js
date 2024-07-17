const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const routes = require("./routes/ToDoRoutes")

const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 5000;


///midleware

app.use(express.json());
app.use(cors());

// app.get("/",(req,res) =>{
//     res.send("Hi tapis...")
// })

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("mongo db connected ..."))
.catch((err)=> console.log(err))

app.use("/api", routes);

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})
