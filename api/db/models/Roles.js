const mongoose = require('mongoose');

const shema = mongoose.Schema({
    role_name: {type:String, required: true},
    is_active:{type:String, default: true},
    created_by:{type:mongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class roles extends mongoose.Model {
    
}

shema.loadClass(roles);
module.exports = mongoose.model('roles', shema);