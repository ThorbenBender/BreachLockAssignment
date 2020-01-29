const knex = require('knex');
const knexfile = require('../knexfile');


const env = 'development';
const configuration = knexfile[env];

const db = knex(configuration);

module.exports = db;