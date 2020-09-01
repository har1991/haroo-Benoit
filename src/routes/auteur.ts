import  { Router, response, request } from 'express';
import  { gitAuteurs , gitAuteurById , addAuteur , deleteAuteur ,updateAuteur} from '../services/auteur_db';

const router = Router();

router.get('',(request,response,nex)=>{
    gitAuteurs()
    .then(result =>response.json(result))
    .catch(error => console.log(error));
})

router.get('/:id',(request,response,next) => {
    gitAuteurById(request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
router.post('',(request,response,next)=>{
    addAuteur(request.body)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
router.delete('/:id',(request,response,next)=>{
    deleteAuteur(request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
router.put('/:id',(request,response,next)=>{
    updateAuteur(request.body , request.params.id)
    .then(result=>response.json(result))
    .catch(error=>response.status(500).send('Pas de connexion'));
})
/*
router.get('', (request, response, next) => {
    pool.query('SELECT * FROM utilisateurs', (error, result) => {
        if (error) return next(error);
        response.json(result.rows);
    });
    
})
router.get('/:id', (request, response) =>{
    pool.query('SELECT * FROM utilisateurs WHERE id = $1 ', [request.params.id], (error, result) =>{
        if (error) return next(error);
        response.json(result.rows);
        
    })
})


router.post('', (request, response ,next)=>{
    pool.query('INSERT INTO utilisateurs (login, password , nom , prenom , credit , formation , banni , admin ) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    [request.body.login , request.body.password , request.body.nom , request.body.prenom , request.body.credit , request.body.formation , request.body.banni, request.body.admin],
    (error , result)=>{
        if (error) return next(error);
        response.json(result.rows);
    });
       
})
router.delete('', (request,response,next)=>{
    pool.query('DELETE FROM utilisateurs WHERE id = $1' ,[request.body.id] ,(error , result)=>{
        if (error) return next(error);
        response.json(result.rows);
    })
})
;
router.put('',(request,response,next)=>{
    pool.query('UPDATE utilisateurs SET login = $1, password = $2 , nom = $3 , prenom = $4, credit =$5 , formation = $6 , banni = $7 , admin = $8  WHERE id=$9',
    [request.body.login , request.body.password , request.body.nom , request.body.prenom , request.body.credit , request.body.formation , request.body.banni, request.body.admin,request.body.id],
    (error,result)=>{
        if (error) return next(error);
        response.json(result.rows);
    })
})




*/
module.exports = router;