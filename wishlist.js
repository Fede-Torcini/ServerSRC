import { getGameById } from "./game.js";

const wishlist = new Map();

function addToWishlist(userId, gameId) {
    let userWishlist = wishlist.get(userId)
    if (userWishlist) {
        if (!userWishlist.includes(gameId))
        {
            userWishlist.push(gameId);
        }
    }
    else {
        wishlist.set(userId, [gameId]);
    }
}

function removeFromWishlist(userId, gameId) {
    let userWishlist = wishlist.get(userId)
    if (userWishlist) {
        let index = userWishlist.indexOf(gameId);
        if (index > -1) {
            userWishlist.splice(index, 1)
        }
    }
}

function getWishlistFrom(userId)
{
    let result = [];

    if (wishlist.has(userId))
    {
        wishlist.get(userId).forEach(gameId => {
            let game = getGameById(Number(gameId));
            
            game.removeUrl = "/wishlist/remove?"  + new URLSearchParams({
                userId : userId,
                gameId : gameId
                }).toString();

            result.push(game);
        });
    }

    return result;
}

export { addToWishlist, getWishlistFrom, removeFromWishlist };