const weaponData = [
    { id: 1,type:"p", name: 'USP-S', price: 200, kill_reward: 300, damage: 35, armor_pen: 50.5, fire_rate: 352.94, acc_range_stand: 23.81, mobility: 240, image: 'images/weapons/pistols/USP-S.png' },
    { id: 2,type:"p", name: 'P2000', price: 200, kill_reward: 300, damage: 35, armor_pen: 50.5, fire_rate: 352.94, acc_range_stand: 22.09, mobility: 240, image: 'images/weapons/pistols/P2000.png' },
    { id: 3,type:"p", name: 'Glock-18', price: 200, kill_reward: 300, damage: 30, armor_pen: 47, fire_rate: 400, acc_range_stand: 20.05, mobility: 240, image: 'images/weapons/pistols/Glock-18.png' },
    { id: 4,type:"p", name: 'P250', price: 300, kill_reward: 300, damage: 38, armor_pen: 64, fire_rate: 400, acc_range_stand: 13.73, mobility: 240, image: 'images/weapons/pistols/P250.png' },
    { id: 5,type:"p", name: 'Five-SeveN', price: 500, kill_reward: 300, damage: 32, armor_pen: 91.15, fire_rate: 400, acc_range_stand: 13.73, mobility: 240, image: 'images/weapons/pistols/Five-SeveN.png' },
    { id: 6,type:"p", name: 'CZ75-Auto', price: 500, kill_reward: 300, damage: 31, armor_pen: 77.65, fire_rate: 600, acc_range_stand: 11.35, mobility: 240, image: 'images/weapons/pistols/CZ75-Auto.png' },
    { id: 7,type:"p", name: 'Tec-9', price: 500, kill_reward: 300, damage: 33, armor_pen: 90.60, fire_rate: 500, acc_range_stand: 22.09, mobility: 240, image: 'images/weapons/pistols/Tec-9.png' },
    { id: 8,type:"p", name: 'Dual Berettas', price: 300, kill_reward: 300, damage: 38, armor_pen: 57.50, fire_rate: 500, acc_range_stand: 16.93, mobility: 240, image: 'images/weapons/pistols/Dual_Berettas.png' },
    { id: 9,type:"p", name: 'Desert Eagle', price: 700, kill_reward: 300, damage: 53, armor_pen: 93.2, fire_rate: 266.67, acc_range_stand: 24.58, mobility: 230, image: 'images/weapons/pistols/Desert_Eagle.png' },

    { id: 10,type:"s", name: 'MAC-10', price: 1050, kill_reward: 600, damage: 29, armor_pen: 57.50, fire_rate: 800, acc_range_stand: 10.96, mobility: 240, image: 'images/weapons/smgs/MAC-10.png' },
    { id: 11,type:"s", name: 'MP5-SD', price: 1500, kill_reward: 600, damage: 27, armor_pen: 62.50, fire_rate: 750, acc_range_stand: 14.36, mobility: 235, image: 'images/weapons/smgs/MP5-SD.png' },
    { id: 12,type:"s", name: 'MP7', price: 1500, kill_reward: 600, damage: 29, armor_pen: 62.50, fire_rate: 750, acc_range_stand: 14.38, mobility: 220, image: 'images/weapons/smgs/MP7.png' },
    { id: 13,type:"s", name: 'MP9', price: 1250, kill_reward: 600, damage: 26, armor_pen: 60.00, fire_rate: 857.14, acc_range_stand: 15.88, mobility: 240, image: 'images/weapons/smgs/MP9.png' },
    { id: 14,type:"s", name: 'P90', price: 2350, kill_reward: 300, damage: 26, armor_pen: 69.00, fire_rate: 857.14, acc_range_stand: 10.40, mobility: 230, image: 'images/weapons/smgs/P90.png' },
    { id: 15,type:"s", name: 'PP-Bizon', price: 1400, kill_reward: 600, damage: 27, armor_pen: 63.00, fire_rate: 750, acc_range_stand: 10.16, mobility: 240, image: 'images/weapons/smgs/PP-Bizon.png' },
    { id: 16,type:"s", name: 'UMP-45', price: 1200, kill_reward: 600, damage: 35, armor_pen: 65.00, fire_rate: 666.67, acc_range_stand: 10.56, mobility: 230, image: 'images/weapons/smgs/UMP-45.png' },

    { id: 17,type:"r", name: 'AK-47', price: 2700, kill_reward: 300, damage: 36, armor_pen: 77.50, fire_rate: 600, acc_range_stand: 21.74, mobility: 215, image: 'images/weapons/rifles/AK-47.png' },
    { id: 18,type:"r", name: 'M4A1-S', price: 2900, kill_reward: 300, damage: 38, armor_pen: 70.00, fire_rate: 600, acc_range_stand: 28.22, mobility: 225, image: 'images/weapons/rifles/M4A1-S.png' },
    { id: 19,type:"r", name: 'M4A4', price: 3100, kill_reward: 300, damage: 38, armor_pen: 70.00, fire_rate: 666.67, acc_range_stand: 27.71, mobility: 225, image: 'images/weapons/rifles/M4A4.png' },
    { id: 20,type:"r", name: 'Galil AR', price: 1800, kill_reward: 300, damage: 30, armor_pen: 77.50, fire_rate: 666.67, acc_range_stand: 16.26, mobility: 215, image: 'images/weapons/rifles/Galil_AR.png' },
    { id: 21,type:"r", name: 'FAMAS', price: 2050, kill_reward: 300, damage: 30, armor_pen: 70.00, fire_rate: 666.67, acc_range_stand: 14.58, mobility: 220, image: 'images/weapons/rifles/FAMAS.png' },
    { id: 22,type:"r", name: 'SG 553', price: 3000, kill_reward: 300, damage: 30, armor_pen: 100.00, fire_rate: 545.45, acc_range_stand: 23.78, mobility: 210, image: 'images/weapons/rifles/SG_553.png' },
    { id: 23,type:"r", name: 'AUG', price: 3300, kill_reward: 300, damage: 28, armor_pen: 90.00, fire_rate: 600, acc_range_stand: 28.22, mobility: 220, image: 'images/weapons/rifles/AUG.png' },
    { id: 24,type:"r", name: 'SSG 08', price: 1700, kill_reward: 300, damage: 88, armor_pen: 85.00, fire_rate: 48, acc_range_stand: 47.18, mobility: 230, image: 'images/weapons/rifles/SSG_08.png' },
    { id: 25,type:"r", name: 'AWP', price: 4750, kill_reward: 100, damage: 115, armor_pen: 97.50, fire_rate: 41.24, acc_range_stand: 69.27, mobility: 200, image: 'images/weapons/rifles/AWP.png' },

    { id: 26,type:"h", name: 'MAG-7', price: 1300, kill_reward: 900, damage: 30, armor_pen: 75.00, fire_rate: 70.59, acc_range_stand: 3.24, mobility: 225, image: 'images/weapons/heavies/MAG-7.png' },
    { id: 27,type:"h", name: 'Nova', price: 1050, kill_reward: 900, damage: 26, armor_pen: 50.00, fire_rate: 68.18, acc_range_stand: 3.24, mobility: 220, image: 'images/weapons/heavies/Nova.png' },
    { id: 28,type:"h", name: 'Sawed-Off', price: 1100, kill_reward: 900, damage: 32, armor_pen: 55.00, fire_rate: 70.59, acc_range_stand: 2.21, mobility: 210, image: 'images/weapons/heavies/Sawed-Off.png' },
    { id: 29,type:"h", name: 'XM1014', price: 2000, kill_reward: 600, damage: 20, armor_pen: 80.00, fire_rate: 171.43, acc_range_stand: 3.39, mobility: 215, image: 'images/weapons/heavies/XM1014.png' },
    { id: 30,type:"h", name: 'Negev', price: 1700, kill_reward: 300, damage: 35, armor_pen: 71.00, fire_rate: 800, acc_range_stand: 12.52, mobility: 150, image: 'images/weapons/heavies/Negev.png' },
    { id: 31,type:"h", name: 'M249', price: 5200, kill_reward: 300, damage: 32, armor_pen: 80.00, fire_rate: 750, acc_range_stand: 15.71, mobility: 195, image: 'images/weapons/heavies/M249.png' }
];

const AVGweaponData = [
    { type:"p", attr:"price", max:700, min:200, avg:377.78},
    { type:"p", attr:"kill_reward", max:300, min:300, avg:300},
    { type:"p", attr:"damage", max:53, min:30, avg:36.11},
    { type:"p", attr:"armor_pen", max:93.2, min:47, avg:69.12},
    { type:"p", attr:"fire_rate", max:600, min:266.67, avg:419.17},
    { type:"p", attr:"acc_range_stand", max:24.58, min:11.35, avg:18.71},
    { type:"p", attr:"mobility", max:240, min:230, avg:238.89},
    { type:"s", attr:"price", max:2350, min:1050, avg:1464.29},
    { type:"s", attr:"kill_reward", max:600, min:300, avg:557.14},
    { type:"s", attr:"damage", max:35, min:26, avg:28.43},
    { type:"s", attr:"armor_pen", max:69, min:57.50, avg:62.79},
    { type:"s", attr:"fire_rate", max:857.14, min:666.67, avg:775.85},
    { type:"s", attr:"acc_range_stand", max:15.88, min:10.16, avg:12.39},
    { type:"s", attr:"mobility", max:240, min:220, avg:233.57},
    { type:"r", attr:"price", max:4750, min:1700, avg:2811.11},
    { type:"r", attr:"kill_reward", max:300, min:100, avg:277.78},
    { type:"r", attr:"damage", max:115, min:28, avg:48.11},
    { type:"r", attr:"armor_pen", max:100, min:70, avg:81.94},
    { type:"r", attr:"fire_rate", max:666.67, min:41.24, avg:492.74},
    { type:"r", attr:"acc_range_stand", max:69.27, min:14.58, avg:30.77},
    { type:"r", attr:"mobility", max:230, min:200, avg:217.78},
    { type:"h", attr:"price", max:5200, min:1050, avg:2058.33},
    { type:"h", attr:"kill_reward", max:900, min:300, avg:650},
    { type:"h", attr:"damage", max:35, min:20, avg:29.17},
    { type:"h", attr:"armor_pen", max:80, min:50, avg:68.5},
    { type:"h", attr:"fire_rate", max:800, min:68.18, avg:321.80},
    { type:"h", attr:"acc_range_stand", max:15.71, min:2.21, avg:6.72},
    { type:"h", attr:"mobility", max:225, min:150, avg:202.5}
];

function createWeaponGrid(containerId, weapons, chartContainerId, selectedImageId, chartId) {
    const grid = document.getElementById(containerId);
    weapons.forEach(weapon => {
        const weaponContainer = document.createElement('div');
        weaponContainer.className = 'weapon-container';

        const img = document.createElement('img');
        img.src = weapon.image;
        img.alt = weapon.name;
        img.onclick = () => showChart(weapon, chartContainerId, selectedImageId, chartId);

        const name = document.createElement('div');
        name.className = 'weapon-name';
        name.innerText = weapon.name;
        
        weaponContainer.appendChild(img);
        weaponContainer.appendChild(name);
        grid.appendChild(weaponContainer);
    });
}

// Function to show chart
function showChart(weapon, chartContainerId, selectedImageId, chartId) {
    document.getElementById(chartContainerId).style.display = 'block';
    document.getElementById(selectedImageId).src = weapon.image;
    createBarChart(chartId, weapon);
}

// Function to create bar chart
function createBarChart(chartId, weapon) {

    const weaponType = weapon.type;
    const normalize = (value, max, min) => 0.2 + 0.8 * ((value - min) / (max - min));
    const avg_normalize = (value, avg) => value/avg;
    const data = [
        { attribute: 'Price', value: weapon.price, normalized: normalize(weapon.price, AVGweaponData.find(d => d.type === weaponType && d.attr === 'price').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'price').min), avg_normed:avg_normalize(weapon.price, AVGweaponData.find(d => d.type === weaponType && d.attr === 'price').avg)  },
        { attribute: 'Kill Reward', value: weapon.kill_reward, normalized: normalize(weapon.kill_reward, AVGweaponData.find(d => d.type === weaponType && d.attr === 'kill_reward').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'kill_reward').min), avg_normed:avg_normalize(weapon.kill_reward, AVGweaponData.find(d => d.type === weaponType && d.attr === 'kill_reward').avg) },
        { attribute: 'Damage', value: weapon.damage, normalized: normalize(weapon.damage, AVGweaponData.find(d => d.type === weaponType && d.attr === 'damage').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'damage').min), avg_normed:avg_normalize(weapon.damage, AVGweaponData.find(d => d.type === weaponType && d.attr === 'damage').avg) },
        { attribute: 'Armor Penetration(in %)', value: weapon.armor_pen, normalized: normalize(weapon.armor_pen, AVGweaponData.find(d => d.type === weaponType && d.attr === 'armor_pen').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'armor_pen').min), avg_normed:avg_normalize(weapon.armor_pen, AVGweaponData.find(d => d.type === weaponType && d.attr === 'armor_pen').avg) },
        { attribute: 'Fire Rate(RPM)', value: weapon.fire_rate, normalized: normalize(weapon.fire_rate, AVGweaponData.find(d => d.type === weaponType && d.attr === 'fire_rate').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'fire_rate').min), avg_normed:avg_normalize(weapon.fire_rate, AVGweaponData.find(d => d.type === weaponType && d.attr === 'fire_rate').avg) },
        { attribute: 'Accuracy Range(Static)', value: weapon.acc_range_stand, normalized: normalize(weapon.acc_range_stand, AVGweaponData.find(d => d.type === weaponType && d.attr === 'acc_range_stand').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'acc_range_stand').min), avg_normed:avg_normalize(weapon.acc_range_stand, AVGweaponData.find(d => d.type === weaponType && d.attr === 'acc_range_stand').avg) },
        { attribute: 'Mobility', value: weapon.mobility, normalized: normalize(weapon.mobility, AVGweaponData.find(d => d.type === weaponType && d.attr === 'mobility').max, AVGweaponData.find(d => d.type === weaponType && d.attr === 'mobility').min), avg_normed:avg_normalize(weapon.mobility, AVGweaponData.find(d => d.type === weaponType && d.attr === 'mobility').avg) }
    ];
    data.reverse();
    let weapon_type;
    if (weapon.type === 'p') {
        weapon_type = "Pistols";
    } else if (weapon.type === 's') {
        weapon_type = "SMGs";
    } else if (weapon.type === 'r') {
        weapon_type = "Rifles";
    } else {
        weapon_type = "Heavies";
    }


    // Adjusted margins to give more space to the chart
    const margin = { top: 20, right: 100, bottom: 50, left: 200 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(`#${chartId}`).html("").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear()
        .range([0, width])
        .domain([0, d3.max(data, d => d.avg_normed)]);

    const y = d3.scaleBand()
        .range([height, 0])
        .padding(0.1)
        .domain(data.map(d => d.attribute));

    svg.append("g")
        .selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("width", d => x(d.avg_normed))
        .attr("y", d => y(d.attribute))
        .attr("height", y.bandwidth())
        .attr("fill", d => {
            if (d.attribute === 'Price') {
                return d.avg_normed > 1 ? "rgba(200, 0, 0, 0.6)" : d.avg_normed < 1 ? "rgba(0, 120, 0, 0.6)" : "rgba(255, 165, 0, 0.6)";
            } else {
                return d.avg_normed > 1 ? "rgba(0, 120, 0, 0.6)" : d.avg_normed < 1 ? "rgba(200, 0, 0, 0.6)" : "rgba(255, 165, 0, 0.6)";
            }
        });

    //svg.append("g")
        //.attr("transform", "translate(0," + height + ")")
        //.call(d3.axisBottom(x));
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
      .selectAll(".domain, .tick line, .tick text")
        .remove();

    svg.append("g")
        .call(d3.axisLeft(y));

    // Style the y-axis attribute text to be bold
    svg.selectAll(".tick text")
        .style("font-style", "italic")
        .style("font-size", "12px")  // Adjust the font size as needed
        .style("font-weight", "bold");

    svg.selectAll(".bar-label")
        .data(data)
      .enter().append("text")
        .attr("class", "bar-label")
        .attr("x", d => x(d.avg_normed) + 3)
        .attr("y", d => y(d.attribute) + y.bandwidth() / 2)
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(d => d.value);

    // Add vertical line for average
    svg.selectAll(".avg-line")
        .data(data)
        .enter().append("line")
        .attr("class", "avg-line")
        .attr("x1", d => x(1))
        .attr("x2", d => x(1))
        .attr("y1", d => y(d.attribute))
        .attr("y2", d => y(d.attribute) + y.bandwidth())
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "4 2");
    // Add average label below the vertical line
    svg.selectAll(".avg-label")
        .data(data)
        .enter().append("text")
        .attr("class", "avg-label")
        .attr("x", d => x(1))
        .attr("y", height+10)  // Adjust this value to position the text below the line
        .attr("text-anchor", "middle")
        .attr("fill", "blue")
        .style("font-size", "13px")
        .text("Average in " + weapon_type);

    // Add text below the bar chart
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 30) // Adjust the y position as needed
        .attr("text-anchor", "middle")
        .text("Green: better; Red: worse; Orange: equal (than average)")
        .style("font-size", "13px")
        .style("font-style", "italic")
        .style("font-weight", "bold");
}


// Function to go back to weapon grid
function goBack(section) {
    document.getElementById(`${section}ChartContainer`).style.display = 'none';
}

function createComparison(weapon1ID, weapon2ID, comparebuttonID){
    document.addEventListener('DOMContentLoaded', () => {
    const weapon1Select = document.getElementById(weapon1ID);
    const weapon2Select = document.getElementById(weapon2ID);
    const weapon1Image = document.getElementById('weapon1Image');
    const weapon2Image = document.getElementById('weapon2Image');
    const compareButton = document.getElementById('compareButton');
    const comparisonSection = document.getElementById('comparisonChartContainer');

    // Populate the dropdowns with weapon options
    weaponData.forEach(weapon => {
        const option1 = document.createElement('option');
        option1.value = weapon.id;
        option1.textContent = weapon.name;
        weapon1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = weapon.id;
        option2.textContent = weapon.name;
        weapon2Select.appendChild(option2);
    });

    // Add event listener for the compare button
    compareButton.addEventListener('click', () => {
        const weapon1Id = parseInt(weapon1Select.value);
        const weapon2Id = parseInt(weapon2Select.value);

        if (isNaN(weapon1Id) || isNaN(weapon2Id)) {
            alert('Please select two weapons to compare');
            return;
        }

        const weapon1 = weaponData.find(w => w.id === weapon1Id);
        const weapon2 = weaponData.find(w => w.id === weapon2Id);

        // Update weapon images
        weapon1Image.src = weapon1.image;
        weapon2Image.src = weapon2.image;

        // Show the comparison section
        comparisonSection.style.display = 'flex';

        // Create the comparison chart
        createCompareChart(weapon1, weapon2);
    });
});
}

function createCompareChart(weapon1,weapon2){

    const chartContainer = document.getElementById('comparison-chart');
    chartContainer.innerHTML = '';  // Clear any existing chart
    const margin = { top: 20, right: 50, bottom: 30, left: 200 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const avg_normalize = (value, avg) => value/avg;
    const data = [
        { name: 'Price', w1_value: weapon1.price, w2_value: weapon2.price, w1_normed: -avg_normalize(weapon1.price, 1654.84), w2_normed: -avg_normalize(weapon2.price, 1654.84)},
        { name: 'Kill Reward', w1_value: weapon1.kill_reward, w2_value: weapon2.kill_reward, w1_normed: avg_normalize(weapon1.kill_reward, 419.35), w2_normed: avg_normalize(weapon2.kill_reward, 419.35)},
        { name: 'Damage', w1_value: weapon1.damage, w2_value: weapon2.damage, w1_normed: avg_normalize(weapon1.damage, 36.52), w2_normed: avg_normalize(weapon2.damage, 36.52)},
        { name: 'Armor Penetration(in %)', w1_value: weapon1.armor_pen, w2_value: weapon2.armor_pen, w1_normed: avg_normalize(weapon1.armor_pen, 71.29), w2_normed: avg_normalize(weapon2.armor_pen, 71.29)},
        { name: 'Fire Rate(RPM)', w1_value: weapon1.fire_rate, w2_value: weapon2.fire_rate, w1_normed: avg_normalize(weapon1.fire_rate, 502.68), w2_normed: avg_normalize(weapon2.fire_rate, 502.68)},
        { name: 'Accuracy Range(Static)', w1_value: weapon1.acc_range_stand, w2_value: weapon2.acc_range_stand, w1_normed: avg_normalize(weapon1.acc_range_stand, 18.46), w2_normed: avg_normalize(weapon2.acc_range_stand, 18.46)},
        { name: 'Mobility', w1_value: weapon1.mobility, w2_value: weapon2.mobility, w1_normed: avg_normalize(weapon1.mobility, 224.52), w2_normed: avg_normalize(weapon2.mobility, 224.52)}
    ];
    //data.reverse();


    const svg = d3.select(chartContainer).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    const x = d3.scaleLinear()
        //.domain([0, d3.max(data, d => Math.max(d.w1_normed, d.w2_normed))])
        .domain([0, d3.max(data, d => Math.abs(d.w1_normed - d.w2_normed))])
        .nice()
        .range([0, width / 2]);

    svg.append('g')
        .selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('x', -10)
        .attr('y', d => y(d.name) + y.bandwidth() / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .style("font-style", "italic")
        .style("font-size", "12px")  // Adjust the font size as needed
        .style("font-weight", "bold")
        .text(d => d.name);

    const barGroup = svg.append('g')
        .attr('transform', `translate(${width / 2},0)`);

    // Add bars for weapon1 and weapon2 based on the difference
    barGroup.append('g')
        .selectAll('.bar.left')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar left') // Class for styling
        .attr('x', d => d.w1_normed > d.w2_normed ? -x(Math.abs(d.w1_normed - d.w2_normed)) : 0) // Position left bars to the left of the center axis
        .attr('y', d => y(d.name)) // Align bars with y-axis
        .attr('width', d => d.w1_normed > d.w2_normed ? x(Math.abs(d.w1_normed - d.w2_normed)) : 0) // Set width to the absolute difference
        .attr('height', y.bandwidth()) // Set bar height
        .attr('fill', 'rgba(0, 120, 0, 0.6)'); 

    barGroup.append('g')
        .selectAll('.bar.right')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar right') // Class for styling
        .attr('x', d => d.w2_normed > d.w1_normed ? 0 : -x(Math.abs(d.w2_normed - d.w1_normed))) // Position right bars to the right of the center axis
        .attr('y', d => y(d.name)) // Align bars with y-axis
        .attr('width', d => d.w2_normed > d.w1_normed ? x(Math.abs(d.w2_normed - d.w1_normed)) : 0) // Set width to the absolute difference
        .attr('height', y.bandwidth()) // Set bar height
        .attr('fill', 'rgba(0, 120, 0, 0.6)'); 

    svg.append('g')
        .attr('transform', `translate(${width / 2},0)`)
        .call(d3.axisLeft(y).tickSize(0).tickFormat(''))
        .select('.domain').remove();

    barGroup.append('line')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', height)
        .attr('stroke', '#000');

    // Add value labels for weapon1 (left side)
    svg.append('g')
        .selectAll('.value.left')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'value left') // Class for styling
        .attr('x', width / 2 - 40) // Position text slightly to the right of the left margin
        .attr('y', d => y(d.name) + y.bandwidth() / 2) // Center text vertically within the band
        .attr('dy', '0.35em') // Adjust vertical alignment
        .attr('text-anchor', 'start') // Align text to the start (left)
        .style('font-size', '10px') // Set the font size to make it smaller
        .text(d => d.w1_value); // Set text to the weapon1 values

    // Add value labels for weapon2 (right side)
    svg.append('g')
        .selectAll('.value.right')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'value right') // Class for styling
        .attr('x', width / 2 + 15) // Position text slightly to the right of the center axis
        .attr('y', d => y(d.name) + y.bandwidth() / 2) // Center text vertically within the band
        .attr('dy', '0.35em') // Adjust vertical alignment
        .attr('text-anchor', 'start') // Align text to the start (left)
        .style('font-size', '10px') // Set the font size to make it smaller
        .text(d => d.w2_value); // Set text to the weapon2 values

    // Add text below the bar chart
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + 15) // Adjust the y position as needed
        .attr("text-anchor", "middle")
        .text("Green bars denote better performance")
        .style("font-size", "13px")
        .style("font-style", "italic")
        .style("font-weight", "bold");
}
    

// Create grids for each section
createWeaponGrid('pistolsGrid', weaponData.filter(w => w.id >= 1 && w.id <= 9), 'pistolsChartContainer', 'pistolsSelectedImage', 'pistolsChart');
createWeaponGrid('SMGsGrid', weaponData.filter(w => w.id >= 10 && w.id <= 16), 'SMGsChartContainer', 'SMGsSelectedImage', 'SMGsChart');
createWeaponGrid('RiflesGrid', weaponData.filter(w => w.id >= 17 && w.id <= 25), 'RiflesChartContainer', 'RiflesSelectedImage', 'RiflesChart');
createWeaponGrid('HeaviesGrid', weaponData.filter(w => w.id >= 26 && w.id <= 31), 'HeaviesChartContainer', 'HeaviesSelectedImage', 'HeaviesChart');

createComparison('weapon1','weapon2','compareButton');