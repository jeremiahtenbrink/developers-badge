exports.up = function( knex ){
  knex().schema.createTable( "users", table => {
    table.increments();
    table.string( "first_name" );
    table.string( "last_name" );
    table.string( "github" );
    table.string( "linkedin" );
    table.string( "portfolio" );
    table.string( "o_auth_token" );
    table.string( "google_id" );
  } );
};

exports.down = function( knex ){
  kenx.schema.dropTableIfExists( "users" );
};
