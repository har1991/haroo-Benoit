const pool = require('../db/pool');
const { errorControlling } = require('./errors_db')
const { response } = require('express');



export async function getComentaires(){
    
    let result = await pool.query('SELECT * FROM commentaire').catch(error=>{
        throw new Error ("Error");

    })
    return result.rows;
    //console.log(result.rows.map(row =>row.titre));
   
}
/*
async function replaceBadWords(){
    let mots = await getMotsInterdits();
    console.log(mots);
}*/
export async function getMotsInterdits(){
    let result = await pool.query('SELECT * FROM motsinterdits').catch(error=>{
        throw new Error ("Error");

    })
    return result.rows.map(row=>row.mots);
}
/*
if (result.rows[0] === undefined){
            throw new Error ("PAS DE ID");
        } else {
            throw new Error ("Error");
        }*/
export async function getCommentaireById(id){
    let result = await pool.query(`SELECT * FROM commentaire WHERE id = $1;`,[id]).catch(error=>{
        //throw new Error ("Error");
        
            throw new Error ("Error");
        
    })
    
    return result.rows[0];
}
export async function addComentaire(commentaire){
    const {titre, prenom , nom ,contenu , date , id_article} = commentaire ;
    let mots = await getMotsInterdits();
    console.log(mots);
    let motInterdit = mots.some(mot=> contenu.includes(mot)) ||
     mots.some(mot=>titre.includes(mot)) ||
     mots.some(mot=>prenom.includes(mot))||
     mots.some(mot=>nom.includes(mot));
     //let resultError =  await errorControlling();
    if (motInterdit){
        //resultError;
        throw new Error ('MOTS INTERDITS');
    }
    
    let result = await pool.query(`INSERT INTO commentaire (titre , prenom , nom , contenu , date, id_article)
    VALUES ($1 , $2 , $3 , $4 , $5 , $6)`,[titre , prenom , nom , contenu , date , id_article]).catch(error=>{
        throw errorControlling(error)
    })
    return result.rows;
}
export async function deleteCommentaire(id){
    let result =await pool.query(`DELETE FROM commentaire WHERE id = $1`,[id]).catch(error=>{
        throw Error ("Error");
    })
    return result.rows ; 
}
export async function updateCommentaire(commentaire , id){
    const {titre, prenom , nom ,contenu , date , id_article } = commentaire;
    let result = await pool.query(`UPDATE commentaire SET titre = $1 , prenom = $2 ,
     nom =$3 , contenu = $4 , date = $5 , id_article=$6 WHERE id =$7`,
     [titre, prenom , nom ,contenu , date , id_article,id]).catch(error =>{
         throw new Error ("Error");
     })
     return result.rows ;
}





