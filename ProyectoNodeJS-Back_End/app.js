import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { get } from 'underscore';

const app = express();
// Conexión base de datos
const mongoose = require('mongoose');


//const uri = 'mongodb://{ip_local}:{puerto}/{bd_name}'; //Luego de una actualización en node, se requiere colocar 0.0.0.0 en vez de localhost
const options = {useNewUrlParser: true, useUnifiedTopology: true};



// Or using promises
mongoose.connect(uri, options).then(

  () => { console.log('Conectado a DB probando') },

  err => { console.log(err) }
  );




app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api', require('./routes/login')); 


app.use('/api', require('./routes/nota')); 
app.use('/api', require('./routes/user'));  
app.use('/api', require('./routes/userData'));  


const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});
