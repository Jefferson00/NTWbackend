const connection = require('../database/connection')

module.exports = {
    async index(req, res){
        const produtos = await connection('produtos').select('*')

        return res.json(produtos)
    }

    /*async create(req, res){
        const {categoria, modelo, fabricante, caracteristica} = req.body;

        const imagem = file.filename;
        const isEol = false;

        await connection('produtos').insert({
             categoria,
             modelo, 
             fabricante, 
             caracteristica,
             imagem, 
             isEol,
        })

        return res.json({modelo})
    }*/
}