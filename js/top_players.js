// Average stats for all players
const average = [
  { axis: "KPR", value: 0.71 },
  { axis: "Surviving", value: 0.38 },
  { axis: "ADR", value: 0.76 },
  { axis: "KAST", value: 0.71 },
  { axis: "Impact", value: 0.5 },
  { axis: "Rating", value: 0.5 },
];

const state = {
  selectedYear: "2018",
  selectedPlayer: 0,
  data: null,
  spiderChart: null,
  initializeData: (data) => {
    state.data = data;
    state.spiderChart = new SpiderChart(
      dom_spiderChart.id,
      average,
      transformRawPlayerStats(data[state.selectedYear][state.selectedPlayer]["stats"])
    );
    
    updatePlayerCards(data, state.selectedYear);
    updateDisplayedPlayer(data, state.selectedYear, state.selectedPlayer);
  },
  updatePlayer: (playerIdx) => {
    state.selectedPlayer = playerIdx;
    updateDisplayedPlayer(state.data, state.selectedYear, playerIdx);
  },
  updateYear: (year) => {
    state.selectedYear = year;
    updatePlayerCards(state.data, year);
    updateDisplayedPlayer(state.data, year, state.selectedPlayer);
  }
};

// DOM Elements
const dom_mvp = document.getElementById("mvp-awards-list");
const dom_evp = document.getElementById("evp-awards-list");
const dom_spiderChart = document.getElementById("viz1-players-spider-chart");
const dom_1st = document.getElementById("viz1-notable-team-achievements-1st");
const dom_2nd = document.getElementById("viz1-notable-team-achievements-2nd");
const dom_3rd = document.getElementById("viz1-notable-team-achievements-3rd");
const dom_notableStats = document.getElementById("notable-stats-list");
const dom_playerProfile = document.getElementById("viz1-player-profile");
const dom_playerSelectionCarousel = document.getElementById("player-selection-carousel");
const dom_yearSelection = document.getElementById("viz1-year-select");

const dom_playerRank = document.getElementById("player-rank");
const dom_playerName = document.getElementById("player-name");
const dom_playerTeam = document.getElementById("player-team");
const dom_playerCountry = document.getElementById("player-country");
const dom_playerUsername = document.getElementById("player-username");
const dom_playerImg = document.getElementById("player-profile-img");


dom_yearSelection.onchange = (event) => {
  state.updateYear(event.target.value);
};

// Initial Data Fetch
fetch("/com-480-project-hgj/data/top_players.json")
  .then((response) => response.json())
  .then((data) => {
    // Update the player profile
    state.initializeData(data);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });

const updateDisplayedPlayer = (data, year, playerIdx) => {
  // Spider Chart
  state.spiderChart.updateChart(transformRawPlayerStats(data[year][playerIdx]["stats"]))

  // Player Details
  updateMvp(data[year][playerIdx]["mvp"]);
  updateEvp(data[year][playerIdx]["evp"]);
  updateNotableTeamAchievements(
    data[year][playerIdx]["team_achievements_1st"],
    data[year][playerIdx]["team_achievements_2nd"],
    data[year][playerIdx]["team_achievements_3rd"]
  );
  updateNotableStats(data[year][playerIdx]["notable_stats"]);
  updatePlayerInfo(data[year][playerIdx]);
};

const updateMvp = (mvpList) => {
  dom_mvp.innerHTML = mvpList
    .map((player) => `<li class="viz1-awards-list-item">${player}</li>`)
    .join("");
};
const updateEvp = (evpList) => {
  dom_evp.innerHTML = evpList
    .map((player) => `<li class="viz1-awards-list-item">${player}</li>`)
    .join("");
};
const updateNotableTeamAchievements = (first, second, third) => {
  dom_1st.innerHTML = first
    .map(
      (ach) => `<li class="viz1-notable-team-achievement-list-item">${ach}</li>`
    )
    .join("");
  dom_2nd.innerHTML = second
    .map(
      (ach) => `<li class="viz1-notable-team-achievement-list-item">${ach}</li>`
    )
    .join("");
  dom_3rd.innerHTML = third
    .map(
      (ach) => `<li class="viz1-notable-team-achievement-list-item">${ach}</li>`
    )
    .join("");
};
const updateNotableStats = (stats) => {
  dom_notableStats.innerHTML = stats
    .map((stat) => `<li class="viz1-notable-stats-list-item">${stat}</li>`)
    .join("");
};
const updatePlayerInfo = (player) => {
  dom_playerRank.innerHTML = `#${player["rank"]}`;
  dom_playerName.innerHTML = player["name"];
  dom_playerTeam.innerHTML = player["team"];
  dom_playerCountry.innerHTML = player["country"] ? player["country"] : "";
  dom_playerUsername.innerHTML = player["username"];
  dom_playerImg.src = `images/players/${player["username"]}.png`;
};

const updatePlayerCards = (data, year) => {
  // delete all player cards
  while (dom_playerSelectionCarousel.firstChild) {
    dom_playerSelectionCarousel.removeChild(dom_playerSelectionCarousel.firstChild);
  }

  const playersList = data[year];

  playersList.forEach((player) => {
    // Create an HTML element
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerIdx = player["rank"]-1;

    if (playerIdx === state.selectedPlayer) {
      playerCard.classList.add("selected-player-card");
    }

    playerCard.innerHTML = `
    <img
      src="images/players/${player["username"]}.png"
      alt="Player Image"
      class="player-card-img"
      id="player-card-img-${player["rank"]}"
    />
    <div class="player-card-info">
      <div id="player-rank-${player["rank"]}">#${player["rank"]}</div>
      <div id="player-username-${player["rank"]}">${player["username"]}</div>
    </div>
  `;  

    playerCard.onclick = () => {
      const allPlayerCards = document.querySelector(".selected-player-card");
      allPlayerCards.classList.remove("selected-player-card");
      playerCard.classList.add("selected-player-card");
      state.updatePlayer(playerIdx);
    };

    dom_playerSelectionCarousel.appendChild(playerCard);
  });
};

// Helper Functions
const transformRawPlayerStats = (rawStats) => {
  return [
    { axis: "KPR", value: rawStats["kpr"] },
    { axis: "Surviving", value: rawStats["surviving"] / 100 },
    { axis: "ADR", value: rawStats["adr"] / 100 },
    { axis: "KAST", value: rawStats["consistency"] / 100 },
    { axis: "Impact", value: rawStats["impact"] / 2 },
    { axis: "Rating", value: rawStats["rating"] / 2 },
  ];
};

