const weaponData = [
    { id: 1, name: 'USP-S', price: 200, kill_reward: 300, damage: 35, armor_pen: 50.5, fire_rate: 352.94, acc_range_stand: 23.81, mobility: 240, image: 'images/weapons/pistols/USP-S.png' },
    { id: 2, name: 'P2000', price: 200, kill_reward: 300, damage: 35, armor_pen: 50.5, fire_rate: 352.94, acc_range_stand: 22.09, mobility: 240, image: 'images/weapons/pistols/P2000.png' },
    { id: 3, name: 'Glock-18', price: 200, kill_reward: 300, damage: 30, armor_pen: 47, fire_rate: 400, acc_range_stand: 20.05, mobility: 240, image: 'images/weapons/pistols/Glock-18.png' },
    { id: 4, name: 'P250', price: 300, kill_reward: 300, damage: 38, armor_pen: 64, fire_rate: 400, acc_range_stand: 13.73, mobility: 240, image: 'images/weapons/pistols/P250.png' },
    { id: 5, name: 'Five-SeveN', price: 500, kill_reward: 300, damage: 32, armor_pen: 91.15, fire_rate: 400, acc_range_stand: 13.73, mobility: 240, image: 'images/weapons/pistols/Five-SeveN.png' },
    { id: 6, name: 'CZ75-Auto', price: 500, kill_reward: 300, damage: 31, armor_pen: 77.65, fire_rate: 600, acc_range_stand: 11.35, mobility: 240, image: 'images/weapons/pistols/CZ75-Auto.png' },
    { id: 7, name: 'Tec-9', price: 500, kill_reward: 300, damage: 33, armor_pen: 90.60, fire_rate: 500, acc_range_stand: 22.09, mobility: 240, image: 'images/weapons/pistols/Tec-9.png' },
    { id: 8, name: 'Dual Berettas', price: 300, kill_reward: 300, damage: 38, armor_pen: 57.50, fire_rate: 500, acc_range_stand: 16.93, mobility: 240, image: 'images/weapons/pistols/Dual_Berettas.png' },
    { id: 9, name: 'Desert Eagle', price: 700, kill_reward: 300, damage: 53, armor_pen: 93.2, fire_rate: 266.67, acc_range_stand: 24.58, mobility: 230, image: 'images/weapons/pistols/Desert_Eagle.png' },

    { id: 10, name: 'MAC-10', price: 1050, kill_reward: 600, damage: 29, armor_pen: 57.50, fire_rate: 800, acc_range_stand: 10.96, mobility: 240, image: 'images/weapons/smgs/MAC-10.png' },
    { id: 11, name: 'MP5-SD', price: 1500, kill_reward: 600, damage: 27, armor_pen: 62.50, fire_rate: 750, acc_range_stand: 14.36, mobility: 235, image: 'images/weapons/smgs/MP5-SD.png' },
    { id: 12, name: 'MP7', price: 1500, kill_reward: 600, damage: 29, armor_pen: 62.50, fire_rate: 750, acc_range_stand: 14.38, mobility: 220, image: 'images/weapons/smgs/MP7.png' },
    { id: 13, name: 'MP9', price: 1250, kill_reward: 600, damage: 26, armor_pen: 60.00, fire_rate: 857.14, acc_range_stand: 15.88, mobility: 240, image: 'images/weapons/smgs/MP9.png' },
    { id: 14, name: 'P90', price: 2350, kill_reward: 300, damage: 26, armor_pen: 69.00, fire_rate: 857.14, acc_range_stand: 10.40, mobility: 230, image: 'images/weapons/smgs/P90.png' },
    { id: 15, name: 'PP-Bizon', price: 1400, kill_reward: 600, damage: 27, armor_pen: 63.00, fire_rate: 750, acc_range_stand: 10.16, mobility: 240, image: 'images/weapons/smgs/PP-Bizon.png' },
    { id: 16, name: 'UMP-45', price: 1200, kill_reward: 600, damage: 35, armor_pen: 65.00, fire_rate: 666.67, acc_range_stand: 10.56, mobility: 230, image: 'images/weapons/smgs/UMP-45.png' },

    { id: 17, name: 'AK-47', price: 2700, kill_reward: 300, damage: 36, armor_pen: 77.50, fire_rate: 600, acc_range_stand: 21.74, mobility: 215, image: 'images/weapons/rifles/AK-47.png' },
    { id: 18, name: 'M4A1-S', price: 2900, kill_reward: 300, damage: 38, armor_pen: 70.00, fire_rate: 600, acc_range_stand: 28.22, mobility: 225, image: 'images/weapons/rifles/M4A1-S.png' },
    { id: 19, name: 'M4A4', price: 3100, kill_reward: 300, damage: 38, armor_pen: 70.00, fire_rate: 666.67, acc_range_stand: 27.71, mobility: 225, image: 'images/weapons/rifles/M4A4.png' },
    { id: 20, name: 'Galil_AR', price: 1800, kill_reward: 300, damage: 30, armor_pen: 77.50, fire_rate: 666.67, acc_range_stand: 16.26, mobility: 215, image: 'images/weapons/rifles/Galil_AR.png' },
    { id: 21, name: 'FAMAS', price: 2050, kill_reward: 300, damage: 30, armor_pen: 70.00, fire_rate: 666.67, acc_range_stand: 14.58, mobility: 220, image: 'images/weapons/rifles/FAMAS.png' },
    { id: 22, name: 'SG 553', price: 3000, kill_reward: 300, damage: 30, armor_pen: 100.00, fire_rate: 545.45, acc_range_stand: 23.78, mobility: 210, image: 'images/weapons/rifles/SG_553.png' },
    { id: 23, name: 'AUG', price: 3300, kill_reward: 300, damage: 28, armor_pen: 90.00, fire_rate: 600, acc_range_stand: 28.22, mobility: 220, image: 'images/weapons/rifles/AUG.png' },
    { id: 24, name: 'SSG 08', price: 1700, kill_reward: 300, damage: 88, armor_pen: 85.00, fire_rate: 48, acc_range_stand: 47.18, mobility: 230, image: 'images/weapons/rifles/SSG_08.png' },
    { id: 25, name: 'AWP', price: 4750, kill_reward: 100, damage: 115, armor_pen: 97.50, fire_rate: 41.24, acc_range_stand: 69.27, mobility: 200, image: 'images/weapons/rifles/AWP.png' },

    { id: 26, name: 'MAG-7', price: 1300, kill_reward: 900, damage: 30, armor_pen: 75.00, fire_rate: 70.59, acc_range_stand: 3.24, mobility: 225, image: 'images/weapons/heavies/MAG-7.png' },
    { id: 27, name: 'Nova', price: 1050, kill_reward: 900, damage: 26, armor_pen: 50.00, fire_rate: 68.18, acc_range_stand: 3.24, mobility: 220, image: 'images/weapons/heavies/Nova.png' },
    { id: 28, name: 'Sawed-Off', price: 1100, kill_reward: 900, damage: 32, armor_pen: 55.00, fire_rate: 70.59, acc_range_stand: 2.21, mobility: 210, image: 'images/weapons/heavies/Sawed-Off.png' },
    { id: 29, name: 'XM1014', price: 2000, kill_reward: 600, damage: 20, armor_pen: 80.00, fire_rate: 171.43, acc_range_stand: 3.39, mobility: 215, image: 'images/weapons/heavies/XM1014.png' },
    { id: 30, name: 'Negev', price: 1700, kill_reward: 300, damage: 35, armor_pen: 71.00, fire_rate: 800, acc_range_stand: 12.52, mobility: 150, image: 'images/weapons/heavies/Negev.png' },
    { id: 31, name: 'M249', price: 5200, kill_reward: 300, damage: 32, armor_pen: 80.00, fire_rate: 750, acc_range_stand: 15.71, mobility: 195, image: 'images/weapons/heavies/M249.png' }
];

// Function to create weapon grid
function createWeaponGrid(containerId, weapons, chartContainerId, selectedImageId, chartId) {
    const grid = document.getElementById(containerId);
    weapons.forEach(weapon => {
        const img = document.createElement('img');
        img.src = weapon.image;
        img.alt = weapon.name;
        img.onclick = () => showChart(weapon, chartContainerId, selectedImageId, chartId);
        grid.appendChild(img);
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
    const data = [
        { attribute: 'Price', value: weapon.price },
        { attribute: 'Kill Reward', value: weapon.kill_reward },
        { attribute: 'Damage', value: weapon.damage },
        { attribute: 'Armor Penetration(in %)', value: weapon.armor_pen },
        { attribute: 'Fire Rate(RPM)', value: weapon.fire_rate },
        { attribute: 'Accuracy Range(Static)', value: weapon.acc_range_stand },
        { attribute: 'Mobility', value: weapon.mobility }
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 300 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3.select(`#${chartId}`).html("").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1)
        .domain(data.map(d => d.attribute));

    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, d => d.value)]);

    svg.append("g")
        .selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.attribute))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.value))
        .attr("height", d => height - y(d.value));

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));

    svg.selectAll(".bar-label")
        .data(data)
      .enter().append("text")
        .attr("class", "bar-label")
        .attr("x", d => x(d.attribute) + x.bandwidth() / 2)
        .attr("y", d => y(d.value) - 5)
        .attr("text-anchor", "middle")
        .text(d => d.value);
}

// Function to go back to weapon grid
function goBack(section) {
    document.getElementById(`${section}ChartContainer`).style.display = 'none';
}

// Create grids for each section
createWeaponGrid('pistolsGrid', weaponData.filter(w => w.id >= 1 && w.id <= 9), 'pistolsChartContainer', 'pistolsSelectedImage', 'pistolsChart');
createWeaponGrid('SMGsGrid', weaponData.filter(w => w.id >= 10 && w.id <= 16), 'SMGsChartContainer', 'SMGsSelectedImage', 'SMGsChart');
createWeaponGrid('RiflesGrid', weaponData.filter(w => w.id >= 17 && w.id <= 25), 'RiflesChartContainer', 'RiflesSelectedImage', 'RiflesChart');
createWeaponGrid('HeaviesGrid', weaponData.filter(w => w.id >= 26 && w.id <= 31), 'HeaviesChartContainer', 'HeaviesSelectedImage', 'HeaviesChart');