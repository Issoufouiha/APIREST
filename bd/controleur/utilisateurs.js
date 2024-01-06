const { Utilisateur } = require("./model/utilisateur")

const client = require('../connect')


const ajoutUtlisateur = async (req,res)=>{
    try{
        console.log(req);
        let utilisateur = new Utilisateur (req.body.nom, req.body.adress, req.body.telephone);
        let result = await client.bd().collection("users").insertOne(utilisateur)
        res.status(200).json(result)
    } catch(error){
        console.log(error);
        res.status(500).json(error);

    }
}

module.exports = {ajoutUtlisateur};