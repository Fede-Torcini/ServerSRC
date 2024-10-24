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
    console.log(cart);
}

export { addToCart };