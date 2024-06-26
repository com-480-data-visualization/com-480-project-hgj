class SpiderChart {
    constructor(domId, average, playerData) {
        this.domId = domId;
        this.average = average;
        this.playerData = playerData;

        this.width = 200;
        this.height = 200;
        this.margin = { top: 70, right: 70, bottom: 50, left: 50 };
        this.radius = Math.min(this.width, this.height) / 2;
        this.color = d3.scaleOrdinal(d3.schemeCategory10);
        this.angleSlice = (Math.PI * 2) / this.average.length;
        this.levels = 5;

        this.initChart();
    }

    formatAxisLabel(axis, value) {
        let formattedValue = value;
        switch (axis) {
            case "Surviving":
                formattedValue = (value * 100).toFixed(0) + "%"; // e.g., 0.38 -> 38%
                break;
            case "Impact":
            case "Rating":
                formattedValue = (value * 2).toFixed(2); // e.g., 0.54 -> 1.08
                break;
            default:
                formattedValue = value.toFixed(2); // default format
                break;
        }
        return formattedValue;
    }

    initChart() {
        const svg = d3.select(`#${this.domId}`).append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", `translate(${this.width / 2 + this.margin.left}, ${this.height / 2 + this.margin.top})`);

        const axisGrid = svg.append("g").attr("class", "axisWrapper");

        axisGrid.selectAll(".levels")
            .data(d3.range(1, this.levels + 1).reverse())
            .enter()
            .append("circle")
            .attr("class", "gridCircle")
            .attr("r", d => this.radius / this.levels * d)
            .style("fill", "#CDCDCD")
            .style("stroke", "#CDCDCD")
            .style("fill-opacity", 0.1);

        const axis = axisGrid.selectAll(".axis")
            .data(this.average)
            .enter()
            .append("g")
            .attr("class", "axis");

        axis.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", (d, i) => this.radius * Math.cos(this.angleSlice * i - Math.PI / 2))
            .attr("y2", (d, i) => this.radius * Math.sin(this.angleSlice * i - Math.PI / 2))
            .attr("class", "line")
            .style("stroke", "white")
            .style("stroke-width", "2px");

        axis.append("text")
            .attr("class", "axisLabel")
            .attr("x", (d, i) => this.radius * 1.1 * Math.cos(this.angleSlice * i - Math.PI / 2))
            .attr("y", (d, i) => {
                const y = this.radius * 1.1 * Math.sin(this.angleSlice * i - Math.PI / 2);
                if(d.axis === "KPR"){
                    return y - 16
                }
                return y
            })
            
            .attr("dy", "0.35em")
            .style("font-size", "16px")
            .attr("text-anchor", (d) => {
                switch (d.axis) {
                    case "Surviving":
                        return "start";
                        break;
                    case "ADR":
                        return "start";
                        break;
                    case "Impact":
                        return "end";
                        break;
                    case "Rating":
                        return "end";
                        break;
                    default:
                        return "middle";
                        break;
                }
            })
            .text(d => d.axis)
            .style("fill", "orange");

        axis.append("text")
            .attr("class", "axisValue")
            .attr("x", (d, i) => this.radius * 1.1 * Math.cos(this.angleSlice * i - Math.PI / 2))
            .attr("y", (d, i) => this.radius * 1.1 * Math.sin(this.angleSlice * i - Math.PI / 2) + 16) // Positioning below the label
            .attr("y", (d, i) => {
                const y = this.radius * 1.1 * Math.sin(this.angleSlice * i - Math.PI / 2) + 16; // Positioning below the label
                if(d.axis === "KPR"){
                    return y - 16
                }
                return y
            })
            .attr("dy", "0.35em")
            .style("font-size", "14px")
            .style("fill", "orange")
            .attr("text-anchor",(d) => {
                switch (d.axis) {
                    case "Surviving":
                        return "start";
                        break;
                    case "ADR":
                        return "start";
                        break;
                    case "Impact":
                        return "end";
                        break;
                    case "Rating":
                        return "end";
                        break;
                    default:
                        return "middle";
                        break;
                }
            })
            .text((d, i) => this.formatAxisLabel(d.axis, this.playerData[i].value));

        this.svg = svg;
        this.axis = axis;
        this.radarLine = d3.lineRadial()
            .radius(d => this.radius * d.value)
            .angle((d, i) => i * this.angleSlice)
            .curve(d3.curveLinearClosed);

        this.drawRadarAreas([this.average, this.playerData]);
    }

    drawRadarAreas(data) {
        let radarAreas = this.svg.selectAll(".radarArea")
            .data(data);

        radarAreas.enter()
            .append("path")
            .attr("class", "radarArea")
            .merge(radarAreas)  // Merge the enter and update selections
            .attr("d", this.radarLine)
            .style("fill", (d, i) => this.color(i))
            .style("fill-opacity", 0.2)
            .style("stroke", (d, i) => this.color(i))
            .style("stroke-width", "3px");

        radarAreas.exit().remove();  // Remove any old data elements

        this.radarAreas = radarAreas;
    }

    updateChart(playerData) {
        const data = [this.average, playerData];

        this.radarAreas = this.svg.selectAll(".radarArea")
            .data(data);

        this.radarAreas.enter()
            .append("path")
            .attr("class", "radarArea")
            .merge(this.radarAreas)
            .transition()
            .duration(1000)
            .attr("d", this.radarLine)
            .style("fill", (d, i) => this.color(i))
            .style("stroke", (d, i) => this.color(i));

        this.radarAreas.exit().remove();

        // Define the key function
        function keyFunction(d, i) {
            return d.axis; // Assuming 'axis' is unique for each element
        }

        // Update axis values with a key function
        this.axis.selectAll(".axisValue")
            .data(playerData, keyFunction) // Re-bind playerData with a key function
            .transition()
            .duration(1000)
            .text((d, i) => {
                return this.formatAxisLabel(this.average[i].axis, d.value); // Access d.value correctly
            })
            .style("fill", "orange");

    }
}
