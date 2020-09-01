const pool = require('../db/pool');

async function gitAuteurs(){
    let result = await pool.query('SELECT * FROM auteur').catch(error=>{
        console.log(error);
        throw new Error ("Error");
    })
    return result.rows ;
}
async function gitAuteurById(id){
    
    let result = await pool.query(`SELECT * FROM auteur WHERE id = $1`,[id]).catch(error=>{
        throw new Error ("Error");  
    })
    return result.rows[0];
}
async function addAuteur(auteur){
    const { nom , prenom , email , bio } = auteur;
    let result = await pool.query(`INSERT INTO auteur(
        nom ,prenom , email , bio )
        VALUES ($1 , $2 , $3 , $4)`, 
        [nom , prenom , email , bio ]
    ).catch(error=>{
        throw new Error ("Error");
    })
    return result.rows ;
}
async function deleteAuteur(id){
    let result = await pool.query(`DELETE FROM auteur WHERE id = $1`,[id]).catch(error=>{
        throw Error ("Error");
    })
    return result.rows ; 
}
async function updateAuteur(auteur , id){
    const {nom , prenom , email , bio } = auteur;
    let result = await pool.query(`UPDATE auteur SET nom = $1 , prenom = $2 , email =$3 , bio = $4 WHERE id =$5`,
     [nom , prenom , email , bio , id]).catch(erroe =>{
         throw new Error ("Error");
     })
     return result.rows ;
}
module.exports = {
    gitAuteurs ,
    gitAuteurById,
    addAuteur,
    deleteAuteur,
    updateAuteur
}
