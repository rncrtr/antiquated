/*  First install npm then run this in terminal (without the $): 
*     $ npm install connect serve-static
*
*   Then start the server in terminal (without the $): 
*     $ node server
*
*   Note: Shutdown with Ctrl + C
*/
var connect = require('connect');
var serveStatic = require('serve-static');
var port = 8080;
connect().use(serveStatic(__dirname)).listen(port);

console.log('Nodebot is serving your site at http://locahost:'+port+'.\r\nYou can change the port in server.js or shutdown with Ctrl+C');