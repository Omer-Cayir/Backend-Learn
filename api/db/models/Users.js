const mongoose = require('mongoose');

const shema = mongoose.Schema({
    email : {type:String, required: true},
    password : {type:String, required: true},
    is_active : {type:String, default: true},
    first_name : String,
    last_name : String,
    phone_number : String
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class users extends mongoose.Model {
    
}

shema.loadClass(users);
module.exports = mongoose.model('users', shema);