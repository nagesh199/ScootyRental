const {Schema,model} = require("mongoose")

const Scootyshema = new Schema({
    imgUrl:String,
    location:String,
    city:String,
    scootyname:String,
    price:String
  }
);

const Scootys = model("Scooty",Scootyshema);

module.exports = Scootys