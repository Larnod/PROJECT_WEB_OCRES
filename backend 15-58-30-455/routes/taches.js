const router = require('express').Router();
let Tache = require('../models/tache.model');

//Affichage Taches dans le tableau 
router.route('/').get((req, res) => {
    Tache.find()
        .then(taches => res.json(taches))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Création Tâches
router.route('/add').post((req, res) => {
    const eventname = req.body.eventname;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newTache = new Tache({
        eventname,
        description,
        duration,
        date,
    });

    newTache.save()
        .then(() => res.json('Tache added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Recup taches par id 
router.route('/:id').get((req, res) => {
    Tache.findById(req.params.id)
        .then(tache => res.json(tache))
        .catch(err => res.status(400).json('Error: ' + err));
});
//Supprime Taches
router.route('/:id').delete((req, res) => {
    Tache.findByIdAndDelete(req.params.id)
        .then(() => res.json('tache deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;