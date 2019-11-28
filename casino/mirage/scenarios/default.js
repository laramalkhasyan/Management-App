export default function(server) {
  var game1 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',

  });

  var game2 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live Roulette',
    alias: "live-blackjack",
    description: '',
  });

  var game3 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live Bet on Poker',
    alias: "live-blackjack",
    description: '',
  });

  var game4 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'LIVE Baccarat',
    alias: "live-blackjack",
    description: '',
  });

  var game5 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Captain Nelson Deluxe',
    alias: "live-blackjack",
    description: '',
  });

  var game6 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'kive BlackJack',
    alias: "live-blackjack",
    description: '',
  });

  var game7 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });

  var game8 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Aive BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game9 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game10 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game11 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game12 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game13 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game14 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game15 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game16 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game17 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game18 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game19 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game20 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });
  var game21 = server.schema.games.create({
    img: "http://casinosonlinereview.com/wp-content/uploads/Evolution-Gaming-Live-Dealer-Casino-Games.jpg",
    pageTitle: 'Live BlackJack',
    alias: "live-blackjack",
    description: '',
  });

  var category1 = server.schema.categories.create({
    name: 'Live Dealer',
    game: [game3, game9]
  });

  var category2 = server.schema.categories.create({
    name: 'Skill Games',
    game: [game5, game6]
  });

  var category3 = server.schema.categories.create({
    name: 'Video Slots',
    game: [game4, game6]
  });
  var category = server.schema.categories.create({
    name: 'Top Slots',
    game: [game1, game3, game2]
  });
  var category1 = server.schema.categories.create({
    name: 'Hidden',
    game: [game5, game6, game8, game7]
  });
};
