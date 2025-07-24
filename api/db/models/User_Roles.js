const mongoose = require('mongoose');

const shema = mongoose.Schema({
    role_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    
},{
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class UserRoles extends mongoose.Model {
    
}

shema.loadClass(UserRoles);
module.exports = mongoose.model('user_roles', shema);