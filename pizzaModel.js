const mongoose=require("mongoose");
const { stringify } = require("querystring");

const pizzaSchema= mongoose.Schema({
    name:{type:stringify,require},
    varients:[],
    prices:[],
    category:{type:String,require},
    image:{type:String,require},
    description:{type:String,required}
 
},{
    timestamps:true,

})
const pizzaModel = mongoose.model('pizza',pizzaSchema)

module.exports = pizzaModel