import { runCoors } from "../../utils/cors";

async function handler( req, res ){
  const { name } = req.query;
  // Run the middleware
  runCoors( req, res )
    .then( result => {
      debugger;
      const svg = getLinkedInSvg( name );
      res.setHeader( "content-type", "image/svg+xml" );
      res.send( svg );
    } ).catch( err => {
    
    // Rest of the API logic
    res.status( 400 ).json( { message: err.message } );
  } );
  
}

const getLinkedInSvg = ( name, height = 30 ) => {
  return `
<svg width="119" height="${height}" viewBox="0 0 119 16" fill="none"
     xmlns="http://www.w3.org/2000/svg">
    <g id="medium">
        <g id="Group">
            <path id="Vector"
                  d="M116.486 0.951172H2.48593C1.38136 0.951172 0.485931 1.8466 0.485931 2.95117V13.9512C0.485931 15.0557 1.38136 15.9512 2.48593 15.9512H116.486C117.59 15.9512 118.486 15.0557 118.486 13.9512V2.95117C118.486 1.8466 117.59 0.951172 116.486 0.951172Z"
                  fill="black"/>
            <text id="@jeremiahtenbrink" fill="white" xml:space="preserve"
                  style="white-space: pre" font-family="Roboto" font-size="9"
                  letter-spacing="0em"><tspan x="29.3044" y="11.4479">${name}</tspan></text>
        </g>
        <g id="Medium_logo_Monogram 1" clip-path="url(#clip0)">
            <g id="Page 1">
                <g id="Monogram">
                    <path id="Rectangle path"
                          d="M13.74 1.78125H2.39996C1.84768 1.78125 1.39996 2.22897 1.39996 2.78125V14.1213C1.39996 14.6735 1.84768 15.1213 2.39996 15.1213H13.74C14.2922 15.1213 14.74 14.6735 14.74 14.1212V2.78125C14.74 2.22897 14.2922 1.78125 13.74 1.78125Z"
                          fill="white"/>
                    <path id="Shape"
                          d="M4.58338 6.24264C4.59452 6.13262 4.55256 6.02389 4.47042 5.94985L3.63365 4.94183V4.79126H6.23181L8.24004 9.19558L10.0056 4.79126H12.4824V4.94183L11.767 5.62779C11.7053 5.6748 11.6747 5.75207 11.6875 5.82855V10.8686C11.6747 10.9451 11.7053 11.0224 11.767 11.0694L12.4657 11.7554V11.9059H8.95129V11.7554L9.67509 11.0527C9.74622 10.9816 9.74622 10.9607 9.74622 10.8519V6.77801L7.7338 11.8892H7.46185L5.11891 6.77801V10.2036C5.09938 10.3476 5.14721 10.4926 5.24861 10.5968L6.18997 11.7386V11.8892H3.52069V11.7386L4.46205 10.5968C4.56271 10.4924 4.60776 10.3465 4.58338 10.2036V6.24264Z"
                          fill="black"/>
                </g>
            </g>
        </g>
    </g>
    <defs>
        <clipPath id="clip0">
            <rect width="13.34" height="13.34" fill="white"
                  transform="translate(1.39996 1.78125)"/>
        </clipPath>
    </defs>
</svg>

`;
};

export default handler;
