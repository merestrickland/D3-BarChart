let thisMonthsSteps = [6032, 2597, 4880, 935, 3631, 5297, 19478, 5295, 9433, 4212, 9197, 3010, 3672, 10999, 4470, 4170, 8292, 3249];

const w = 900
const h = 1000

let svg = d3.select("#container")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .attr("class", "svg")

  svg.selectAll("rect")
    .data(thisMonthsSteps)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => h - d/30)
    .attr("width", 25)
    .attr("height", (d) => d/15)
    .attr("fill", (d) =>{
      return d > 10000 ? "green" : 
              d > 9000 ? "orange" : "navy"
    })
    .append("title")
    .text((d) => `${d} steps`)