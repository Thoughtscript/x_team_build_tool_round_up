const liveServer = require("live-server"),
  params = {
    port: 8181,
    root: "./public",
    file: "index.html",
    wait: 1000,
    logLevel: 1
  };

liveServer.start(params);