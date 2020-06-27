import Cors from "cors";
import { runMiddleware } from "./runMiddleware";

// Initializing the cors middleware
const cors = Cors( {
  methods: [ "GET", "HEAD" ],
} );

export const runCoors = ( req, res ) => {
  return runMiddleware( req, res, cors );
};
