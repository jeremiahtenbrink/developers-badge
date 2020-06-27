import { runCoors } from "./utils/cors";

async function handler( req, res ){
  debugger;
  // Run the middleware
  runCoors( req, res ).then( result => {
    res.status( 200 ).json( { message: "Api is up." } );
  } ).catch( err => {
    res.status( 500 ).json( { message: err.message } );
  } );
  
}

export default handler;
