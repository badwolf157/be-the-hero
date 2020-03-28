const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//primeira demostração
//app.get('/', (request, response) => { 
   // return response.send('hello word!')
   // setinha = >
//});

/**
 * Rota / recurso
 */

 /**
  * metodo http
  * get: buscar infomação do back-end
  * post: criar uma infomação no back-end
  * put: alterar uma infomação no back-end
  * delete: deletar uma informação no back-end
  */
 /**
  * tipos de paramentros
  * 
  * query params: parametros nomeados enviados na rota apos "?" (filtros, paginação)
  * route params: parametros utilizados para identificar recursos
  * request body: corpo da requisicao utilizado para criar ou alterar recursos
  */

  /**
   * Sql: Mysql,SQLite, postgresql, oracle, microsoft sql server
   * Nosql: mongodb couchdb,etc
   */


   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where
    */


app.listen(3333);