const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define("gig", {
  title: {
    type: DataType.STRING
  }
});
