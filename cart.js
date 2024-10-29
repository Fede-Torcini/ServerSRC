import { getGameById } from "./game.js";

const cart = new Map();

function addToCart(userId, gameId) {
    let userCart = cart.get(userId)
    if (userCart) {
        if (!userCart.includes(gameId))
        {
            userCart.push(gameId);
        }
    }
    else {
        cart.set(userId, [gameId]);
    }
}

function removeFromCart(userId, gameId) {
    let userCart = cart.get(userId)
    if (userCart) {
        let index = userCart.indexOf(gameId);
        if (index > -1) {
            userCart.splice(index, 1)
        }
    }
}

function getCartFrom(userId)
{
    let output = {};
    let result = [];
    let total = 0;

    if (cart.has(userId))
    {
        cart.get(userId).forEach(gameId => {
            let game = getGameById(Number(gameId));
            
            game.removeUrl = "/cart/remove?"  + new URLSearchParams({
                userId : userId,
                gameId : gameId
                }).toString();

            result.push(game);
            total += game.price;
        });
    }

    output.games = result;
    output.total = total;
    
    return output;
}

export { addToCart, getCartFrom,removeFromCart };