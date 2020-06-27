const path = require( "path" );

//DON'T FORGET TO ADD SCRIPTS BELOW!

console.log( process.env.USER );
// Update with your config settings.
module.exports = {
  development: {
    client: "postgresql", connection: {
      database: process.env.DATABASE,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      port: process.env.DATABASE_PORT,
    }, migrations: {
      directory: path.join( __dirname, "./dbConfig/migrations" ),
    }, seeds: {
      directory: path.join( __dirname, "./dbConfig/seeds" ),
    }, pool: {
      min: 2, max: 10,
    },
  }, test: {
    client: "postgresql", connection: {
      
      database: "synaps-test",
      user: "postgres",
      password: "password",
      port: 5432,
    }, migrations: {
      directory: "./data/migrations",
    }, seeds: {
      directory: "./data/tset/seeds",
    }, pool: {
      min: 2, max: 10,
    },
  },
  
  staging: {
    client: "postgresql", connection: {
      database: "synaps",
      user: "postgres",
      password: "incoh3r3nt&",
      port: "5500",
    }, migrations: {
      directory: "./data/migrations",
    }, seeds: {
      directory: "./data/seeds",
    }, pool: {
      min: 2, max: 10,
    },
  },
  
  production: {
    client: "postgresql", connection: process.env.DATABASE_URL, migrations: {
      directory: "./data/migrations",
    },
  },
};
