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

const getLinkedInSvg = ( name ) => {
  return `
<svg width="118" height="16" viewBox="0 0 118 15" fill="none"
     xmlns="http://www.w3.org/2000/svg">
    <g id="linkedInBadge 1">
        <g id="linkedInBadge">
            <g id="Group">
                <path id="Vector"
                      d="M116 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H116C117.105 15 118 14.1046 118 13V2C118 0.89543 117.105 0 116 0Z"
                      fill="#006699"/>
                <g id="linkedin icon 2 1">
                    <g id="Group_2">
                        <path id="Vector_2"
                              d="M0.928711 1.80734C0.928711 1.27991 1.40257 0.851807 1.9867 0.851807H14.186C14.7703 0.851807 15.2439 1.27991 15.2439 1.80734V13.2357C15.2439 13.7633 14.7703 14.1911 14.186 14.1911H1.9867C1.40262 14.1911 0.928711 13.7633 0.928711 13.2359V1.80718V1.80734Z"
                              fill="white"/>
                        <path id="Vector 2"
                              d="M5.27963 12.007V6.00163H3.1375V12.007H5.27986H5.27963ZM4.20901 5.18183C4.95586 5.18183 5.42083 4.72069 5.42083 4.14439C5.40685 3.55496 4.95586 3.10669 4.22322 3.10669C3.49006 3.10669 3.01123 3.55496 3.01123 4.14434C3.01123 4.72064 3.47603 5.18178 4.19498 5.18178H4.20884L4.20901 5.18183ZM6.46534 12.007H8.60731V8.6537C8.60731 8.47445 8.62129 8.29474 8.67788 8.16671C8.83266 7.80796 9.18512 7.43659 9.77702 7.43659C10.5519 7.43659 10.8621 7.98726 10.8621 8.79465V12.007H13.004V8.56371C13.004 6.71919 11.9474 5.86084 10.5381 5.86084C9.38262 5.86084 8.87516 6.46262 8.59322 6.87249H8.60748V6.00184H6.46545C6.49341 6.56521 6.46528 12.0072 6.46528 12.0072L6.46534 12.007Z"
                              fill="#006699"/>
                    </g>
                </g>
                <text id="linkedin-name" fill="white" xml:space="preserve"
                      style="white-space: pre" font-family="Roboto"
                      font-size="9" letter-spacing="0em"><tspan x="29.2502" y="10.6249">${ name }</tspan></text>
            </g>
        </g>
    </g>
</svg>
`;
};

export default handler;
