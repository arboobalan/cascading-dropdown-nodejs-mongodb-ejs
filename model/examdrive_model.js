const mongoose = require("mongoose");

const examdriveSchema = mongoose.Schema({
    examDriveName: {
        type: String,
        required: true
    },
    universityName:{
        type:String,
        required:true
    },
    universityId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'university',
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    });

const ExamModel = mongoose.model('examdrive', examdriveSchema, 'examdrive');

module.exports = ExamModel;