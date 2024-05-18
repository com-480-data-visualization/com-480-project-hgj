const state = {
    "selectedYear": "2020",
    "selectedPlayer": 1,
};

// DOM Elements
const dom_mvp = document.getElementById("viz1-mvp");
const dom_evp = document.getElementById("viz1-evp");
const dom_spiderChart = document.getElementById("players-spider-chart");
const dom_1st = document.getElementById("viz1-1st");
const dom_2nd = document.getElementById("viz1-2nd");
const dom_3rd = document.getElementById("viz1-3rd");
const dom_notableStats = document.getElementById("viz1-notable-stats");
const dom_playerProfile = document.getElementById("viz1-player-profile");
const dom_playerSelectionCarousel = document.getElementById("player-selection-carousel");

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
})
.catch(error => {
    // Handle any errors
    console.error(error);
});

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

