const connection = require('../database/connection')

module.exports = {
    async create(request,  response){
        const {name, password} = request.body;

        const user = await connection('users').where('name',name).select('*').first();

        if(!user){
            return response.status(400).json({error :'Usuario não encontrado'})
        }else{
            if(password != user.password){
                return response.status(400).json({error :'Senha ou usuario incorreto'})
            }else{
                return response.json(user)
            }
        }

    }

}