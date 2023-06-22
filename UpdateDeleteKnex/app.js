const express = require('express')
const { getAirlineById,
    addAirline,
    updateAirline,
    deleteAirline} = require("./controllers/airlineController")

const {login,
    loginApi} = require("./controllers/loginController")

//const bodyParser = require("body-parser")
const app = express()
app.use(express.json())
//teaching app to take post requests from FORMS
app.use(express.urlencoded({extended: true})) 
// Set EJS as the view engine
app.set('view engine', 'ejs');


//Login APIS
app.get("/login",login )
app.post("/tryLogin",loginApi)



app.get("/", (req,res)=> {
    res.send("hello world")
})


//Airline APIS
app.get("/api/getAirlineById/:id", getAirlineById)
app.post("/api/addAirline",addAirline )
app.put("/api/updateAirline", updateAirline)
app.delete("/api/deleteAirline/:id",deleteAirline)





const port = 4001
app.listen(port , (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("app is running on port", port);
    }
})