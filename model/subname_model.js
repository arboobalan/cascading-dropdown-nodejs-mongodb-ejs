const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    universityName: {
        type: String,
        required: true
    },
    examDriveName: {
        type: String,
        required: true
    },
    subjectName: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    examDriveId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'examdrive',
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    });

const SubjectModel = mongoose.model('subject', subjectSchema, 'subject');

module.exports = SubjectModel;