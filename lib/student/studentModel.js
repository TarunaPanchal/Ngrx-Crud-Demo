const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    std: {
        type: String
    },
    school: {
        type: String,
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, { timestamps: false }, { versionKey: true });

module.exports = mongoose.model('student', studentSchema);