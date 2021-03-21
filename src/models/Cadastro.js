import {Schema, model} from 'mongoose';

const CadastroSchema = new Schema ({

    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

export default model('Cadastro', CadastroSchema);