const mongoose = require('mongoose');

const shema = mongoose.Schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    Permission: {type:String, required: true},
    created_by :{ type:mongoose.SchemaTypes.ObjectId , required: true},
    },
    {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }}
);

class RolePrivileges extends mongoose.Model {
    
}

shema.loadClass(RolePrivileges);
module.exports = mongoose.model('role_privileges', shema);