const connection = require('../database/connection')

module.exports = {
    async index (request, response){
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response){
        const {name, password, access} = request.body;
    
        const user = await connection('users').select('*').where('name',name).first();

        if(user == undefined){
            await connection('users').insert({
                name,
                password,
                access,
            });
    
            return response.json({name});
        }else{
            return response.status(401).json({error: 'Usuario já existe'});
        }

        
    },

    async update(request, response){
        const {name} = request.body;
        const {id} = request.params;

        try{
            await connection('users').where('id', id).update('name', name);
            const user = await connection('users').select('name').where('id',id);

            return response.json(user);
        }catch(err){
            return response.status(401).json({error: "não foi possível atualizar"})
        }
    },

    async updatePassword(request, response){
        const {password} = request.body;
        const {id} = request.params;

        try{
            await connection('users').where('id', id).update('password', password);
            const user = await connection('users').select('name').where('id',id);

            return response.json(user);
        }catch(err){
            return response.status(401).json({error: "não foi possível atualizar"})
        }
    },

    async delete(request, response){
        const {id} = request.params;

        const id_log = request.headers.authorization;

        const user = await connection('users').where('id', id_log).first();
 
        if(user.access != 1 ){
            return response.status(401).json({error: 'operação não permitida'});
        }
        else if(user.id == id){
            return response.status(401).json({error: 'operação não permitida 2'});
        }
        await connection('users').where('id', id).delete();

        return response.status(204).send();
      
    }
}