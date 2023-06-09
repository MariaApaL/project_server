// conexión a la base de datos de MongoDB 
// y definicion de los models

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user-model");
db.role = require("./role-model");
db.category = require("./category-model");
db.event = require("./event-model");
db.report = require("./report-model")

db.ROLES = ["user", "admin"];
db.CATEGORIES = [ "cultura" , "deportes", "gastronomia", "ocio" , "solidario", 'relax'];
db.REPORTS = ["spam", "odio", "sexual", "violencia", "fraude"];

module.exports = db;