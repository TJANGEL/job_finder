const Sequelize = require("sequelize");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig.js");

// get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

// Add gig
router.get("/add", (req, res) => {
  const data = {
    title: "Looking for a React developer",
    technologies: "react,js,html,css",
    budget: "$3000",
    description: "sdfjioasdhfoiahsdifl;ahsdoifhasdofajsdf",
    contact_email: "133423@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;

  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log(err));
});

module.exports = router;
