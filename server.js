import express from 'express';
import cors from 'cors'
import { getGames, getGameById } from './game.js';
import { addToCart, getCartFrom, removeFromCart } from './cart.js';
import { addToWishlist, getWishlistFrom, removeFromWishlist } from './wishlist.js';
import { getPublisherById } from './publisher.js';

const app = express();
app.use(cors())
const port = 3001;

// Games --------------------------------------------------------------------
app.get('/games', async (req, res) => {
  let games = getGames();
  res.send(games);
});

app.get('/games/byId', async (req, res) => {
  let game = getGameById(Number(req.query.gameId));
  res.send(game);
});


// Carts --------------------------------------------------------------------
app.get('/carts', async (req, res) => {
  let games = getCartFrom(req.query.userId);
  res.send(games);
});

app.get('/cart/add', async (req, res) => {
  addToCart(req.query.userId, req.query.gameId);
  res.send();
});

app.get('/cart/remove', async (req, res) => {
  removeFromCart(req.query.userId, req.query.gameId);
  res.send();
});


// Wishlist ----------------------------------------------------------------
app.get('/wishlist', async (req, res) => {
  let games = getWishlistFrom(req.query.userId);
  res.send(games);
});

app.get('/wishlist/add', async (req, res) => {
  addToWishlist(req.query.userId, req.query.gameId);
  res.send();
});

app.get('/wishlist/remove', async (req, res) => {
  removeFromWishlist(req.query.userId, req.query.gameId);
  res.send();
});


// Publisher ---------------------------------------------------------------
app.get('/publisher/byId', async (req, res) => {
  let publisher = getPublisherById(Number(req.query.publisherId));
  res.send(publisher);
});


// Register -----------------------------------------------------------------
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

