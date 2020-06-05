const express = require('express');
const usersController = require('./controllers/usersControllers');
const sessionController = require('./controllers/sessionController');
const produtoController = require('./controllers/produtoController');

const connection = require('./database/connection')

/* multer para upload de arquivos */
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router();

routes.post('/sessions', sessionController.create)

routes.get('/users', usersController.index)

routes.post('/users', usersController.create);

routes.post('/users/:id', usersController.update);
routes.post('/userpass/:id', usersController.updatePassword);

routes.delete('/users/:id', usersController.delete);


routes.get('/produtos', produtoController.index);


routes.post('/posts', multer(multerConfig).single('file'), async (req, res) =>{
    console.log(req.file.path)
    const {categoria, modelo, fabricante, caracteristica} = req.body;

        const imagem = req.file.path+req.file.filename;
        const isEol = true;

        await connection('produtos').insert({
             categoria,
             modelo, 
             fabricante, 
             caracteristica,
             imagem, 
             isEol,
        })

        return res.json({modelo})
})

module.exports = routes;