// Array to store multiple game information instances
const games = new Map();
let gameIdCounter = 0;

// Function to add a new game
function addGame(bannerUrl, gameplayUrl, description, title, genre, rating, price, publisher) {
    const game = {
        bannerUrl: bannerUrl,
        gameplayUrl: gameplayUrl,
        description, description,
        title: title,
        genre: genre,
        rating: rating,
        price: price,
        gameId: gameIdCounter,
        publisherId: publisher
    };
    games.set(gameIdCounter, game);
    gameIdCounter++;
}

// Function to get all games
function getGames() {
    return Array.from(games.values());
}

// Function to get all games
function getGameById(gameId) {
    let game = games.get(gameId)
    return game;
}

// Adding games with stubbed data
const bannerUrl_2k25   = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg?t=1729266229";
const bannerUrl_FC25   = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg?t=1728642725";
const bannerUrl_CIV6   = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg?t=1728608297";
const bannerUrl_ACM    = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3035570/header.jpg?t=1729184423";
const gameplayUrl_2k25 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/ss_8e3db832678488ed1003fa41cc0ef9bd74d332e5.1920x1080.jpg?t=1729266229";
const gameplayUrl_FC25 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2669320/ss_709f8a775654b083b7faf991522f657dda2a14a9.1920x1080.jpg?t=1728642725";
const gameplayUrl_CIV6 = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/ss_7f598198526afc260d939a98af4d76d95f5349e4.1920x1080.jpg?t=1728608297";
const gameplayUrl_ACM  = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3035570/ss_d2458dc72f538b42218cc16c0ce054810511bd81.1920x1080.jpg?t=1729184423";
const description_2k25 = "Command every court with authenticity and realism Powered by ProPLAY™, giving you ultimate control over how you play in NBA 2K25. Define your legacy in MyCAREER, MyTEAM, MyNBA, and The W";
const description_FC25 = "EA SPORTS FC™ 25 gives you more ways to win for the club. Team up with friends in your favorite modes with the new 5v5 Rush, and manage your club to victory as FC IQ delivers more tactical control than ever before.";
const description_CIV6 = "Civilization VI is the newest installment in the award winning Civilization Franchise. Expand your empire, advance your culture and go head-to-head against history’s greatest leaders. Will your civilization stand the test of time?";
const description_ACM  = "Experience the story of Basim, a cunning street thief with nightmarish visions, seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad.";

addGame(bannerUrl_2k25, gameplayUrl_2k25 , description_2k25, "2k25",                         "Simulation", 2.5, 59.99, 2);
addGame(bannerUrl_FC25, gameplayUrl_FC25 , description_FC25, "EAFC25",                       "Simulation", 4.2, 69.99, 0);
addGame(bannerUrl_CIV6, gameplayUrl_CIV6,  description_CIV6, "Sid Meier’s Civilization® VI", "Strategy",   4.7, 59.99, 2);
addGame(bannerUrl_ACM,  gameplayUrl_ACM,   description_ACM,  "Assassin's Creed Mirage",      "Open World", 4.0, 39.99, 1);

export {getGames, getGameById};