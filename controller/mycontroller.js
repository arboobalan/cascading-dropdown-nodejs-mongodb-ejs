const express = require('express');
const router = express.Router();
const UniversityModel = require('../model/university_model');
const ExamModel = require('../model/examdrive_model');
const SubjectModel = require('../model/subname_model');


router.get('/', async (req, res) => {

    try {
        //console.log('ID  => ' + req.params.id);
        const users = await UniversityModel.find();
        //console.log('users  => ' + users);
        res.render('index', { users: users });
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {

    try {
        //console.log('ID  => ' + req.params.id);
        const users = await ExamModel.find({ universityName: req.params.id });
        // console.log('exams => ' + users);
        res.json({ users });
    } catch (err) {
        console.log(err);
    }
});


// router.get("/edit/:id", (req, res) => {
//     let id = req.params.id;
//     UniversityModel.findById(id, (err, users) => {
//         if (err) {
//             res.redirect('/');
//         } else {
//             if (users == null) {
//                 res.redirect('/');
//             } else {
//                 res.redirect('edit_users', {
//                     title: 'EDIT PAGE',
//                     users: users
//                 });
//             }
//         }
//     });
// });



// router.get('/:universityId', async (req, res) => {
//     const universities = await UniversityModel.find({ universityId: req.params.universityId });
//     console.log(universities);
//     res.redirect('/');
// });

router.post('/get-university-by-examdrive', async (req, res) => {

    const examDrives = await ExamModel.find({ universityName: req.body.universityName });
    // console.log(examDrives);
    res.json({ examDrives })

    // const posts = await ExamModel.find().populate('universityId');
    // console.log('Your Post ' + posts);
});


router.post('/get-examdrive-by-subject', async (req, res) => {

    console.log(req.body);
    const subjectDrives = await SubjectModel.find({ universityName: req.body.universityName });
    // console.log(subjectDrives)
    res.json({ subjectDrives })
});

router.post('/universityForm', (req, res) => {

    var data = new UniversityModel();
    data.universityName = req.body.universityName;
    var save = data.save();

    if (save) {
        console.log(`Given universityName: ${req.body.universityName} is saved`);
        res.redirect('/');
    } else {
        console.log('universityName is not saved');
    }
});

router.post('/examDriveForm', async (req, res) => {
    try {

        // const universityId = req.params._id;
        // const university = await UniversityModel.find(universityId).select('_id');

        // if (!university) {
        //     return res.status(404).json({ message: 'University not found' });
        // }
        // console.log('ID ' + university);

        const ID = await UniversityModel.findOne({ universityName: req.body.select_university });

        const data = new ExamModel({
            examDriveName: req.body.examDriveName,
            universityName: req.body.select_university,
            universityId: ID._id
        });

        //console.log('Your ID is => ' + ID);

        var save = data.save();
        if (save) {
            console.log(`Data added successfully`);
            res.redirect('/');
        } else {
            console.log('Data not added');
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/nameOfSubject', async (req, res) => {

    //console.log(req.body.select_examdrive1);

    const examID = await ExamModel.findOne({ universityName: req.body.select_university1 });
    //console.log('exam ID => ' + examID);

    var data = new SubjectModel({
        universityName: req.body.select_university1,
        examDriveName: req.body.select_examdrive1,
        subjectName: req.body.subjectName,
        subjectCode: req.body.subjectCode,
        examDriveId: examID._id
    });

    var save = data.save();

    if (save) {
        console.log(`Data added successfully`);
        res.redirect('/');
    } else {
        console.log('Data not added');
    }
});


module.exports = router;