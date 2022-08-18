/*
 * File:   server.js
 * Author: Fabio Jr. Rossi.
 *
 * Main file of the project.
 */

const express = require("express"); // Import for using functions of express framework.

const server = express(); // Define variable to use express.
server.use(express.json()); // Setting express for use of json.
server.use(express.urlencoded({ extended: true })); // Needed to parse body information with json.

// Standard route
server.get("/", (req, res) => {
  res.json({ message: "Server is running!" }); // Response with a json message.
});

const PORT = process.env.PORT || 1988; // Define environment port or local port.

require("./app/routes/route.js")(server); // Importing routes for the express server.
// Setting listener on port defined.
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`); // Just for testing.
});
