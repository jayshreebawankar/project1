const express = require('express');
// const HttpError = require('../module/http-error')

let DUMMY_PLACES = [
    {
        id : '01',
        Tuition : 'D`soft Computer Training Centre 3',
        description : 'One of the best computer institute from Nagpur',
        address : 'Dattatraya Nagar',
        student : 'rohan',
        location : {
            lat : 49.324554,
            lng : 23.563135,
        },
        college : 'Ambedkar college Nagpur',
        creator : 'u1'
    },
    {       
        id :"02",
        Tuition : 'D`soft Computer Training Centre',
        description :  'one of the bext institute of nagpur',
        address : 'Dattatraya Nagar',
        student : 'jayshree',
        location : {
            lat : 49.324554,
            lng : 23.563135, 
        },
        college : 'Shri Mathuradas Mohota College of Science',
        creator : 'u1'
    },
    {
        id : '03',
        Tuition : 'D`soft Computer Training Centre 2',
        description : 'Full Stack Developer is at your home with best tutors....',
        address : 'Dattatraya Nagar',
        student : 'saurabh',
        location : {
            lat : 49.324554,
            lng : 23.563135,
        },
        college : 'Shri Mathuradas Mohota College of Science',
        creator : 'u3'
    },
    {
        id : '04',
        Tuition : 'D`soft Computer Training Centre 3',
        description : 'One of the best computer institute from Nagpur',
        address : 'Dattatraya Nagar',
        student : 'roshan',
        location : {
            lat : 49.324554,
            lng : 23.563135,
        },  
        college : 'Shri Mathuradas Mohota College of Science',
        creator : 'u4'
    }
]

const getPlaceByID=((req, res, next) =>{
    const placeID = req.params.pid;
    const places = DUMMY_PLACES.find(p =>{
        return p.id == placeID || p.Tuition == placeID || p.description == placeID || p.address == placeID || p.student == placeID || p.location == placeID || p.college == placeID || p.creator == placeID;
    })
    // if(!places){
    //     throw new HttpError('Counld not find places, please recheck url...', 404);
    // }
    res.json({places});
})

// const createNewPlace = ((req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return next(
    //     new HttpError('Invalid inputs passed, please check your data.', 422)
    //   );
    // }
  
//     const { title, description, address, creator, coordinates } = req.body;
  
//     const result={
//         title,description,address,creator,coordinates
//     }

//     DUMMY_PLACES.push(result)

//     res.json(DUMMY_PLACES);
// });    

const createNewPlace = ((req, res, next) => {
    const {id, description, address, student, location, college, creator} = req.body;

    const createPlace=({
        id,  
        description, 
        address,
        student, 
        location,
        college, 
        creator   
    })

    DUMMY_PLACES.push(createPlace);
    res.json(DUMMY_PLACES);
})
exports.getPlaceByID=getPlaceByID
exports.createNewPlace = createNewPlace