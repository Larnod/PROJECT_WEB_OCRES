const router = require('express').Router();
let Database = require('C:\Users\vicsa\Desktop\PROJECT_WEB_OCRES\backend\models\DB.js');

//Permet de recup les users dans création des users
router.route('/').get((req, res) => {
    Database.find()
        .then(Db => res.json(Db))
        .catch(err => res.status(400).json('Error: ' + err));
});
//Ajout user
router.route('/add').post((req, res) => {
    const UserData = req.body.UserData;

    const newUser = new Database({ UserData });

    newUser.save()
        .then(() => res.json('user added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
