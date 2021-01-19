const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Company = mongoose.model('Company');
const Swal = require('sweetalert2');
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
const alert = require('alert');
var JSAlert = require("js-alert");

router.get('/',(req,res)=>{
    res.render("layouts/mainLayout", {});
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
});


router.get('/lists',(req,res)=>{
    Company.find((err,docs)=>{
        if(!err){
            console.log(docs)
            res.render("layouts/mainLayout",{
                list: docs
            });
        }
        else{
            console.log('Error:',err);
        }
    })

});

function insertRecord(req,res){
    var company = new Company();
    company.fullName = req.body.fullName;
    company.email = req.body.email;
    if (company.email == '' || company.fullName == ''){
        Swal.fire('Please enter Name and Email');
    }
    else{
    company.save((err,doc)=>{
        console.log('saving...')
        if(err){
            alert(err)
        }
        else{
            res.render("layouts/mainLayout", {
              company: req.body,
            });
                    }
    }
    );
}
}

module.exports = router;
