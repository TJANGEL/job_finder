module.exports = function(sequelize, DataTypes) {
  const Gig = db.define("gig", {
    title: {
      type: Sequelize.STRING
    },
    technologies: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    budget: {
      type: Sequelize.STRING
    },
    contact_email: {
      type: Sequelize.STRING
    }
  });
  return Gig;
};
