// set the dimensions and margins of the graph
var margin = {top: 50, right: 90, bottom: 60, left: 40},
  width = 520 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#heatmap")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("heatmap128-1.csv", function(data) {

  // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
  var myGroups = d3.map(data, function(d){return d.group;}).keys()
  var myVars = d3.map(data, function(d){return d.variable;}).keys()

  // Build X scales and axis:
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(myGroups)
    .padding(0.05);
  svg.append("g")
  .style("font-size", 15)
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).tickSize(0).tickValues(x.domain().filter(function(d, i) { return (i % 16 === 0 || i % 127 === 0); })))
  .select(".domain").remove();


  // Build Y scales and axis:
  var y = d3.scaleBand()
    .range([ height, 0 ])
    .domain(myVars)
    .padding(0.05);
  svg.append("g")
  .style("font-size", 15)
  .call(d3.axisLeft(y).tickSize(0).tickValues(y.domain().filter(function(d, i) { return (i % 16 === 0 || i % 127 === 0); })))
  .select(".domain").remove();

  // Build color scale
var myColor = d3.scaleLog()
.range(["white", "#69b3a2", "#104983"])
.domain([1, 1048576, 337163664])
.interpolate(d3.interpolateRgb);

  var tooltip = d3.select("body")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("position", "absolute")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }

  var heatmap = document.getElementById("heatmap");
  var heatmapRect = heatmap.getBoundingClientRect();
  var offsetX = heatmapRect.left + window.scrollX;
  var offsetY = heatmapRect.top + window.scrollY;
  
  var mousemove = function(d) {
    tooltip
        .html("The transfer size for <br>("+d.variable+", "+d.group+") is "+Math.floor(d.value/1048576)+" MB")
        .style("left", (d3.event.pageX + 10) + "px")
        .style("top", (d3.event.pageY + 10) + "px");
};


  var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }

  // Define the handleClick function
var handleClick = function(d) {
  highlightLink(parseInt(d.group), parseInt(d.variable));
  console.log("Clicked");
}

// add event listener to document object to detect click outside of heatmap
document.addEventListener('click', function(event) {
  if (!heatmap.contains(event.target)) {
    resetGraph();
  }
});

  // add the squares
  svg.selectAll()
    .data(data, function(d) {return d.group+':'+d.variable;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.group) })
      .attr("y", function(d) { return y(d.variable) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.value)} )
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
    .on("click", handleClick) // Add the click event listener here


var legendWidth = 20;
var legendHeight = height;
var legendY = height - legendHeight;

var legend = svg.append("g")
  .attr("class", "legend")
  .attr("transform", "translate(" + (width + 10) + "," + legendY + ")");

// create a linear gradient for the legend color scale
var defs = legend.append("defs");
var linearGradient = defs.append("linearGradient")
  .attr("id", "linear-gradient")
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "0%")
  .attr("y2", "100%");

linearGradient.append("stop")
  .attr("offset", "0%")
  .attr("stop-color", myColor.range()[2]);

linearGradient.append("stop")
  .attr("offset", "85.25%")
  .attr("stop-color", myColor.range()[1]);

linearGradient.append("stop")
  .attr("offset", "100%")
  .attr("stop-color", myColor.range()[0]);

// append the gradient color to the legend
legend.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", legendWidth)
  .attr("height", legendHeight)
  .style("fill", "url(#linear-gradient)");

// create tick marks for the legend
var legendScale = d3.scaleLog()
  .range([legendHeight, 0])
  .domain([524288, 337163664]);

var legendAxis = d3.axisRight(legendScale)
  .tickValues([1048576, 16777216, 134217728, 320*1048576])
  .tickFormat(function(d) { return Math.floor(d/1048576) + " MB"; });

legend.append("g")
  .attr("class", "legend-axis")
  .attr("transform", "translate(" + legendWidth + ",0)")
  .style("font-size", "12px")
  .call(legendAxis);

})