const express = require('express')
const firebase = require("./config/firebase.js")
const router = express.Router();


// let entries = [{
//     "resume_entries_default": {
//         "professional_experience": {
//             "ABC": {
//                 "from": "2020, 4, 1",
//                 "title": "Employer 2",
//                 "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
//                 "color": "#2ecc71",
//                 "showDayAndMonth": true
//             },
//             "DEF": {
//                 "from": "2018, 10, 1",
//                 "title": "Employer1",
//                 "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
//                 "color": "#e74c3c",
//                 "showDayAndMonth": false
//             }
//         },
//         "education": {
//             "XYZ": {
//                 "from": "2014, 1, 2",
//                 "title": "University, Program",
//                 "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
//                 "color": "#e74c3c",
//                 "showDayAndMonth": false
//             }
//         }
//     }
// }]

// router.get('/resume', (req, res) => {
//     res.json(entries);
// });

const educationCollection = 'education';
const professionalXPCollection = 'professional_experience';
const languagesCollection = 'languages';
const programmingCollection = 'programming';

const db = firebase.firestore();

router.get('/prof', async (req, res) => {
    res.status(200).json({"test": "successful"})
});

router.get('/prof', async (req, res) => {
    (async () => {
        try {
            const resumeQuerySnapshot = await db.collection(professionalXPCollection).get();
            const entries = [];
            resumeQuerySnapshot.forEach(
                (doc) => {
                    entries.push({
                        id: doc.id,
                        data: doc.data()
                    });
                }
            );
            res.status(200).json(entries);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

router.get('/languages', async (req, res) => {
    (async () => {
        try {
            const resumeQuerySnapshot = await db.collection(languagesCollection).get();
            const entries = [];
            resumeQuerySnapshot.forEach(
                (doc) => {
                    entries.push({
                        id: doc.id,
                        data: doc.data()
                    });
                }
            );
            res.status(200).json(entries);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

router.get('/programming', async (req, res) => {
    (async () => {
        try {
            const resumeQuerySnapshot = await db.collection(programmingCollection).get();
            const entries = [];
            resumeQuerySnapshot.forEach(
                (doc) => {
                    entries.push({
                        id: doc.id,
                        data: doc.data()
                    });
                }
            );
            res.status(200).json(entries);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


router.get('/logo', async (req, res) => {
    (async () => {
        try {
            const file = firebase.storage().bucket().file("logo2.jpg");
            //console.log(file)
            const config = {
                action: 'read',
                expires: '03-17-2025',
              };
              
              file.getSignedUrl(config, function(err, url) {
                if (err) {
                  console.error(err);
                  return;
                }
    
                  res.status(200).json(url);

              });
   
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

router.get('/prof/img', async (req, res) => {
    (async () => {
        try {
            const file = firebase.storage().bucket().file("resume/profile_resized.jpg");
            //console.log(file)

            const config = {
                action: 'read',
                expires: '03-17-2025',
              };
              
              file.getSignedUrl(config, function(err, url) {
                if (err) {
                  console.error(err);
                  return;
                }

                  res.status(200).json(url);
              });

        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


router.get('/edu', async (req, res) => {
    (async () => {
        try {
            const resumeQuerySnapshot = await db.collection(educationCollection).get();
            const entries = [];
            resumeQuerySnapshot.forEach(
                (doc) => {
                    entries.push({
                        id: doc.id,
                        data: doc.data()
                    });
                }
            );
            res.status(200).json(entries);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});
// router.get('/book/:isbn', (req, res) => {
//     // reading isbn from the URL
//     const isbn = req.params.isbn;

//     // searching books for the isbn
//     for (let book of books) {
//         if (book.isbn === isbn) {
//             res.json(book);
//             return;
//         }
//     }

//     // sending 404 when not found something is a good practice
//     res.status(404).send('Book not found');
// });


// router.post('/resume', (req, res) => {
//     const book = req.body;

//     // output the book to the console for debugging
//      books.push(book);

//     res.send('Resume timeline entries added');
// });


// router.delete('/book/:isbn', (req, res) => {
//     // reading isbn from the URL
//     const isbn = req.params.isbn;

//     // remove item from the books array
//     books = books.filter(i => {
//         if (i.isbn !== isbn) {
//             return true;
//         }

//         return false;
//     });

//     // sending 404 when not found something is a good practice
//     res.send('Book is deleted');
// });

module.exports = router;