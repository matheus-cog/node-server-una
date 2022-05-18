const express = require("express");
const app = express();
var tools = require('./tools');
var validation = new tools();

app.get('/', function(req, res) {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    res.send("ROTA raiz foi acessada");
});
app.get('/produtos', function(req, res) {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    res.send("ROTA produtos foi acessada");
});
app.get('/filmes/:id', function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    if(validation.isEmpty(req.params.id)){
        res.statusCode = 400; 
        res.send("parametros inválidos"); 
    } else {
        res.statusCode = 200; 
        res.send("ROTA filmes foi acessada");
    }
});

app.post('/musica/:id/:autor/:genero', function(req, res) {
    if(validation.isEmpty(req.params.id) || validation.isEmpty(req.params.autor) || validation.isEmpty(req.params.genero)){
        res.statusCode = 400; 
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
        res.send("parametros inválidos"); 
    } else {
        res.statusCode = 200; 
        res.json({
            "id"    : req.params.id,
            "autor" : req.params.autor,
            "genero": req.params.genero
        });
    }   
});

app.get('*', function(req, res){
    res.status(404).send("parametro(s) ou rota inválida");
});
app.post('*', function(req, res){
    res.status(404).send("parametro(s) ou rota inválida");
});

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000 ...");
});