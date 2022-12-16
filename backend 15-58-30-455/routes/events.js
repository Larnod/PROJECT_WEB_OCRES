const router = require('express').Router();
let Event = require('../models/event.model');

//Permet de recup les events dans création des tâches
router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});
//Ajout Events 
router.route('/add').post((req, res) => {
    const eventname = req.body.eventname;

    const newEvent = new Event({ eventname });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;