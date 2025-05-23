const http = require("node:http");
const hostname = "0.0.0.0";
const hostname_external = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World! \n");
});

server.listen(port, hostname, () => {
  console.log(`The server is running on http://${hostname_external}:${port}/`);
});
