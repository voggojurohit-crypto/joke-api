import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

let jokes = [
  {
    id: 1,
    author: "Alex",
    content: "I told my wife she should embrace her mistakes.",
    joke: "She hugged me."
  },
  {
    id: 2,
    author: "Mia",
    content: "I studied for five hours yesterday.",
    joke: "Unfortunately, I was studying the wrong subject."
  },
  {
    id: 3,
    author: "Ryan",
    content: "I love working from home.",
    joke: "There's nobody around to see me ignore my responsibilities."
  },
  {
    id: 4,
    author: "Emma",
    content: "I cleaned my room today.",
    joke: "It was exhausting. I found things I haven't seen in years."
  },
  {
    id: 5,
    author: "Daniel",
    content: "I asked my friend if he wanted to hear a joke about construction.",
    joke: "I'm still working on it."
  },
  {
    id: 6,
    author: "Sophia",
    content: "I set my password to 'incorrect'.",
    joke: "Whenever I forget it, my computer reminds me that my password is incorrect."
  },
  {
    id: 7,
    author: "Noah",
    content: "I bought a smart refrigerator yesterday.",
    joke: "It knows when I'm lying about being hungry."
  },
  {
    id: 8,
    author: "Olivia",
    content: "My alarm clock and I have a toxic relationship.",
    joke: "Every morning it screams at me, and I hit it until it shuts up."
  },
  {
    id: 9,
    author: "James",
    content: "I started exercising every morning.",
    joke: "Today I did three push-ups. Then I pushed myself to the refrigerator."
  },
  {
    id: 10,
    author: "Ava",
    content: "I told my friend I was going to become a professional procrastinator.",
    joke: "I'll start tomorrow."
  },
  {
    id: 11,
    author: "Ethan",
    content: "My wallet is like an onion.",
    joke: "Every time I open it, I cry."
  },
  {
    id: 12,
    author: "Grace",
    content: "I tried to organize my life using a planner.",
    joke: "I lost the planner."
  },
  {
    id: 13,
    author: "Liam",
    content: "My internet went down for five minutes.",
    joke: "I had to talk to my family. They seem like nice people."
  },
  {
    id: 14,
    author: "Isabella",
    content: "I don't need a therapist.",
    joke: "I just need my friends to stop giving me terrible advice and start giving me snacks."
  },
  {
    id: 15,
    author: "Lucas",
    content: "I asked my computer why it was running so slowly.",
    joke: "It said, 'I'm processing your request.'"
  },
  {
    id: 16,
    author: "Ella",
    content: "I went to the gym and asked the trainer which machine I should use to impress people.",
    joke: "He pointed at the ATM."
  },
  {
    id: 17,
    author: "Ben",
    content: "My bed and I are perfect for each other.",
    joke: "We have amazing chemistry, but my alarm clock keeps trying to break us up."
  },
  {
    id: 18,
    author: "Chloe",
    content: "I told my friend I had a joke about programming.",
    joke: "But it didn't work. I guess it had too many bugs."
  },
  {
    id: 19,
    author: "Jack",
    content: "I decided to become an early bird.",
    joke: "Then I remembered that worms are disgusting."
  },
  {
    id: 20,
    author: "Lily",
    content: "I asked my bank account how it was doing.",
    joke: "It replied, 'I'm fine.' The balance suggested otherwise."
  },
  {
    id: 21,
    author: "Arjun",
    content: "I asked my friend why he was talking to his laptop.",
    joke: "He said, 'I'm trying to improve our relationship.'"
  },
  {
    id: 22,
    author: "Priya",
    content: "I put my phone on airplane mode.",
    joke: "It still hasn't taken me anywhere."
  },
  {
    id: 23,
    author: "Rahul",
    content: "I opened the refrigerator three times in five minutes.",
    joke: "I wasn't hungry. I was hoping new food would spawn."
  },
  {
    id: 24,
    author: "Ananya",
    content: "I told my friend I was going to be productive today.",
    joke: "We both laughed."
  },
  {
    id: 25,
    author: "Karan",
    content: "I tried to solve a difficult math problem.",
    joke: "The problem is still difficult, but now we're friends."
  },
  {
    id: 26,
    author: "Neha",
    content: "My internet stopped working for five minutes.",
    joke: "I had to talk to my family. They seem like nice people."
  },
  {
    id: 27,
    author: "Aditya",
    content: "I asked my friend if he wanted to hear a joke about programming.",
    joke: "He said yes, but it didn't work. It had too many bugs."
  },
  {
    id: 28,
    author: "Meera",
    content: "I went to the gym and asked the trainer which machine would make me look stronger.",
    joke: "He pointed at the ATM."
  },
  {
    id: 29,
    author: "Vikram",
    content: "I decided to stop procrastinating.",
    joke: "I'll start tomorrow."
  },
  {
    id: 30,
    author: "Sara",
    content: "I asked my bank account how it was doing.",
    joke: "It said, 'I'm fine.' The balance suggested otherwise."
  }
];

let lastJokeId = 30;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/jokes", (req, res) => {
  console.log(jokes);
  res.json(jokes);
});


app.get("/jokes/:id", (req, res) => {
  const jokeId = parseInt(req.params.id);

  const foundJoke = jokes.find((joke) => joke.id === jokeId);

  if (!foundJoke) {
    return res.status(404).json({ message: "Joke Not Found" });
  }

  res.json(foundJoke);
});


app.post("/jokes", (req, res) => {
  const newJokeId = lastJokeId + 1;

  const newJoke = {
    id: newJokeId,
    author: req.body.author,
    content: req.body.content,
    joke: req.body.joke
  };

  lastJokeId = newJokeId;

  jokes.push(newJoke);

  res.status(201).json(newJoke);
});


app.patch("/jokes/:id", (req, res) => {
  const jokeId = parseInt(req.params.id);

  const foundJoke = jokes.find((joke) => joke.id === jokeId);

  if (!foundJoke) {
    return res.status(404).json({ message: "Joke Not Found" });
  }
  if (req.body.author) {
    foundJoke.author = req.body.author;
  }
  if (req.body.content) {
    foundJoke.content = req.body.content;
  }
  if (req.body.joke) {
    foundJoke.joke = req.body.joke;
  }

  res.json(foundJoke);
});


app.delete("/jokes/:id", (req, res) => {
  const jokeId = parseInt(req.params.id);

  const jokeIndex = jokes.findIndex((joke) => joke.id === jokeId);

  if (jokeIndex === -1) {
    return res.status(404).json({ message: "Joke Not Found" });
  }

  jokes.splice(jokeIndex, 1);

  res.json({ message: "Joke deleted" });
});


app.listen(port, () => {
  console.log(`Joke API is running at http://localhost:${port}`);
});