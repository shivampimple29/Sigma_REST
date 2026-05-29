const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

const port = 8080;

let posts = [
  {
    id: uuidv4(),
    username: "Shivam",
    content:
      "If you want something you never had, you have to do something you never did!",
  },
  {
    id: uuidv4(),
    username: "Nilu",
    content: "Travel like there is no tomorrow.",
  },
  {
    id: uuidv4(),
    username: "Athang",
    content: "I don't need heaven. I'll make hell my battlefield.",
  },
];

app.get("post/:username/:id", (req, res) => {
  res.send("working...");
});

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.use((req, res) => {
  res.status(404).send("<h1>INVALID URL!</h1>");
});

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
