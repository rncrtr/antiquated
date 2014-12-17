/*  NODEBOT IS YOUR TINY FRIENDLY SERVER. DO NOT BE ALARMED. :)
*   
*   1. If you have node/npm, install connect and serve-static in terminal (without the $): 
*     $ npm install connect serve-static
*
*   2. Start nodebot in terminal (without the $): 
*     $ node server
*
*   Note: Shutdown with Ctrl + C
*/
var connect = require('connect');
var serveStatic = require('serve-static');
var port = 8080;
connect().use(serveStatic(__dirname)).listen(port);
console.log('Nodebot is now serving your files at http://locahost:'+port+'.\r\nShutdown with Ctrl+C');