const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next(); //next() makes the control continue the next specifications if specified
})
.get((req, res, next) => {
    //the modified res values will be contnued here from .all method
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    //req.body will have parameters as name and description.
    //req.body will have data to be created in the server 
    res.end(`Will add the leader : ${req.body.name} with details : ${req.body.description}` );
})
.put((req, res, next) => {
    res.statusCode = 403; 
    res.end("PUT operation isn't supported!");
})
.delete((req, res, next) => {
    res.end('Deleting all the leaders!');
});

leaderRouter.route('/:leaderId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send details of the leader : '+ req.params.leaderId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403; 
    res.end("POST operation isn't supported on /leaders/" + req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Updating the leader : ' + req.params.leaderId + '\n');
    res.end('Will update the leader : '+ req.body.name + ' with details: '+ req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader : ' + req.params.leaderId);
});

module.exports = leaderRouter;
