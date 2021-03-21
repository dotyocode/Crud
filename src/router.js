//importando o router do express
import { Router } from 'express';
import Cadastro from './models/Cadastro';
//fazendo o router receber uma constante
const router = new Router;

//importando o cadastroController para dentro da rotas
import CadastroController from './controllers/CadastroController';

    
//rotas de teste
router.get('/cadastrar', (req,res,next) => {
    res.render('admin/cadastrar')
})


router.post('/cadastro', CadastroController.store)

router.get('/', CadastroController.index)

router.post('/editar/:id', CadastroController.update)

router.get('/editar2/:id', CadastroController.update2)

router.get('/deletar/:id', CadastroController.delete)



export default router;