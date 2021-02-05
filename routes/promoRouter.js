const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next(); //next() makes the control continue the next specifications if specified
})
.get((req, res, next) => {
    //the modified res values will be contnued here from .all method
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    //req.body will have parameters as name and description.
    //req.body will have data to be created in the server 
    res.end(`Will add the promotion : ${req.body.name} with details : ${req.body.description}` );
})
.put((req, res, next) => {
    res.statusCode = 403; 
    res.end("PUT operation isn't supported!");
})
.delete((req, res, next) => {
    res.end('Deleting all the promotions!');
});

promoRouter.route('/:promoId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send details of the promotion : '+ req.params.promoId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403; 
    res.end("POST operation isn't supported on /promotions/" + req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the promotion : ' + req.params.promoId + '\n');
    res.end('Will update the promotion : '+ req.body.name + ' with details: '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion : ' + req.params.promoId);
});

module.exports = promoRouter;
