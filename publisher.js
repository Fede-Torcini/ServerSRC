const publishers = new Map()
let publisherCounter = 0;

function addPublisher(profilePicUrl, title, description)
{
    const publisher = 
    {
        profilePicUrl: profilePicUrl,
        title : title,
        description : description
    };

    publishers.set(publisherCounter, publisher)
    publisherCounter++;
}

function getPublisherById(publisherId)
{
    return publishers.get(publisherId);
}

let profilePicEA = "https://avatars.fastly.steamstatic.com/618cc2a46fad78ed1259df505c2de5bb4d806532_full.jpg"
let profilePicUbisoft = "https://avatars.fastly.steamstatic.com/2b2486ae5a70d69c55f020ce8384d04646ddba4e_full.jpg"
let profilePic2k = "https://avatars.fastly.steamstatic.com/53b80fbb1f3c5e6833a5587177ee4bdbe8f52030_full.jpg"

addPublisher(profilePicEA, "Electronic Arts", "EA is a global leader in digital interactive entertainment. \nWe are focused on building games and experiences that grow the global online communities around our key franchises and intellectual property, while deepening engagement through interactive storytelling. \nWe develop and deliver games, content and online services for Internet-connected consoles, mobile devices and personal computers. Headquartered in Redwood City, California, we are recognized for a portfolio of critically acclaimed, high-quality brands such as EA SPORTS FC, Battlefield™, Apex Legends™, The Sims™, EA SPORTS™ Madden NFL, Need for Speed, Titanfall, Plants vs. Zombies and EA SPORTS F1.")
addPublisher(profilePicUbisoft, "Ubisoft", "At Ubisoft, we create worlds for everyone. We are dedicated to enriching the lives of our players by developing high-quality games that resonate with all kinds of personalities, bring people together, and allow everyone to learn and grow while having fun.")
addPublisher(profilePic2k, "2K", "Founded in 2005 within Take Two Interactive, 2K develops and publishes interactive entertainment for PC, console and mobile platforms. Our world-class team of engineers, developers, graphic artists and publishing professionals are stewards of a growing library of critically-acclaimed franchises such as Battleborn, BioShock, Borderlands, The Darkness, Mafia, NBA 2K, PGA TOUR 2K, Sid Meier’s Civilization, WWE 2K, and XCOM.")


export { getPublisherById }