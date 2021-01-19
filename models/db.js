const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CompanyData', { useNewUrlParser: true },(err) =>{
    if(!err){ console.log('Connection Successful !!!')}
    else{ console.log('Error: ',err) }
});

require('./company.model');
