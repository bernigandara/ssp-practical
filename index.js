const   http = require('http'),   //HTTP Server
        express = require('express'),  //Handling HTTP Request and routing
        fs = require('fs'),    //File system functionalities
        xmlParse = require('xslt-processor').xslParse, //XML handlind
        xsltProcess = requirerequire('xslt-processor').xsltProcess; //XSLT handling
        router = express(), //init our router
        server = http.createServer(router);     //init our server

router.get('/', function(req, res){

    res.writeHead(200, {'content-Type' : 'text/hmtl'});

    let xml = fs.readFileSync('menu.xml', 'utf8'),
        xsl = fs.readFileSync('menu.xsl', 'utf8');

    xml = xmlParse(xml),
    xls = xmlParse(xsl);

    let html = xsltProcess(xml, xsl);
    
    res.end(html.toString());

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function()
{
    const addr = server.address();
    console.log("Server listening at", addr.address = ":" + addr.port)
});