const connection = require('../database/connection')

module.exports = {
    async index (request, response){
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response){
        const {name, password, access} = request.body;
    
        await connection('users').insert({
            name,
            password,
            access,
        });

        return response.json({name});
    },

    async delete(request, response){
        const {id} = request.params;

        const id_log = request.headers.authorization;

        const user = await connection('users').where('id', id_log).first();

        if(user.access != 1 ){
            return response.status(401).json({error: 'operação não permitida'});
        }
        if(user.id === id){
            return response.status(401).json({error: 'operação não permitida 2'});
        }
        await connection('users').where('id', id).delete();

        return response.status(204).send();

    }
}