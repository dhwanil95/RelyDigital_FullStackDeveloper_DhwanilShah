const mongoose = require('mongoose');
 
var companySchema = new mongoose.Schema({
    fullName:{
        type: String,
      //  required: 'This field is required'
    },
    email:
    {
        type: String
    }
});

companySchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email')

mongoose.model('Company',companySchema);