const mongoose=require('mongoose');

const Schema= mongoose.Schema;

let cardSchema= new Schema({
    heading:{
        type:String,
        
    },
    description:{
        type:String
    },
    address:{
        type:String
    },
},
{
    collection:"cards"
})

module.exports=mongoose.model("cards",cardSchema);