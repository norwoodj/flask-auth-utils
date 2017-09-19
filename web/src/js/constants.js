
let MENU_CATEGORIES = [
    {
        category: "Pages",
        options: [
            {text: "Home", link: "/"},
            {text: "Create Game", link: "/create-game.html"}
        ]
    }
];

let APP_NAME = "Stupid Chess";

let Color = {
    BLACK: "BLACK",
    WHITE: "WHITE"
};

let GameType = {
    STUPID_CHESS: "STUPID_CHESS",
    CHESS: "CHESS",
    CHECKERS: "CHECKERS",

    all: () => [
        GameType.STUPID_CHESS,
        GameType.CHESS,
        GameType.CHECKERS
    ]
};

let GameAuthType = {
    ONE_PLAYER: "ONE_PLAYER",
    TWO_PLAYER: "TWO_PLAYER",

    all: () => [
        GameAuthType.ONE_PLAYER,
        GameAuthType.TWO_PLAYER,
    ]
};

let GameResult = {
    WIN: "WIN",
    LOSS: "LOSS",
    TIE: "TIE"
};

export {
    Color,
    GameType,
    GameAuthType,
    GameResult,
    MENU_CATEGORIES,
    APP_NAME
};
