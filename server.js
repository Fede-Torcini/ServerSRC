import express from 'express';
import cors from "cors"
import { getGames, getGameById } from './game.js';
import { addToCart } from './cart.js';

const app = express();
app.use(cors())
const port = 3001;

app.get('/get-cart', async (req, res) => {
  let games = getCartFrom(req.query.userId);
  res.send(games)
});

app.get('/get-games', async (req, res) => {
  let games = getGames();
  res.send(games)
});

app.get('/get-game-by-id', async (req, res) => {
  let game = getGameById(Number(req.query.gameId));
  //console.log(game);
  res.send(game)
});

app.get('/add-to-cart', async (req, res) => {
  addToCart(req.query.userId, req.query.gameId);
  res.send()
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});