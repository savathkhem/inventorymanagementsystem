const pgp = require('pg-promise')({

    query: e => {

        console.log('QUERY: ' + e.query)

    }

});

const options = {
    user: 'postgres',
    password: 'uniflow1',
    port: 5432,
    host: 'localhost',
    database: 'inventory-app'
}

// make a connection to the database, specified by the options object
const db = pgp(options);

module.exports = db;