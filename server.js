// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  // Define your API routes or additional Express middleware here

  // Handle Next.js requests
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
