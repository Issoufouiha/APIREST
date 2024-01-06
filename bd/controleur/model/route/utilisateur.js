const express = require('express');
const { ajoutUtlisateur } = require('../../utilisateurs');
const router = express.Router();


router.route('/utlisateurs').post(ajoutUtlisateur)


module.exports = router;