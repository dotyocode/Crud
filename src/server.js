//importando o app apra dentro do server
 import app from './app';

 app.listen(3333, () => {
     console.log('Pronto, servidor conectado com sucesso!')
     console.log('Servidor rodando em http://localhost:3333')
 });