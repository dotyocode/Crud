//importar o express para dentro do app
import express from 'express';
//recebendo o express dentro da constante app
const app = express();

//importando o database para dentro do app
//database onde ficara o mongoose
import './database';

//importando o path para diretorios publicos
import path from 'path';

//importando o bodyParser
import bodyParser from 'body-parser';

//importando o cookieParser
import cookieParser from 'cookie-parser';

//importando o express session
import session from 'express-session'

 //importando o flash
 import flash from 'connect-flash'


 //configurando o cookie parser
app.use(cookieParser('secret'))
app.use(session({
    secret: 'segredos',
    resave: false,
    saveUninitialized: true,    
  }))

  app.use(flash())

  //middleware
  app.use((req, res, next) => {
      res.locals.success_msg = req.flash("success_msg")
      res.locals.error_msg = req.flash("error_msg")
      res.locals.info_msg = req.flash("info_msg")
      next()
  })



//configuração padrao body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


  
//importando as rotas para dentro do app
import router from './router'
//fazendo a variavel app usar o express
app.use(express.json());
//usando as rotas do routes
app.use(router);

app.use('/static', express.static(__dirname + 'public'))

//importando o handlebars
const hbs = require('express-handlebars');
//configurando o handlesbars
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs')





//exportando o app
export default app;
