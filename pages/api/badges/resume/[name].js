import * as fs from "fs";
import path from "path";
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
  // use current working dir to get the next server root dir and add the
  // rest of the path
  const svgPath = path.join( process.cwd() + "/pages/api/badges/resume/",
    name + "Resume.svg"
  );
  
  // return promise so we can resolve it after file has been read
  return new Promise( ( resolve, reject ) => {
    // node read file
    fs.readFile( svgPath, ( err, file ) => {
      // check for file read error and reject
      if( err ){
        reject( err );
      }else{
        
        // change file to readable content
        let dataStr = file.toString();
        
        // resolve promise with file
        resolve( dataStr );
      }
    } );
    
  } );
  
};

export default handler;
