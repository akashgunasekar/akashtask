exports.sportformfile=(req,res)=>{
res.render("sportform")
}

 const axios = require("axios")



exports.thankyoufile=(req,res)=>{
    res.render("thankyou")
}

exports.data=(req,res)=>{
    axios.get('http://localhost:7000/api/users').then(function (myresponse) {
        console.log(myresponse);
        res.render("data",{users:myresponse.data})
    })
}
