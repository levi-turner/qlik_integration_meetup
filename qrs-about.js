var https = require('https');
var fs = require('fs');

var options = {
   hostname: 'localhost',
   port: 4242,
   path: '/qrs/about?xrfkey=abcdefghijklmnop',
   method: 'GET',
   headers: {
      'X-Qlik-Xrfkey' : 'abcdefghijklmnop',
      'X-Qlik-User' : 'UserDirectory= Internal; UserId= sa_api '
   },
   key: fs.readFileSync("C:\\ProgramData\\Qlik\\Sense\\Repository\\Exported Certificates\\.Local Certificates\\client_key.pem"),
   cert: fs.readFileSync("C:\\ProgramData\\Qlik\\Sense\\Repository\\Exported Certificates\\.Local Certificates\\client.pem"),
   ca: fs.readFileSync("C:\\ProgramData\\Qlik\\Sense\\Repository\\Exported Certificates\\.Local Certificates\\root.pem"),
   rejectUnauthorized: false
};

https.get(options, function(res) {
   console.log("Got response: " + res.statusCode);
   res.on("data", function(chunk) {
      console.log("BODY: " + chunk);  
   });
   }).on('error', function(e) {
      console.log("Got error: " + e.message);
});