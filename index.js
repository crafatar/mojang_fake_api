var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;

  if (path.startsWith("/session/minecraft/profile/")) {
    var body = fs.readFileSync("session.json");
    res.writeHead(200, {
      "Accept-Ranges": "bytes",
      "Content-Type": "application/json",
      "Server": "Restlet-Framework/2.3.1",
      "Vary": "Accept-Charset, Accept-Encoding, Accept-Language, Accept",
      "Content-Length": body.length,
      "Connection": "keep-alive"
    });
    res.end(body);
  } else if (path.startsWith("/MinecraftSkins/")) {
    res.writeHead(301, {
      "Content-Type": "text/plain; charset=UTF-8",
      "Location": "http://" + req.headers.host + "/texture/a116e69a845e227f7ca1fdde8c357c8c821ebd4ba619382ea4a1f87d4ae94",
      "Connection": "keep-alive"
    });
    res.end();
  } else if (path.startsWith("/texture/")) {
    body = fs.readFileSync("skin.png");
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": body.length,
      "Connection": "keep-alive"
    });
    res.end(body);
  } else {
    res.writeHead(404);
    res.end(fs.readFileSync("README.md"));
  }

  console.log(res.statusCode + " | " + path);
});
server.listen(process.env.PORT || 5000);