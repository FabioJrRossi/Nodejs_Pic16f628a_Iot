/*
 * File:   route.js
 * Author: Fabio Jr. Rossi.
 *
 * Routing file.
 */

const picSchema = require("../models/model"); // Importing data model.

// export for use that function.
module.exports = (picSchema) => {
  const UseController = require("../controllers/controller.js"); // Importing functions of controller.

  picSchema.get("/control", UseController.findAll); // Define get route and its function.
  picSchema.put("/control", UseController.update); // Define put route and its function.
};
