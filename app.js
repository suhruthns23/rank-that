
const $ = (id) => document.getElementById(id);

const BANK = {
  Funny: [
    { title: "Ridiculous everyday habits", items: ["Talking to yourself", "Sleeping all day", "Dancing alone", "Taking 100 selfies", "Laughing at your own jokes"] },
    { title: "Funny superpowers", items: ["Flying but only 1 metre high", "Reading pets' minds", "Turning invisible when sneezing", "Teleporting into the wrong room", "Stopping time for 5 seconds"] },
    { title: "Embarrassing situations", items: ["Calling a teacher 'Mum'", "Waving at a stranger", "Falling in public", "Sending a message to the wrong chat", "Forgetting someone's name"] }
  ],
  College: [
    { title: "College experiences", items: ["Cancelled class", "Free attendance", "Surprise holiday", "Easy exam", "Cancelled assignment"] },
    { title: "College survival skills", items: ["Getting notes from friends", "Finding an empty classroom", "Finishing work at the last minute", "Sleeping through lectures", "Convincing a teacher"] },
    { title: "College day disasters", items: ["Forgetting an assignment", "Missing the bus", "A surprise test", "A dead phone battery", "Being late for a presentation"] }
  ],
  Movies: [
    { title: "Movie night essentials", items: ["Action scenes", "Comedy", "Plot twists", "Romance", "A satisfying ending"] },
    { title: "Movie characters", items: ["The hero", "The villain", "The comic relief", "The genius", "The mysterious stranger"] },
    { title: "Movie genres", items: ["Thriller", "Comedy", "Horror", "Science fiction", "Fantasy"] }
  ],
  Anime: [
    { title: "Anime powers", items: ["Super strength", "Time manipulation", "Teleportation", "Mind reading", "Healing powers"] },
    { title: "Anime character traits", items: ["Intelligence", "Raw strength", "Speed", "Loyalty", "Strategic thinking"] },
    { title: "Anime viewing experiences", items: ["A shocking plot twist", "An epic fight", "A clever villain", "An emotional backstory", "An amazing opening"] }
  ],
  Food: [
    { title: "Food cravings", items: ["Pizza", "Ice cream", "Dosa", "Burger", "Chocolate"] },
    { title: "Food superpowers", items: ["Never feeling full", "Cooking anything perfectly", "Eating without gaining weight", "Making food appear", "Knowing every recipe"] },
    { title: "Snack situations", items: ["Midnight cravings", "Movie snacks", "Street food", "A homemade meal", "Free food at an event"] }
  ],
  Friendship: [
    { title: "Friendship qualities", items: ["Honesty", "Loyalty", "Humour", "Giving good advice", "Being available anytime"] },
    { title: "Friend group roles", items: ["The planner", "The comedian", "The overthinker", "The quiet observer", "The troublemaker"] },
    { title: "Friendship moments", items: ["Late-night conversations", "Inside jokes", "Spontaneous trips", "Helping during hard times", "Celebrating small wins"] }
  ],
  Savage: [
    { title: "Awkward social situations", items: ["Being left on read", "A painfully quiet group chat", "An accidental screenshot", "A failed joke", "A brutally honest friend"] },
    { title: "Uncomfortable truths", items: ["Admitting you're wrong", "Apologising first", "Hearing honest feedback", "Being ignored", "Losing an argument"] },
    { title: "Social challenges", items: ["No phone for a week", "No social media for a month", "Always saying what you think", "Never being able to lie", "Everyone hearing your inner monologue"] }
  ],
  Everyday: [
    { title: "Everyday comforts", items: ["A long sleep", "A hot shower", "A favourite song", "A day off", "A delicious meal"] },
    { title: "Things to save", items: ["Photos", "Messages", "Music playlists", "Important documents", "Funny memories"] },
    { title: "Ideal free time", items: ["Watching a series", "Going outdoors", "Playing games", "Meeting friends", "Doing absolutely nothing"] }
  ],
  Chaos: [
    { title: "Wild trade-offs", items: ["Unlimited money but no holidays", "Dream job but no weekends", "Fame but no privacy", "Perfect memory but no sleep", "Travel anywhere but alone"] },
    { title: "Strange life upgrades", items: ["Pause button for life", "Undo one mistake a day", "Know every language", "Talk to animals", "See 10 minutes into the future"] },
    { title: "Pure chaos", items: ["Every thought appears as subtitles", "Every entrance has theme music", "You must sing instead of speak", "Your life has a laugh track", "Your dreams are livestreamed"] }
  ]
};

const CATEGORY_EMOJI = {
  Funny: "😂", College: "🎓", Movies: "🎬", Anime: "⚔️",
  Food: "🍕", Friendship: "🫶", Savage: "🔥",
  Everyday: "🌈", Chaos: "🤯"
};

const state = {
  players: [],
  scores: {},
  rankerStats: {},
  targetRounds: 10,
  roundNumber: 1,
  ranker: "",
  category: "",
  mode: "",
  topic: null,
  actualOrder: [],
  workingOrder: [],
  predictions: [],
  predictionPlayers: [],
  predictionIndex: 0,
  phase: "setup"
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#039;"
  })[char]);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });
  $(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function addPlayer(name) {
  const cleanName = name.trim();
  if (!cleanName) return;

  if (state.players.some(p => p.toLowerCase() === cleanName.toLowerCase())) {
    alert("That name is already in the game. Please use a unique name.");
    return;
  }

  state.players.push(cleanName);
  renderPlayerList();
}

function renderPlayerList() {
  $("playerList").innerHTML = "";

  state.players.forEach((name, index) => {
    const chip = document.createElement("div");
    chip.className = "player-chip";
    chip.innerHTML = `<span>${index + 1}. ${escapeHTML(name)}</span>
      <button type="button" aria-label="Remove ${escapeHTML(name)}"
        title="Remove player" data-remove-player="${index}">×</button>`;
    $("playerList").appendChild(chip);
  });
}

$("playerForm").addEventListener("submit", event => {
  event.preventDefault();
  addPlayer($("playerName").value);
  $("playerName").value = "";
  $("playerName").focus();
});

$("playerList").addEventListener("click", event => {
  const button = event.target.closest("[data-remove-player]");
  if (!button) return;

  state.players.splice(Number(button.dataset.removePlayer), 1);
  renderPlayerList();
});

function initialiseScores() {
  state.scores = {};
  state.rankerStats = {};

  state.players.forEach(player => {
    state.scores[player] = 0;
    state.rankerStats[player] = {};
    state.players.forEach(other => {
      if (other !== player) state.rankerStats[player][other] = 0;
    });
  });
}

function startGame() {
  if (state.players.length < 3) {
    alert("Add at least 3 players to start the game.");
    return;
  }

  const rounds = Number($("roundCount").value);
  if (!Number.isInteger(rounds) || rounds < 1 || rounds > 100) {
    alert("Choose between 1 and 100 rounds.");
    return;
  }

  state.targetRounds = rounds;
  state.roundNumber = 1;
  initialiseScores();
  prepareRoundScreen();
}

$("startGameBtn").addEventListener("click", startGame);

function prepareRoundScreen() {
  state.phase = "roundSetup";
  $("roundPill").textContent = `ROUND ${state.roundNumber} OF ${state.targetRounds}`;
  $("rankerSelect").innerHTML = state.players.map(name =>
    `<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`
  ).join("");

  renderLeaderboard($("roundLeaderboard"));
  showScreen("roundScreen");
}

$("beginRoundBtn").addEventListener("click", beginRound);

function beginRound() {
  state.ranker = $("rankerSelect").value;

  const selectedCategory = $("categorySelect").value;
  const selectedMode = $("modeSelect").value;

  const categories = Object.keys(BANK);
  state.category = selectedCategory === "Random"
    ? categories[Math.floor(Math.random() * categories.length)]
    : selectedCategory;

  state.mode = selectedMode === "Random"
    ? (Math.random() < 0.5 ? "Personal" : "General")
    : selectedMode;

  const topics = BANK[state.category];
  state.topic = topics[Math.floor(Math.random() * topics.length)];

  state.actualOrder = [];
  state.workingOrder = shuffle(state.topic.items);
  state.predictions = [];
  state.predictionPlayers = state.players.filter(p => p !== state.ranker);
  state.predictionIndex = 0;
  state.phase = "ranker";

  $("playRoundPill").textContent = `ROUND ${state.roundNumber}`;
  $("playCategory").textContent =
    `${CATEGORY_EMOJI[state.category]} ${state.category}`;
  $("modeEmoji").textContent = state.mode === "Personal" ? "❤️" : "🏆";
  $("modeLabel").textContent = state.mode === "Personal"
    ? "PERSONAL FAVOURITES" : "BEST TO WORST";
  $("questionTitle").textContent = state.topic.title;
  $("questionText").textContent = state.mode === "Personal"
    ? "Rank these from your favourite (1st) to your least favourite (5th)."
    : "Rank these from best (1st) to worst (5th), according to your opinion.";

  showRankingTurn(state.ranker, true);
  showScreen("playScreen");
}

function showRankingTurn(player, isRanker) {
  $("turnCard").innerHTML = isRanker
    ? `<strong>🔐 ${escapeHTML(player)}, you're the Ranker!</strong>
       <p>Arrange these based on your real opinion. Everyone else will try to predict your exact order. Keep your screen private!</p>`
    : `<strong>🧠 ${escapeHTML(player)}, it's your prediction turn!</strong>
       <p>Guess the Ranker's real order. Think carefully: exact positions earn points. Keep your prediction hidden!</p>`;

  $("rankingArea").classList.remove("hidden");
  $("handoffCard").classList.add("hidden");
  $("submitRankingBtn").textContent = isRanker
    ? "Lock In My Secret Ranking 🔐"
    : "Submit My Prediction 🎯";

  renderWorkingOrder();
}

function renderWorkingOrder() {
  $("rankingList").innerHTML = "";

  state.workingOrder.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "rank-row";
    row.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <span class="rank-item">${escapeHTML(item)}</span>
      <span class="rank-controls">
        <button type="button" data-move="${index}" data-direction="-1"
          aria-label="Move ${escapeHTML(item)} up" ${index === 0 ? "disabled" : ""}>↑</button>
        <button type="button" data-move="${index}" data-direction="1"
          aria-label="Move ${escapeHTML(item)} down" ${index === state.workingOrder.length - 1 ? "disabled" : ""}>↓</button>
      </span>`;
    $("rankingList").appendChild(row);
  });
}

$("rankingList").addEventListener("click", event => {
  const button = event.target.closest("[data-move]");
  if (!button || button.disabled) return;

  const index = Number(button.dataset.move);
  const nextIndex = index + Number(button.dataset.direction);
  if (nextIndex < 0 || nextIndex >= state.workingOrder.length) return;

  [state.workingOrder[index], state.workingOrder[nextIndex]] =
    [state.workingOrder[nextIndex], state.workingOrder[index]];

  renderWorkingOrder();
});

$("submitRankingBtn").addEventListener("click", submitRanking);

function submitRanking() {
  if (state.phase === "ranker") {
    state.actualOrder = [...state.workingOrder];
    state.phase = "handoffPredict";
    state.predictionIndex = 0;
    showHandoff();
    return;
  }

  if (state.phase !== "prediction") return;

  const player = state.predictionPlayers[state.predictionIndex];
  const predictedOrder = [...state.workingOrder];

  let exactMatches = 0;
  predictedOrder.forEach((item, index) => {
    if (item === state.actualOrder[index]) exactMatches++;
  });

  const perfect = exactMatches === state.actualOrder.length;
  const points = exactMatches + (perfect ? 3 : 0);

  state.scores[player] += points;
  state.rankerStats[state.ranker][player] += points;

  state.predictions.push({
    player,
    order: predictedOrder,
    exactMatches,
    perfect,
    points
  });

  state.predictionIndex++;

  if (state.predictionIndex < state.predictionPlayers.length) {
    state.phase = "handoffPredict";
    showHandoff();
  } else {
    showReveal();
  }
}

function showHandoff() {
  $("rankingArea").classList.add("hidden");
  $("handoffCard").classList.remove("hidden");

  if (state.phase === "handoffPredict") {
    const nextPlayer = state.predictionPlayers[state.predictionIndex];
    $("handoffTitle").textContent = `Pass the phone to ${nextPlayer}!`;
    $("handoffText").textContent =
      `Make sure ${nextPlayer} cannot see the Ranker's secret order or anyone else's prediction. Tap ready when the screen is safely in their hands.`;
  }
}

$("readyBtn").addEventListener("click", () => {
  if (state.phase !== "handoffPredict") return;

  const player = state.predictionPlayers[state.predictionIndex];
  state.phase = "prediction";
  state.workingOrder = shuffle(state.topic.items);
  showRankingTurn(player, false);
});

function renderRows(container, order) {
  container.innerHTML = "";

  order.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "rank-row";
    row.innerHTML = `<span class="rank-number">${index + 1}</span>
      <span class="rank-item">${escapeHTML(item)}</span>`;
    container.appendChild(row);
  });
}

function renderLeaderboard(container) {
  const sorted = [...state.players].sort((a, b) =>
    state.scores[b] - state.scores[a] || a.localeCompare(b)
  );
  const medals = ["🥇", "🥈", "🥉"];

  container.innerHTML = "";
  sorted.forEach((player, index) => {
    const row = document.createElement("div");
    row.className = "leader-row";
    row.innerHTML = `
      <span class="leader-medal">${medals[index] || "🎯"}</span>
      <span class="leader-name">${escapeHTML(player)}</span>
      <span class="leader-points">${state.scores[player]} pts</span>`;
    container.appendChild(row);
  });
}

function showReveal() {
  state.phase = "reveal";
  $("revealSubtitle").textContent =
    `${state.ranker} was the Ranker. Here's the real order and how well everyone guessed!`;

  renderRows($("actualRanking"), state.actualOrder);
  $("predictionResults").innerHTML = "";

  const sorted = [...state.predictions].sort((a, b) =>
    b.points - a.points || b.exactMatches - a.exactMatches
      || a.player.localeCompare(b.player)
  );

  sorted.forEach((result, index) => {
    const card = document.createElement("div");
    card.className = "result-card";
    const matchText = `${result.exactMatches}/5 exact positions`;
    const bonusText = result.perfect ? " • Perfect prediction bonus +3!" : "";
    card.innerHTML = `
      <div class="result-card-top">
        <span class="result-name">${index === 0 ? "🎯 " : ""}${escapeHTML(result.player)}</span>
        <span class="result-score">+${result.points} points</span>
      </div>
      <div class="result-details">${matchText}${bonusText}</div>
      <details>
        <summary>See ${escapeHTML(result.player)}'s prediction</summary>
        <div class="ranking-list predicted-order"></div>
      </details>`;
    renderRows(card.querySelector(".predicted-order"), result.order);
    $("predictionResults").appendChild(card);
  });

  renderLeaderboard($("revealLeaderboard"));
  $("nextRoundBtn").textContent = state.roundNumber >= state.targetRounds
    ? "See Final Results 🏆" : "Next Round →";

  showScreen("revealScreen");
}

$("nextRoundBtn").addEventListener("click", () => {
  if (state.roundNumber >= state.targetRounds) {
    showFinalResults();
  } else {
    state.roundNumber++;
    prepareRoundScreen();
  }
});

function showFinalResults() {
  state.phase = "final";
  const sorted = [...state.players].sort((a, b) =>
    state.scores[b] - state.scores[a] || a.localeCompare(b)
  );
  const highest = state.scores[sorted[0]];
  const winners = sorted.filter(player => state.scores[player] === highest);

  $("championBox").textContent = winners.length > 1
    ? `🤝 ${winners.join(" & ")}`
    : `👑 ${winners[0]}`;

  renderLeaderboard($("finalLeaderboard"));

  const statsContainer = $("rankerStats");
  statsContainer.innerHTML = "";

  state.players.forEach(ranker => {
    const entries = Object.entries(state.rankerStats[ranker])
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const bestScore = entries.length ? entries[0][1] : 0;
    const bestPlayers = entries.filter(entry => entry[1] === bestScore);

    const card = document.createElement("div");
    card.className = "result-card";
    const details = entries.map(([player, score]) =>
      `<div class="leader-row">
        <span class="leader-name">${escapeHTML(player)}</span>
        <span class="leader-points">${score} pts</span>
      </div>`
    ).join("");

    card.innerHTML = `
      <div class="result-card-top">
        <span class="result-name">🧠 ${escapeHTML(ranker)}</span>
        <span class="result-score">Best: ${bestScore} pts</span>
      </div>
      <div class="result-details">Best predictor: ${
        bestScore === 0 ? "No points yet" :
        bestPlayers.map(entry => escapeHTML(entry[0])).join(", ")
      }</div>
      <details><summary>See all predictions for this Ranker</summary>${details}</details>`;
    statsContainer.appendChild(card);
  });

  showScreen("finalScreen");
}

function resetForNewGame(keepPlayers) {
  if (!keepPlayers) state.players = [];
  state.roundNumber = 1;
  state.phase = "setup";
  state.actualOrder = [];
  state.workingOrder = [];
  state.predictions = [];
  state.predictionPlayers = [];
  state.predictionIndex = 0;
  state.ranker = "";
  state.topic = null;
  state.scores = {};
  state.rankerStats = {};

  renderPlayerList();
  $("roundCount").value = "10";
  showScreen("setupScreen");
}

$("playAgainBtn").addEventListener("click", () => {
  initialiseScores();
  state.roundNumber = 1;
  prepareRoundScreen();
});

$("newGameBtn").addEventListener("click", () => resetForNewGame(false));
$("backToSetupBtn").addEventListener("click", () => resetForNewGame(true));

$("homeBtn").addEventListener("click", event => {
  event.preventDefault();
  if (!$("setupScreen").classList.contains("hidden")) return;

  const confirmed = confirm("Return to setup? Your current game progress will be lost.");
  if (confirmed) resetForNewGame(true);
});

// Initial setup
renderPlayerList();
showScreen("setupScreen");
