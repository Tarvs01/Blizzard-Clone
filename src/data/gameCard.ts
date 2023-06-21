import { gameCardData } from "./types";

export const gameCards : gameCardData[] = [
    {
        id: 1,
        name: "Diablo IV",
        genre: "ACTION RPG",
        isNew: true,
        image: "DIABLO_LOGO_520x300.webp",
        bgImage: "diablo4.webp",
        video: "",
        platforms: ["battle.net", "xbox", "playstation"],
        generalPlatforms: ["pc"]
    },
    {
        id: 2,
        name: "World of Warcraft",
        genre: "MMORPG",
        isNew: false,
        image: "wow-logo.webp",
        bgImage: "wow-dragonflight-rectangle-GC.webp",
        video: "",
        platforms: ["battle.net"],
        generalPlatforms: [""]
    },
    {
        id: 3,
        name: "Overwatch 2",
        genre: "TEAM-BASED ACTION",
        isNew: false,
        image: "overwatch2-logo.webp",
        bgImage: "overwatch2.webp",
        video: "",
        platforms: ["battle.net", "xbox", "playstation", "switch"],
        generalPlatforms: ["pc"]
    },
    {
        id: 4,
        name: "World of Warcraft Classic",
        genre: "MMORPG",
        isNew: false,
        image: "WoWClassicWrath-logo.webp",
        bgImage: "WoTLK_game-card-WoWClassic.webp",
        video: "",
        platforms: ["battle.net"],
        generalPlatforms: [""]
    },
    {
        id: 5,
        name: "Hearthstone",
        genre: "STRATEGY CARD GAME",
        isNew: false,
        image: "hearthstone-logo.webp",
        bgImage: "hearthstone-with-cards.webp",
        video: "",
        platforms: ["battle.net", "apple", "googleplay"],
        generalPlatforms: ["mobile"]
    },
    {
        id: 6,
        name: "Diablo Immortal",
        genre: "ACTION RPG",
        isNew: false,
        image: "diablo-immortal-logo.webp",
        bgImage: "diablo-immortal.webp",
        video: "",
        platforms: ["battle.net", "apple", "googleplay"],
        generalPlatforms: [""]
    },
    {
        id: 7,
        name: "Diablo II: Resurrected",
        genre: "ACTION RPG",
        isNew: false,
        image: "d2-logo.webp",
        bgImage: "d2.webp",
        video: "",
        platforms: ["battle.net", "xbox", "playstation", "switch"],
        generalPlatforms: [""]
    },
    {
        id: 8,
        name: "Diablo III",
        genre: "ACTION RPG",
        isNew: false,
        image: "diablo3-logo.png",
        bgImage: "diablo3.webp",
        video: "",
        platforms: ["battle.net", "xbox", "playstation", "switch"],
        generalPlatforms: ["console"]
    },
    {
        id: 9,
        name: "StarCraft II",
        genre: "REAL-TIME STRATEGY",
        isNew: false,
        image: "starcraft2-logo.webp",
        bgImage: "starcraft2.webp",
        video: "",
        platforms: ["battle.net"],
        generalPlatforms: [""]
    },
    {
        id: 10,
        name: "Warcraft III: Reforged",
        genre: "REAL-TIME STRATEGY",
        isNew: false,
        image: "warcraft-reforged-logo.webp",
        bgImage: "warcraft-reforged.webp",
        video: "",
        platforms: ["battle.net"],
        generalPlatforms: [""]
    }
]

export const upcomingGames : gameCardData[] = [
    {
        id: 1,
        name: "Warcraft Arclight Rumble",
        genre: "MOBILE ACTION STRATEGY",
        isNew: false,
        image: "gryphon-logo-square.webp",
        bgImage: "gryphon-square.webp",
        video: "",
        platforms: ["apple", "googleplay"],
        generalPlatforms: [""]
    }
]