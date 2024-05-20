const state = {
    "selectedYear": "2020",
    "selectedPlayer": 0,
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

const dom_playerRank = document.getElementById("player-rank");
const dom_playerName = document.getElementById("player-name");
const dom_playerTeam = document.getElementById("player-team");
const dom_playerCountry = document.getElementById("player-country");
const dom_playerUsername = document.getElementById("player-username");
const dom_playerImg = document.getElementById("player-profile-img");

// Average stats for all players
const average = [
    { axis: "KPR", value: 0.71 },
    { axis: "Surviving", value: 0.38 },
    { axis: "ADR", value: 0.76 },
    { axis: "KAST", value: 0.71 },
    { axis: "Impact", value: 0.5 },
    { axis: "Rating", value: 0.5 },
]

// Initial Data Fetch
fetch('/data/top_players.json')
.then(response => response.json())
.then(data => {
    // Use the data here
    const playerData = data[state.selectedYear][state.selectedPlayer]

    const playerStats = transformRawPlayerStats(playerData["stats"])
    // Instantiate the SpiderChart class
    const spiderChart = new SpiderChart(dom_spiderChart.id, average, playerStats);

    // Update the player profile
    updateDisplayedPlayer(data, state.selectedYear, state.selectedPlayer)

})
.catch(error => {
    // Handle any errors
    console.error(error);
});

const updateDisplayedPlayer = (data, year, playerRank) => {

    updateMvp(data[year][playerRank]["mvp"])
    updateEvp(data[year][playerRank]["evp"])
    updateNotableTeamAchievements(
        data[year][playerRank]["team_achievements_1st"], 
        data[year][playerRank]["team_achievements_2nd"], 
        data[year][playerRank]["team_achievements_3rd"]
    )
    updateNotableStats(data[year][playerRank]["notable_stats"])
    updatePlayerInfo(data[year][playerRank])
}

const updateMvp = (mvpList) => {
    dom_mvp.innerHTML = mvpList.map(player => `<li class="viz1-awards-list-item">${player}</li>`).join("")
}
const updateEvp = (evpList) => {
    dom_evp.innerHTML = evpList.map(player => `<li class="viz1-awards-list-item">${player}</li>`).join("")
}
const updateNotableTeamAchievements = (first, second, third) => {
    dom_1st.innerHTML = first.map(ach => `<li class="viz1-notable-team-achievement-list-item">${ach}</li>`).join("")
    dom_2nd.innerHTML = second.map(ach => `<li class="viz1-notable-team-achievement-list-item">${ach}</li>`).join("")
    dom_3rd.innerHTML = third.map(ach => `<li class="viz1-notable-team-achievement-list-item">${ach}</li>`).join("")
}
const updateNotableStats = (stats) => {
    dom_notableStats.innerHTML = stats.map(stat => `<li class="viz1-notable-stats-list-item">${stat}</li>`).join("")
}
const updatePlayerInfo = (player) => {
    console.log(player)
    dom_playerRank.innerHTML = `#${player["rank"]}`
    dom_playerName.innerHTML = player["name"]
    dom_playerTeam.innerHTML = player["team"]
    dom_playerCountry.innerHTML = player["country"] ? player["country"] : ""
    dom_playerUsername.innerHTML = player["username"]
    dom_playerImg.src = `images/players/${player["username"]}.png`
}

// Helper Functions
const transformRawPlayerStats = (rawStats) => {
    return [
        { axis: "KPR", value: rawStats["kpr"] },
        { axis: "Surviving", value: rawStats["surviving"] / 100 },
        { axis: "ADR", value: rawStats["adr"] / 100 },
        { axis: "KAST", value: rawStats["consistency"] / 100 },
        { axis: "Impact", value: rawStats["impact"]/2 },
        { axis: "Rating", value: rawStats["rating"]/2 },
    ]
}