"use strict";
// Include our "db"
var db = require("../../config/db")();
// Exports all the functions to perform on the db
module.exports = { getAll, save, getOne, update, delCustomer, getOneByPhone };

//GET /customer operationId
function getAll(req, res, next) {
  res.json({ customers: db.find() });
}
//POST /customer operationId
function save(req, res, next) {
  res.json({
    success: db.save(req.body),
    description: "Customer added to the list!"
  });
}
//GET /customer/{id} operationId
function getOne(req, res, next) {
  var id = req.swagger.params.id.value; //req.swagger contains the path parameters
  var customer = db.find(id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(204).send();
  }
}
//GET /customer/phone/{phone} operationId
function getOneByPhone(req, res, next) {
  var phone = req.swagger.params.phone.value; //req.swagger contains the path parameters
  var customer = db.findByPhone(phone);
  if (customer) {
    res.json(customer);
  } else {
    res.status(204).send();
  }
}
//PUT /customer/{id} operationId
function update(req, res, next) {
  var id = req.swagger.params.id.value; //req.swagger contains the path parameters
  var customer = req.body;
  if (db.update(id, customer)) {
    res.json({ success: 1, description: "Customer updated!" });
  } else {
    res.status(204).send();
  }
}
//DELETE /customer/{id} operationId
function delCustomer(req, res, next) {
  var id = req.swagger.params.id.value; //req.swagger contains the path parameters
  if (db.remove(id)) {
    res.json({ success: 1, description: "Customer deleted!" });
  } else {
    res.status(204).send();
  }
}
