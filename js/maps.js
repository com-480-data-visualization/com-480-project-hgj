document.write('<script src="https://d3js.org/d3.v4.min.js"></script>');

// select year
var slider = document.getElementById("year-slider");
var selectedYear = document.getElementById("selected-year");

slider.addEventListener("input", function() {
    selectedYear.textContent = this.value;
});

// add teams' names
fetch("/com-480-project-hgj/data/teams_over_100_matches.json")
  .then((response) => response.json())
  .then((summary) => {

    allTeams = [...new Set(summary.map(d => d.team))];

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

// setup graph parameters
var margin = {top: 40, right: 250, bottom: 60, left: 30},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


fetch("/com-480-project-hgj/data/map_statistics.json")
.then(response => response.json())
.then((summary) => {
    // update visualization based on initial selection
    document.getElementById('team-select').value = 'Liquid'
    const selectedTeam = document.getElementById('team-select').value;
    const selectedYear = document.getElementById('year-slider').value;
    updateBubblePlot(summary, selectedYear, selectedTeam);
    flag = 1;

    // update data when the selected team or selected year changes
    document.getElementById('team-select').addEventListener('change', event => {
        flag = 1;
        const selectedTeam = event.target.value;
        const selectedYear = document.getElementById('year-slider').value;
        updateBubblePlot(summary, selectedYear, selectedTeam);
        const select = document.getElementById('search-bar');
        select.value = '';
    });
    document.getElementById('year-slider').addEventListener('input', event => {
        const selectedYear = event.target.value;
        document.getElementById('selected-year').innerText = selectedYear;
        if (flag == 1){
            const selectedTeam = document.getElementById('team-select').value;
            updateBubblePlot(summary, selectedYear, selectedTeam);
        }
        else{
            const selectedTeam = document.getElementById('search-bar').value;
            updateBubblePlot(summary, selectedYear, selectedTeam);
            // clear the previous choice
            const select = document.getElementById('team-select');
            select.innerHTML = '<option value="" disabled selected>Select the team</option>';
            allTeams.forEach(function(team) {
                const option = document.createElement("option");
                option.text = team;
                select.add(option);
            });
        }
    });
    document.getElementById('search-bar').addEventListener('input', function() {
        flag = 0;
        const query = this.value;
        const selectedYear = document.getElementById('year-slider').value;
        updateBubblePlot(summary, selectedYear, query);
        // clear the previous choice
        const select = document.getElementById('team-select');
        select.innerHTML = '<option value="" disabled selected>Select the team</option>';
        allTeams.forEach(function(team) {
            const option = document.createElement("option");
            option.text = team;
            select.add(option);
        });
    })
})
.catch(error => {
    console.error(error);
});

// function to plot Bubble chart

function updateBubblePlot(data, selectedYear, selectedTeam) {
    svg.selectAll('*').remove();
    const filteredData = data.filter(d => d.team == selectedTeam && d.year == selectedYear);
    createBubblePlot(filteredData);
}

function createBubblePlot(data) {
    const teams = [...new Set(data.map(d => d.team))];
    const maps = [...new Set(data.map(d => d.map))];
    
    // add tooltip (invisible by default)
    var tooltip = d3.select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")
    // tooltip will be displayed when the mouse moves to the corresponding bubble 
    var showTooltip = function(event, d) {
      tooltip
        .transition()
        .duration(200)
      tooltip
        .style("opacity", 1)
        .html("Map: " + d.map)
        .style("left", (event.pageX+10) + "px")
        .style("top", (event.pageY+10) + "px")
        }
    // tooltip follows the mouse movement
    var moveTooltip = function(event, d) {
      tooltip
        .style("left", (event.pageX+10) + "px")
        .style("top", (event.pageY+10) + "px")
        }
    var hideTooltip = function(d) {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0)
        }

    var highlight = function(d){
        d3.selectAll(".bubbles").style("opacity", .1)
        d3.selectAll("." + d).style("opacity", 1)
    }
    
    var refresh = function(d){
        d3.selectAll(".bubbles").style("opacity", 1)
    }

    // add bubble
    // define x axis
    var x = d3.scaleLinear()
        .domain([0, 1])
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height+50 )
        .text("CT win rate");

    // define y axis
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
    
    // define bubble size and data range    
    var z = d3.scaleSqrt()
        .domain([0, 90]) // data range
        .range([2, 70]); // bubble size

    var myColor = d3.scaleOrdinal()
        .domain(maps)
        .range(d3.schemeSet2);

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
        .on("mouseover", showTooltip)
        .on("mousemove", moveTooltip )
        .on("mouseleave", hideTooltip)

    // Add legends
    var size = 30
    var labels = maps
    svg.append("text")
        .attr('x', 640)
        .attr("y", 50)
        .text("Maps")
        .attr("text-anchor", "middle")

    svg.selectAll("myrect")
        .data(labels)
        .enter()
        .append("circle")
        .attr("cx", 600)
        .attr("cy", function(d, i){ return i*(size+5) + 100})
        .attr("r", 10)
        .style("fill", function(d){ return myColor(d)})
        .on("mouseover", function(event, d){highlight(d)})
        .on("mouseleave", refresh)

    svg.selectAll("mylabels")
        .data(labels)
        .enter()
        .append("text")
        .attr("x", 600 + size*.8)
        .attr("y", function(d, i){ return i*(size+5) + 100})
        .style("fill", function(d){ return myColor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .on("mouseover", function(event, d){highlight(d)})
        .on("mouseleave", refresh)
    
}


const mapContainer = document.getElementById('map-container');

// read disliked maps' data
fetch('/com-480-project-hgj/data/most_disliked_maps.json')
.then(response => response.json())
.then((dismap) => {

    // update visualization based on initial selection
    const teams = [...new Set(dismap.map(d => d.team))];
    updateDislikedMaps(dismap, teams[0]);

    // update data when the selected team changes
    document.getElementById('team-select').addEventListener('change', event => {
        const selectedTeam = event.target.value;
        updateDislikedMaps(dismap, selectedTeam);
    });

    document.getElementById('search-bar').addEventListener('input', function() {
        const query = this.value;
        updateDislikedMaps(dismap, query);
    });
})
.catch(error => {
    console.error('Error loading the JSON data:', error);
});

// function to show most disliked maps of the select team
function updateDislikedMaps(data, selectedTeam) {
    // clear previous output
    mapContainer.innerHTML = ''; 

    const teamData = data.filter(d => d.team === selectedTeam);
    teamData.forEach(item => {
        const mapDiv = document.createElement('div');
        mapDiv.className = 'map';

        const mapName = document.createElement('p');
        mapName.textContent = `${item.map} (Banned ${item.ban_count} times)`;

        const mapImage = document.createElement('img');
        mapImage.src = `images/maps/${item.map}.jpg`; 

        mapDiv.appendChild(mapName);
        mapDiv.appendChild(mapImage);
        mapContainer.appendChild(mapDiv);
    });
}