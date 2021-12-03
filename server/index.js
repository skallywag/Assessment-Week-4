const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ['Santa Clause is real', 'Your going to be an excellent programmer!', 'Success is a journey, not a destination', 'Swimming is easy. Stay floating is hard.', 'The night life is for you.',]

  let randomFort = Math.floor(Math.random() *
  fortunes.length)
  let yourFortune = fortunes[randomFort]

  res.status(200).send(yourFortune)
})


app.get('/api/form', (req, res) => {
  console.log(res);
   
})





app.listen(4000, () => console.log("Server running on 4000"));
