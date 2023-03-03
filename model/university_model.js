const  mongoose  = require("mongoose");


const universitySchema = mongoose.Schema({
    universityName: {
        type: String,
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    });

const UniversityModel = mongoose.model('university', universitySchema,'university');

module.exports = UniversityModel;