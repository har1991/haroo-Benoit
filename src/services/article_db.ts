const pool from '../db/pool';
const { response } from 'express';



export async function getArticles(){
    let result = await pool.query('SELECT * FROM article').catch(error=>{
        throw new Error ("Error");

    })
    return result.rows;
}

export async function getArticleById(id){
    let result = await pool.query(`SELECT * FROM article WHERE id = $1;`,[id]).catch(error=>{
        throw new Error ("Error");
        
    })
    return result.rows[0]
}
export async function addArticle(article){
    const {titre, contenu , date ,publie , auteur_id}= article
    let result = await pool.query(`INSERT INTO article (titre , contenu , date , publie , auteur_id)
    VALUES ($1 , $2 , $3 , $4,$5)`,[titre,contenu,date,publie,auteur_id]).catch(error=>{
        throw new Error ("Error")
    })
    result.rows;
}

export async function deleteArticle(id){
    let result =await pool.query(`DELETE FROM article WHERE id = $1`,[id]).catch(error=>{
        throw Error ("Error");
    })
    return result.rows ; 
}
export async function updateArticle(article , id){
    const {titre , contenu , date , publie , auteur_id } = article;
    let result = await pool.query(`UPDATE article SET titre = $1 , contenu = $2 , date =$3 ,
     publie = $4 ,auteur_id= $5  WHERE id =$6`,
     [titre , contenu , date , publie , auteur_id , id]).catch(error =>{
         throw new Error ("Error");
     })
     return result.rows ;
}

