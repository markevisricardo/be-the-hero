const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma inforção do back-end
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */


  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parametros nomeados na rota após o simbolo de "?"
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Micrisift SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver : SELECT * FROM users
     * Query Builder: table('users).select('*').where()
     * Vamos usar o Knex Query Builder
     */

