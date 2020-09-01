import { Router, request, response } from 'express';
import {pool} from '../db/pool';
import {getArticles , getArticleById , addArticle ,deleteArticle , updateArticle } from '../services/article_db';

const router = Router() ;


router.get('',(request, response, next)=>{
    getArticles()
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'))
    
})
router.get('/:id',(request,response,next)=>{
    getArticleById(request.params.id)
    .then(result=>response.json(result))
    .catch(error => response.status(500).send('Pas de connexion'))
})
router.post('',(request,response,next)=>{
    addArticle(request.body)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'))
})
router.delete('/:id',(request,response,next)=>{
    deleteArticle(request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
router.put('/:id',(request,response,next)=>{
    updateArticle(request.body , request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
/*
router.get('',(request , response , next)=>{
    pool.query('SELECT * FROM fournisseurs' , (error , result )=>{
        if (error) return next(error);
        response.json(result.rows);

    });
    
   
});
router.get('/:id', (request, response) =>{
    pool.query('SELECT * FROM fournisseurs WHERE id = $1 ', [request.params.id], (error, result) =>{
        if (error) return next(error);
        response.json(result.rows);
        
    })
})
router.post('', (request, response ,next)=>{
    pool.query('INSERT INTO fournisseurs (nom, description , ferme , archive , horaire , tel ) VALUES($1, $2, $3, $4, $5, $6)',
    [request.body.nom , request.body.description , request.body.ferme , request.body.archive , request.body.horaire , request.body.tel],
    (error , result)=>{
        if (error) return next(error);
        response.json(result.rows);
    });
       
})
router.delete('', (request,response,next)=>{
    pool.query('DELETE FROM fournisseurs WHERE id = $1' ,[request.body.id] ,(error , result)=>{
        if (error) return next(error);
        response.json(result.rows);
    })
})
router.put('',(request,response,next)=>{
    pool.query('UPDATE fournisseurs SET nom = $1, description = $2 , ferme = $3 , archive = $4, horaire =$5 , tel = $6 WHERE id=$7',
    [request.body.nom , request.body.description , request.body.ferme , request.body.archive , request.body.horaire , request.body.tel , request.body.id],
    (error,result)=>{
        if (error ){
            console.log(error);
            return next(error);
        } 
        response.json(result.rows);
    })
})
*/
module.exports = router;
