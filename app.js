
const $ = (id) => document.getElementById(id);


const BANK = {
  "Sports & Cricket": [
    { title: "Favourite Indian cricketers", items: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Jasprit Bumrah", "Sachin Tendulkar"] },
    { title: "Best cricket shots", items: ["Cover drive", "Pull shot", "Straight drive", "Helicopter shot", "Reverse sweep"] },
    { title: "Favourite IPL teams", items: ["Chennai Super Kings", "Royal Challengers Bengaluru", "Mumbai Indians", "Kolkata Knight Riders", "Sunrisers Hyderabad"] },
    { title: "Best cricket roles", items: ["Opening batter", "Middle-order batter", "Fast bowler", "Spinner", "All-rounder"] },
    { title: "Favourite sports", items: ["Cricket", "Football", "Badminton", "Basketball", "Volleyball"] },
    { title: "Best cricket moments", items: ["Winning a World Cup", "Last-ball victory", "Hat-trick", "Century under pressure", "Super Over win"] },
    { title: "Sports to try", items: ["Go-karting", "Swimming", "Badminton", "Football", "Skating"] },
    { title: "Favourite football stars", items: ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Kylian Mbappé", "Sunil Chhetri"] },
    { title: "Best ways to watch cricket", items: ["At the stadium", "With friends", "With family", "At a sports bar", "Alone with snacks"] },
    { title: "Cricket match situations", items: ["Chasing 10 runs in the last over", "Taking a hat-trick", "Scoring a century", "Saving a match with a catch", "Winning on the final ball"] }
  ],

  "Movies & Actors": [
    { title: "Favourite movie genres", items: ["Action", "Comedy", "Thriller", "Horror", "Romance"] },
    { title: "Popular Kannada stars", items: ["Dr. Shivarajkumar", "Yash", "Puneeth Rajkumar", "Sudeep", "Darshan"] },
    { title: "Popular Indian actors", items: ["Shah Rukh Khan", "Allu Arjun", "Prabhas", "Ranbir Kapoor", "Vijay"] },
    { title: "Movie night essentials", items: ["Popcorn", "Chips", "Cold drink", "Blanket", "Good company"] },
    { title: "Best movie villains", items: ["Joker", "Thanos", "Gabbar Singh", "Mogambo", "Kattappa"] },
    { title: "Favourite movie experiences", items: ["First-day-first-show", "Watching at home", "Late-night movie", "Rewatching a favourite", "Watching with friends"] },
    { title: "Best movie features", items: ["Story", "Acting", "Comedy", "Action scenes", "Background music"] },
    { title: "Movie plot twists", items: ["Secret identity revealed", "Villain was a friend", "Unexpected betrayal", "Fake death reveal", "Time-loop reveal"] },
    { title: "Best cinema snacks", items: ["Popcorn", "Nachos", "Samosa", "French fries", "Chocolate"] },
    { title: "Dream movie roles", items: ["Superhero", "Detective", "Villain", "Secret agent", "Comedy lead"] }
  ],

  "Anime & Series": [
    { title: "Favourite anime", items: ["Attack on Titan", "Death Note", "Demon Slayer", "Jujutsu Kaisen", "One Punch Man"] },
    { title: "Anime superpowers", items: ["Time control", "Teleportation", "Super strength", "Mind reading", "Healing"] },
    { title: "Favourite anime characters", items: ["L", "Levi Ackerman", "Gojo Satoru", "Saitama", "Tanjiro Kamado"] },
    { title: "Best anime genres", items: ["Psychological thriller", "Action", "Fantasy", "Comedy", "Mystery"] },
    { title: "Best fictional detectives", items: ["L", "Sherlock Holmes", "Batman", "Conan Edogawa", "Hercule Poirot"] },
    { title: "Best fictional worlds", items: ["Naruto's world", "One Piece's world", "Attack on Titan's world", "Pokémon's world", "Dragon Ball's world"] },
    { title: "Best anime abilities", items: ["Sharingan", "Domain Expansion", "Bankai", "Breathing Styles", "One For All"] },
    { title: "Best series experiences", items: ["Binge-watching", "Weekly episodes", "Watching with friends", "Rewatching classics", "Avoiding spoilers"] },
    { title: "What makes an anime great", items: ["Story twists", "Character development", "Fight scenes", "Soundtrack", "Emotional moments"] },
    { title: "Anime character roles", items: ["Main hero", "Rival", "Mentor", "Strategist", "Overpowered villain"] }
  ],

  "Free Time & Hobbies": [
    { title: "Things to do in free time", items: ["Watch movies", "Play video games", "Listen to music", "Go out with friends", "Sleep"] },
    { title: "Favourite indoor activities", items: ["Gaming", "Reading", "Watching shows", "Board games", "Cooking"] },
    { title: "Favourite outdoor activities", items: ["Cricket", "Cycling", "Badminton", "Walking", "Football"] },
    { title: "Hobbies to learn", items: ["Photography", "Guitar", "Drawing", "Cooking", "Video editing"] },
    { title: "Ideal weekend plans", items: ["Movie marathon", "Road trip", "Gaming session", "Cafe visit", "Staying in bed"] },
    { title: "Best ways to relax", items: ["Listening to music", "Taking a nap", "Going for a walk", "Watching comedy", "Talking to a friend"] },
    { title: "Best creative hobbies", items: ["Drawing", "Photography", "Writing stories", "Making videos", "Playing an instrument"] },
    { title: "Things to do on a holiday", items: ["Visit a new place", "Meet friends", "Play games", "Watch movies", "Sleep all day"] },
    { title: "Skills worth learning", items: ["Public speaking", "Coding", "Cooking", "Driving", "Photography"] },
    { title: "Best ways to spend one free hour", items: ["Take a power nap", "Watch an episode", "Play a quick game", "Call a friend", "Go for a walk"] }
  ],

  "Food & Drinks": [
    { title: "Favourite South Indian foods", items: ["Masala dosa", "Idli sambar", "Mysore masala dosa", "Bisi bele bath", "Pongal"] },
    { title: "Favourite fast foods", items: ["Pizza", "Burger", "French fries", "Sandwich", "Tacos"] },
    { title: "Best Indian snacks", items: ["Samosa", "Pani puri", "Bhel puri", "Pakoda", "Vada pav"] },
    { title: "Favourite desserts", items: ["Ice cream", "Gulab jamun", "Brownie", "Rasmalai", "Cake"] },
    { title: "Best drinks", items: ["Cold coffee", "Lemon soda", "Mango juice", "Milkshake", "Masala chai"] },
    { title: "Best breakfast foods", items: ["Dosa", "Idli", "Poori", "Paratha", "Bread toast"] },
    { title: "Favourite pizza toppings", items: ["Extra cheese", "Mushrooms", "Sweet corn", "Olives", "Jalapeños"] },
    { title: "Best ice cream flavours", items: ["Chocolate", "Vanilla", "Mango", "Butterscotch", "Strawberry"] },
    { title: "Foods to eat every day", items: ["Dosa", "Pizza", "Fried rice", "Sandwich", "Ice cream"] },
    { title: "Ideal food delivery", items: ["South Indian meal", "Pizza combo", "Burger combo", "Biryani", "Dessert box"] }
  ],

  "College & Student Life": [
    { title: "Favourite college subjects", items: ["Mathematics", "Computer Science", "Physics", "English", "Social Studies"] },
    { title: "Best college moments", items: ["Cultural fest", "Lunch with friends", "Class trips", "Free periods", "Finishing exams"] },
    { title: "Things to do in a free period", items: ["Chat with friends", "Play games", "Listen to music", "Eat snacks", "Take a nap"] },
    { title: "Student survival essentials", items: ["Phone", "Charger", "Water bottle", "Headphones", "Snacks"] },
    { title: "Biggest student struggles", items: ["Early mornings", "Assignments", "Exams", "Attendance", "Group projects"] },
    { title: "Best places on campus", items: ["Canteen", "Library", "Playground", "Classroom", "Campus garden"] },
    { title: "Best group project roles", items: ["Team leader", "Researcher", "Presenter", "Designer", "Last-minute finisher"] },
    { title: "Exam preparation styles", items: ["Study weeks ahead", "Study one day before", "Group study", "Video tutorials", "Pray and improvise"] },
    { title: "Most useful college skills", items: ["Time management", "Communication", "Coding", "Presentation skills", "Teamwork"] },
    { title: "Things that make college fun", items: ["Good friends", "Funny lecturers", "Cultural events", "Canteen food", "Unexpected holidays"] }
  ],

  "Friendship & Social Life": [
    { title: "Best qualities in a friend", items: ["Loyalty", "Honesty", "Humour", "Kindness", "Reliability"] },
    { title: "Best group hangouts", items: ["Movie theatre", "Cafe", "Gaming centre", "Road trip", "Someone's home"] },
    { title: "Ideal best-friend activities", items: ["Deep conversations", "Gaming together", "Trying food", "Travelling", "Sharing memes"] },
    { title: "Best gifts for friends", items: ["Personalised gift", "Favourite snacks", "Hoodie", "Photo album", "Surprise outing"] },
    { title: "Friend-group roles", items: ["The comedian", "The planner", "The foodie", "The sleepy one", "The photographer"] },
    { title: "Best friendship memories", items: ["First meeting", "Inside jokes", "Classroom chaos", "Trips together", "Late-night talks"] },
    { title: "Ways to cheer up a friend", items: ["Make them laugh", "Listen to them", "Bring snacks", "Take them out", "Send funny videos"] },
    { title: "Best qualities for a hangout", items: ["Good food", "Good music", "Funny conversations", "Games", "No awkward silence"] },
    { title: "Things friends can do together", items: ["Play sports", "Watch a movie", "Cook food", "Explore a new place", "Have a game night"] },
    { title: "Best ways to stay connected", items: ["Daily messages", "Phone calls", "Group chats", "Gaming online", "Meeting in person"] }
  ],

  "Everyday Preferences": [
    { title: "Favourite times of day", items: ["Early morning", "Late morning", "Afternoon", "Evening", "Midnight"] },
    { title: "Favourite weather", items: ["Rainy", "Cold and cloudy", "Sunny", "Windy", "Thunderstorms"] },
    { title: "Best days of the week", items: ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"] },
    { title: "Favourite seasons or weather moods", items: ["Monsoon", "Winter", "Summer", "Spring", "Autumn"] },
    { title: "Best transport options", items: ["Motorbike", "Car", "Metro", "Bus", "Bicycle"] },
    { title: "Dream travel destinations", items: ["Japan", "Switzerland", "Goa", "Dubai", "Manali"] },
    { title: "Favourite places to hang out", items: ["Cafe", "Shopping mall", "Park", "Beach", "Gaming zone"] },
    { title: "Things that improve your mood", items: ["Music", "Food", "Sleep", "Friends", "A good movie"] },
    { title: "Everyday comforts", items: ["A comfortable bed", "Fast Wi-Fi", "Air conditioning", "Favourite food", "Peace and quiet"] },
    { title: "Things you would save first", items: ["Phone", "Wallet", "Family photos", "Laptop", "Favourite keepsake"] }
  ],

  "Tech & Internet": [
    { title: "Favourite social platforms", items: ["YouTube", "Instagram", "WhatsApp", "Reddit", "Snapchat"] },
    { title: "Most useful apps", items: ["Google Maps", "WhatsApp", "YouTube", "Spotify", "Google Keep"] },
    { title: "Favourite types of games", items: ["Battle royale", "Racing", "Football", "Puzzle", "Open-world adventure"] },
    { title: "Dream gadgets", items: ["Gaming laptop", "Flagship phone", "Smartwatch", "Wireless headphones", "VR headset"] },
    { title: "Best things about smartphones", items: ["Camera", "Battery life", "Gaming performance", "Display", "Fast charging"] },
    { title: "Best internet content", items: ["Comedy videos", "Gaming videos", "Educational videos", "Movie reviews", "Travel vlogs"] },
    { title: "Tech skills to master", items: ["Web development", "Video editing", "Cybersecurity", "AI tools", "App development"] },
    { title: "Ideal gaming setup", items: ["Gaming PC", "Gaming laptop", "Console", "Large monitor", "Comfortable gaming chair"] },
    { title: "Best ways to use AI", items: ["Learning", "Coding help", "Creative writing", "Image creation", "Planning tasks"] },
    { title: "Things you would buy with ₹1 crore", items: ["Dream house", "Luxury car", "Travel around the world", "Start a business", "Invest most of it"] }
  ],

  "Funny & Hypothetical": [
    { title: "Best superpowers", items: ["Teleportation", "Time control", "Invisibility", "Mind reading", "Flying"] },
    { title: "Most useful impossible skills", items: ["Never needing sleep", "Learning instantly", "Talking to animals", "Pausing time", "Knowing every language"] },
    { title: "Worst everyday annoyances", items: ["Slow internet", "Low phone battery", "Traffic jams", "Mosquitoes at night", "Forgetting why you entered a room"] },
    { title: "Best ways to become famous", items: ["Become a movie star", "Become a top athlete", "Create viral videos", "Invent something", "Become a famous musician"] },
    { title: "Things to do if invisible for a day", items: ["Explore secret places", "Pull harmless pranks", "Attend a concert unnoticed", "Avoid awkward situations", "Observe the world quietly"] },
    { title: "Best time-travel choices", items: ["Visit the past", "See the future", "Meet historical figures", "Watch your childhood again", "See life 100 years from now"] },
    { title: "Strange life upgrades", items: ["Unlimited snacks", "Perfect memory", "Never lose anything", "Instant travel", "Always find parking"] },
    { title: "Funny dream jobs", items: ["Professional nap tester", "Food taster", "Theme-park reviewer", "Meme creator", "Video game tester"] },
    { title: "Things to do with a free million", items: ["Travel the world", "Buy a dream home", "Help family and friends", "Start a business", "Build a gaming room"] },
    { title: "Choose your weird advantage", items: ["Always win rock-paper-scissors", "Never get stuck in traffic", "Always find the remote", "Never forget a name", "Always pick the fastest queue"] }
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
