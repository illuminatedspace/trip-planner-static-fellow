const Sequelize = require('sequelize')
var db = new Sequelize('postgres://localhost:5432/trip-planner-static-fellow', {
    logging: false
});

module.exports = {
  db,
}
