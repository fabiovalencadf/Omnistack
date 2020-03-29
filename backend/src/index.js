const express = require('express');
const cors = require('cors');   
const app = express();

//aqui eu uso o ./ porque esse routes eu exportei do routes.js ele é um arquivo, e nao uma biblioteca de sistema
const routes = require('./routes'); 

app.use(express.json());
app.use(cors());
app.use(routes); 

//porta para 'ouvir' o node - definicao do curso
app.listen(3333);

