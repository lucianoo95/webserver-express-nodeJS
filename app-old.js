
const http = require('http');

http.createServer((request, response) => {

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });

  let output = {
    name: 'Luciano',
    age: 25,
    url: request.url
  };

  response.write(JSON.stringify(output));

  // response.write('Hello world!');
  response.end();

}).listen(8080);

console.log('Server on port: 8080');