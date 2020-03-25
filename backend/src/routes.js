const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rota / Recursos
 */

/**
 * Métodoos HTTPP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Querry: Parâmetros nomeado eviados na rota após "?" (Filtros, páginacão)
 * Route Params: Parâmetros uutilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recuros
 */

/**
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */


/**
 * Driver: Select * FROM users
 * Query Builder: table('users').select('*').where()
 */

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;