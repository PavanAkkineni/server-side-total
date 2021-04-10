const express = require('express');
const bodyParser= require('body-parser');

const promoRouter=express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')

  .all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Context-Type','text/plain');
    next();
  })
  .get((req,res,next) => {
    res.end('will send all the promos to you');
  })
  .post((req,res,next) =>{
    res.end('will add the promo: '+ req.body.name +'with details: '+ req.body.description);
  })
  .put((req,res,next) =>{
    res.statusCode=403;
    res.end('put operation not supported on /promos');
  })
  .delete((req,res,next) =>{
    res.end('deleting all the promos');
  });

promoRouter.route('/:promoId')
  .all((req,res,next) => {
    res.statusCode =200;
    res.setHeader('Context-Type','text/plain');
    next();
  })
  .get((req,res,next) => {
    res.end('will send details of the promo: '+ req.params.promoId +'to you');
  })

  .post((req,res,next) =>{
    res.statusCode=403;
    res.end('post operation not supported on /promos'+ req.params.promoId);
  })

  .put((req,res,next) =>{
    res.write('Updating the promo: '+ req.params.promoId+'\n');
    res.end('will update the promo: '+req.body.name +'with details: '+req.body.description);

  })

  .delete((req,res,next) =>{
    res.end('deleting promo: '+req.params.promoId);
  });


 module.exports=promoRouter;
