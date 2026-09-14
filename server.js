import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
const API_URL = process.env.API_URL || "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/jokes`);

    console.log(response.data);

    res.render("index.ejs", {
      jokes: response.data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching jokes" });
  }
});

app.get("/new", (req, res) => {
  res.render("modify.ejs", {
    heading: "New Joke",
    submit: "Create Joke"
  });
});

app.get("/edit/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${API_URL}/jokes/${req.params.id}`
    );

    console.log(response.data);

    res.render("modify.ejs", {
      heading: "Edit Joke",
      submit: "Update Joke",
      joke: response.data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching joke" });
  }
});

app.post("/api/jokes", async (req, res) => {
  try {
    const response = await axios.post(
      `${API_URL}/jokes`,
      req.body
    );

    console.log(response.data);

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating joke" });
  }
});

app.post("/api/jokes/:id", async (req, res) => {
  try {
    const response = await axios.patch(
      `${API_URL}/jokes/${req.params.id}`,
      req.body
    );

    console.log(response.data);

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating joke" });
  }
});

app.get("/api/jokes/delete/:id", async (req, res) => {
  try {
    await axios.delete(
      `${API_URL}/jokes/${req.params.id}`
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting joke" });
  }
});

app.listen(port, () => {
  console.log(`Joke website is running at http://localhost:${port}`);
});