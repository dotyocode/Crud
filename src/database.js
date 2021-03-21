//importando o mongoose para dentro da database
import mongoose from 'mongoose'

//colocando o dotenv aqui
require('dotenv').config();

//configuração padrao mongoose VIA URL
mongoose.connect(process.env.CONNECTIONSTRING,
    {useNewUrlParser: true, useUnifiedTopology: true},
    console.log('Mongodb conectado com sucesso ✿')
);

