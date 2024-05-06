const modelfilecallind = require("../model/model");

exports.create=(req,res)=>{
    let savedata = new modelfilecallind({
        fname:req.body.fname,
        sname:req.body.sname,
        email:req.body.email,
        pnumber:req.body.pnumber,
        dob:req.body.dob,
        age:req.body.age,
        gender:req.body.gender,
        address:req.body.address,
        selectedOption: req.body.selectedOption
    })
    
    savedata.save().then((dd)=>{
        console.log(dd);
        res.redirect('/thankyou')
    })      
}

exports.find=(req,res)=>{
    modelfilecallind.find().then((users)=>{
        console.log(users);
        res.send(users)
    })   
}