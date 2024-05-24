document.write('<script src="https://d3js.org/d3.v4.min.js"></script>');

// select year
var slider = document.getElementById("year-slider");
var selectedYear = document.getElementById("selected-year");

slider.addEventListener("input", function() {
    selectedYear.textContent = this.value;
});

// add teams' names
fetch("/data/map_statistics.json")
  .then((response) => response.json())
  .then((summary) => {

    const teams = [...new Set(summary.map(d => d.team))];

    const select = document.getElementById("team-select");
    teams.forEach(function(team) {
        const option = document.createElement("option");
        option.text = team;
        select.add(option);
    });
  })
  .catch((error) => {
    console.error(error);
  });

// setup bubbleplot parameters
var margin = {top: 40, right: 150, bottom: 60, left: 30},
    width = 500 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


fetch("/data/map_statistics.json")
.then(response => response.json())
.then((summary) => {
    // Update visualization based on initial selection
    const selectedTeam = document.getElementById('team-select').value;
    const selectedYear = document.getElementById('year-slider').value;
    updateBubblePlot(summary, selectedYear, selectedTeam);

    // Add event listeners
    document.getElementById('team-select').addEventListener('change', event => {
        const selectedTeam = event.target.value;
        const selectedYear = document.getElementById('year-slider').value;
        updateBubblePlot(summary, selectedYear, selectedTeam);
    });
    document.getElementById('year-slider').addEventListener('input', event => {
        const selectedYear = event.target.value;
        document.getElementById('selected-year').innerText = selectedYear;
        const selectedTeam = document.getElementById('team-select').value;
        updateBubblePlot(summary, selectedYear, selectedTeam);
    });
})
.catch(error => {
    console.error(error);
});

//plot Bubble chart

function updateBubblePlot(data, selectedYear, selectedTeam) {
    svg.selectAll('*').remove();
    const filteredData = data.filter(d => d.team == selectedTeam && d.year == selectedYear);
    createBubblePlot(filteredData);
}

function createBubblePlot(data) {
    const teams = [...new Set(data.map(d => d.team))];
    const maps = [...new Set(data.map(d => d.map))];

    var x = d3.scaleLinear()
        .domain([0, 1])
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(3));

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height+50 )
        .text("CT win rate");

    var y = d3.scaleLinear()
        .domain([0, 1])
        .range([ height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", 0)
        .attr("y", -20 )
        .text("T win rate")
        .attr("text-anchor", "start")

    var z = d3.scaleSqrt()
        .domain([0, 90])
        .range([ 2, 30]);

    var myColor = d3.scaleOrdinal()
        .domain(maps)
        .range(d3.schemeSet1);

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", function(d) { return "bubbles " + d.map })
        .attr("cx", function (d) { return x(d.T_win_rate); } )
        .attr("cy", function (d) { return y(d.CT_win_rate); } )
        .attr("r", function (d) { return z(d.T_total_matches); } )
        .style("fill", function (d) { return myColor(d.map); } )

  // Add legends
    var size = 20
    var allgroups = maps
    svg.selectAll("myrect")
        .data(allgroups)
        .enter()
        .append("circle")
        .attr("cx", 390)
        .attr("cy", function(d,i){ return 10 + i*(size+5)})
        .attr("r", 7)
        .style("fill", function(d){ return myColor(d)})

    svg.selectAll("mylabels")
        .data(allgroups)
        .enter()
        .append("text")
        .attr("x", 390 + size*.8)
        .attr("y", function(d,i){ return i * (size + 5) + (size/2)})
        .style("fill", function(d){ return myColor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
  }