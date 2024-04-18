
let mongoose=require('mongoose');
let express=require('express');
let router=express.Router();

//card model
let cardSchema= require("../models/card");

router.route("/create-card").post(async (req,res,next)=>{
    await cardSchema.create(req.body)
    .then((result)=>{
        res.json({
            data:result,
            message:"Data Successfully Added !",
            status:200,
        })
    })
})

//read card data
 router.route("/").get(async (req,res,next)=>{
    await cardSchema.find()
    .then((result)=>{
        res.json({
            data:result,
            message:"All times fetched successfully",
            status:200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
 })

 //get single card data
router.route("/get-card/:id").get(async(req,res,next)=>{
    await cardSchema.findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"Data successfully fetched",
            status:200,
        })
    })
    .catch((error)=>{
        return next(error);
    })
});

//update the card data
router.route("/update-card/:id").put(async(req,res,next)=>{
    await cardSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        console.log(result);
        res.json({
            data:result,
            msg:"Data successfully updated",
        });

    })
    .catch((err)=>{
        console.log(err);
    })
})

//delete student data

router.route("/delete-card/:id").delete(async(req,res,next)=>{
     await cardSchema.findByIdAndDelete(req.params.id)
     .then(()=>{
        res.json({
            msg:"Data successfully updated",
        });
     })
     .catch((error)=>{
        console.log(error);
     })
     
})

module.exports=router