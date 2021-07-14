const path = require("path");
const express = require("express");
const session = require("express-session");
const expresshandlebars = require("express-handlebars");
const routes = require("./controllers");
// requires depencies needed to properly send data use handlebars html rendering etc

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 4040;

const handlebars = expresshandlebars.create();

const sess = {
  secret: "the entire unix philosophy",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
});