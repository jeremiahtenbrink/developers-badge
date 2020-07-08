import * as fs from "fs";
import { runCoors } from "../../utils/cors";

async function handler( req, res ){
  const { name } = req.query;
  // Run the middleware
  runCoors( req, res )
    .then( result => {
      getResumeSvg( name ).then( svg => {
        res.setHeader( "content-type", "image/svg+xml" );
        res.send( svg );
      } );
    } ).catch( err => {
    // Rest of the API logic
    res.status( 400 ).json( { message: err.message } );
  } );
  
}

const getResumeSvg = async( name ) => {
  return fs.readFileSync( name + "Resume.svg" );
};

export default handler;
