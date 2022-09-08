const {Router} =require("express")
const Scootys = require("../model/scooty.model")


const scootyRouter = Router()

scootyRouter.post("/create", async(req,res)=>{
    try {
        
        let scooty = await Scootys.create(req.body);

        return res.status(200).send(scooty)
    }
    catch(error) {
         return res.status(500).send({message:error.message})
    }
})
scootyRouter.get("/", async(req,res)=>{
    try {
        
        let scooty = await Scootys.find().lean().exec()

        return res.status(200).send(scooty)
    }
    catch(error) {
         return res.status(500).send({message:error.message})
    }
})
scootyRouter.get("/get/:city", async(req,res)=>{
    try {
        
        let scooty = await Scootys.find({city:req.params.city});

        return res.status(200).send(scooty)
    }
    catch(error) {
         return res.status(500).send({message:error.message})
    }
})


module.exports = scootyRouter
    



