const mongoose = require('mongoose');

const shema = mongoose.Schema({
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
    },
    {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }}
);

class AuditLogs extends mongoose.Model {
    
}

shema.loadClass(AuditLogs);
module.exports = mongoose.model('auditLogs', shema);