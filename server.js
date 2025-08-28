const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const welcomeText = process.env.WELCOME_TEXT || "Hello Azure domyślnie!";
res.end(welcomeText);

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
