const express = require("express");
const connect = require("./bd/connect");
// const { connecter } = require('./bd/connect');
 const routeUtilisateur = require('./bd/controleur/model/route/utilisateur');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", routeUtilisateur);
// connecter('mongodb+srv://Ayouba:ayouba1234@cluster0.t6y45a7.mongodb.net/',(erreur)=>{
//     if (erreur) {
//         console.log('erreur lors de la connection à la base de donnée');

//     }else{
//         console.log('connection à la base de donnée avec sucesse');
//     }
//     console.log(erreur);
// })
app.listen(3000, () => {
  connect();
});
