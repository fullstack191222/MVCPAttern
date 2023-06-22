// const {updateAirline:updateAirlineDB,deleteAirline:deleteAirlineDB
//     ,addAirline:addAirlineDB,
//     getAirlineById:getAirlineByIdDB
//     ,getAirlineById2:getAirlineById2DB} = require("./model/airlinesDb")



const airlinesDbFunctions = require("../model/airlinesDb")

const getAirlineById = async (req,res) => {
    try {
        const id = req.params.id
        const result = await airlinesDbFunctions.getAirlineById2(id)
        res.send(result)
    } catch (err) {
        res.send(err)
    }
}


const addAirline = async (req,res)=> {
    try {
        const newAirline = req.body
        const result = await airlinesDbFunctions.addAirline(newAirline)
        res.send(result)
    } catch(err) {
        res.send(err)
    }
}

const updateAirline = async (req, res)=> {
    try {
        const updatedAirline = req.body
        const result = await airlinesDbFunctions.updateAirline(updatedAirline)
        res.json(result)
    } catch (err) {
        res.status(500).send(err)
    }
}


const deleteAirline = async (req,res)=> {
    try {
        const id = req.params.id
        const result = await airlinesDbFunctions.deleteAirline(id)
        res.json(result)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    getAirlineById,
    addAirline,
    updateAirline,
    deleteAirline
}