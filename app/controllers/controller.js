/*
 * File:   controller.js
 * Author: Fabio Jr. Rossi.
 *
 * Data manipulation file.
 */

const PicController = require("../models/model.js"); // Importing data model.

// Function for return data of the model.
exports.findAll = (req, res) => {
  res.json(PicController); // Response json object.
};

// Function for update data of the model.
exports.update = (req, res) => {
  const PicAux = req.body; // Take data of the body requisition.
  PicController.led = req.body.led; // Update led value.
  PicController.relay = req.body.relay; // Update relay value.
  res.json(PicController); // Response values updated.
};
