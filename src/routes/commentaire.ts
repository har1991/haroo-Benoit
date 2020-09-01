const { Router } from 'express';
const pool from '../db/pool';
const { getComentaires,getCommentaireById ,addComentaire , deleteCommentaire , updateCommentaire , getMotsInterdits } from '../models/commentaire_db';





const router = Router();


router.get('',(request, response, next)=>{
    getComentaires()
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'))
    
})

router.get('/:id',(request, response, next)=>{
    getCommentaireById(request.params.id)
    .then(result=>response.json(result))
    //.catch(error=>response.status(500).send('Pas de connexion'))
    
})
router.post('',(request,response,next)=>{
    addComentaire(request.body)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send(error.message))
})
router.delete('/:id',(request,response,next)=>{
    deleteCommentaire(request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})

router.put('/:id',(request,response,next)=>{
    updateCommentaire(request.body , request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
module.exports= router ;

