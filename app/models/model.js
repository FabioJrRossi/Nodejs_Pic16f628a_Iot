/*
 * File:   model.js
 * Author: Fabio Jr. Rossi.
 *
 * Data model file.
 *
 * Hint:
 * Creating a model for store status of led and relay.
 * This model is a simple json object, can changed to use a database.
 *

Defining json object. */
let picSchema = {
  led: 0,
  relay: 0,
};

// exporting model.
module.exports = picSchema;
