//importando o cadastro do model

import Cadastro from '../models/Cadastro';

class CadastroController{   


    //criar um CRUD de CRIAR
    async store(req,res,next){    

            const erros = []
            
            if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null ){
                erros.push({texto: "Nome Invalido!"})
            }            

            if(req.body.nome.length < 2){
               erros.push({texto: "Nome precisa ter mais que 2 caracter"})
            }

            if(!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null ){
                erros.push({texto: "Idade Invalida!"})
            }

            if(!req.body.email || typeof req.body.email == undefined || req.body.email == null ){
                erros.push({texto: "Email Invalido!"})
            }

            if(erros.length > 0){
                return res.render("admin/cadastrar", {erros: erros})
            }else{

                const {nome, idade, email} = req.body;
    
                const cadastro = await Cadastro.create({
                    nome,
                    idade,
                    email
                }); 

                const cadastros = await Cadastro.find({}).lean()
                req.flash("success_msg", "Usuario cadastrado com sucesso!")
                res.redirect('/')    

            }            
    
        
    }

    //Criado para Listar o CRUD    
    async index(req,res,next){
        const cadastros = await Cadastro.find({}).lean()
        return res.render("admin/index", {cadastros: cadastros})
    }

    //Criado para Editar o CRUD
    async update2(req,res,next) {
        //buscar o id
        const {id} = req.params;      

        const cadastro = await Cadastro.findById(id);
        if(!cadastro){
            return res.status(400).json({error: 'Cadastro não encontrado, tente novamente'})
        }            
        
        return res.render("admin/editar", {cadastros: cadastro})
    }

    //Criado para Editar o CRUD
    async update(req,res,next) {

        const erros = []
            
        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null ){
            erros.push({texto: "Nome Invalido!"})
        }            

        if(req.body.nome.length < 2){
           erros.push({texto: "Nome precisa ter mais que 2 caracter"})
        }

        if(!req.body.idade || typeof req.body.idade == undefined || req.body.idade == null ){
            erros.push({texto: "Idade Invalida!"})
        }

        if(!req.body.email || typeof req.body.email == undefined || req.body.email == null ){
            erros.push({texto: "Email Invalido!"})
        }

        if(erros.length > 0){
            return res.render("admin/index", {erros: erros})
        }

        //buscar o id
        const {id} = req.params;
        const{nome, idade, email} = req.body;

        const cadastro = await Cadastro.findById(id)
        if(!cadastro){
            return res.status(400).json({error: 'Cadastro não encontrado, tente novamente'})
        }

        if(!cadastro){
            return res.status(400).json({error: 'Cadastro não encontrado, tente novamente'})
        }
        cadastro.nome = nome
        cadastro.idade = idade
        cadastro.email = email

        await cadastro.save()
        req.flash("success_msg", "Usuario Editado com sucesso!")
        res.redirect('/')        
    }

    //Criado para DELETAR o CRUD

    async delete(req,res,next){
         //buscar o id
         const {id} = req.params;
         const cadastro = await Cadastro.findById(id)
         if(!cadastro){
             return res.status(400).json({error: 'Cadastro não encontrado, tente novamente'})
         }

         await cadastro.remove()
         
         const cadastros = await Cadastro.find({}).lean()
         req.flash("info_msg", "Usuario DELETADO com sucesso!")
         res.redirect('/')
         

    }
    
}



export default new CadastroController()

