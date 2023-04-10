// Define the links between the nodes
var links = [{ source: 0, target: 1, bw: 2000000, ring: 15 },
  { source: 0, target: 5, bw: 2000000, ring: 11 },
  { source: 0, target: 11, bw: 2000000, ring: 11 },
  { source: 0, target: 15, bw: 2000000, ring: 15 },
  { source: 1, target: 2, bw: 2000000, ring: 15 },
  { source: 1, target: 6, bw: 2000000, ring: 11 },
  { source: 1, target: 12, bw: 2000000, ring: 11 },
  { source: 2, target: 3, bw: 2000000, ring: 15 },
  { source: 2, target: 7, bw: 2000000, ring: 11 },
  { source: 2, target: 13, bw: 2000000, ring: 11 },
  { source: 3, target: 4, bw: 2000000, ring: 15 },
  { source: 3, target: 8, bw: 2000000, ring: 11 },
  { source: 3, target: 14, bw: 2000000, ring: 11 },
  { source: 4, target: 5, bw: 2000000, ring: 15 },
  { source: 4, target: 9, bw: 2000000, ring: 11 },
  { source: 4, target: 15, bw: 2000000, ring: 11 },
  { source: 5, target: 6, bw: 2000000, ring: 15 },
  { source: 5, target: 10, bw: 2000000, ring: 11 },
  { source: 6, target: 7, bw: 2000000, ring: 15 },
  { source: 6, target: 11, bw: 2000000, ring: 11 },
  { source: 7, target: 8, bw: 2000000, ring: 15 },
  { source: 7, target: 12, bw: 2000000, ring: 11 },
  { source: 8, target: 9, bw: 2000000, ring: 15 },
  { source: 8, target: 13, bw: 2000000, ring: 11 },
  { source: 9, target: 10, bw: 2000000, ring: 15 },
  { source: 9, target: 14, bw: 2000000, ring: 11 },
  { source: 10, target: 11, bw: 2000000, ring: 15 },
  { source: 10, target: 15, bw: 2000000, ring: 11 },
  { source: 11, target: 12, bw: 2000000, ring: 15 },
  { source: 12, target: 13, bw: 2000000, ring: 15 },
  { source: 13, target: 14, bw: 2000000, ring: 15 },
  { source: 14, target: 15, bw: 2000000, ring: 15 }];

var fbBlue = d3.rgb("#3b5998"),
    fill = [fbBlue.brighter(2), fbBlue.brighter(), fbBlue, fbBlue.darker()];

// Compute the distinct nodes from the links
var nodes = {};
links.forEach(function (link) {
    link.source = nodes[link.source] || (nodes[link.source] = { id: link.source, ring: link.ring });
    link.target = nodes[link.target] || (nodes[link.target] = { id: link.target, ring: link.ring });
});

var margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var radius = Math.min(width, height) / 2- 50;
var rBig = Math.min(width, height) / 2- 70;
var rSmall = rBig*3/2;
var centerX = width / 2;
var centerY = height / 2;

var circleLayout = d3.forceSimulation()
    .force("center", d3.forceCenter(centerX, centerY))
    .force("x", d3.forceX().strength(0.3).x(function(d) { return centerX + radius * Math.cos(d.id * 2 * Math.PI / Object.keys(nodes).length); }))
    .force("y", d3.forceY().strength(0.3).y(function(d) { return centerY + radius * Math.sin(d.id * 2 * Math.PI / Object.keys(nodes).length); }));

// var circleLayout = d3.forceSimulation()
//     .force("center", d3.forceCenter(centerX, centerY))
//     .force("x", d3.forceX().strength(0.3).x(function(d) { return centerX + radius * Math.cos(d.id * 2 * Math.PI / Object.keys(nodes).length); }))
//     .force("y", d3.forceY().strength(0.3).y(function(d) { return centerY + radius * Math.sin(d.id * 2 * Math.PI / Object.keys(nodes).length); }));  

var force = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) { return d.id; }).links(links))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(200, 150));

// Set up the SVG canvas and the force layout
// append the svg object to the body of the page
var svg = d3.select("#graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("marker")
.attr("id", "arrowhead")
.attr("viewBox", "0 -5 10 10")
.attr("refX", 19)
.attr("refY", 0)
.attr("markerWidth", 12)
.attr("markerHeight", 12)
.attr("orient", "auto")
.append("path")
.attr("d", "M0,-5L10,0L0,5")
// .attr("d", "M-5,-10 L5,-10 Q 0,-5 -5,-10 Z")
// .attr("d", "M0,0 L5,5 L10,0 L5,-5Z")
// .attr("d", "M0,-5A5,5 0 1,1 0,5A5,5 0 1,1 0,-5") //circle
// .attr("d", "M0,-5L10,0L0,5") //normal
.attr("class","arrowHead");

svg.append("defs").append("marker")
.attr("id", "arrowtail")
.attr("viewBox", "0 -5 10 10")
.attr("refX", -9)
.attr("refY", 0)
.attr("markerWidth", 12)
.attr("markerHeight", 12)
.attr("orient", "auto")
.append("path")
.attr("d", "M10,-5L0,0L10,5")
.attr("class","arrowTail");



// svg.append("defs").append("marker")
//     .attr("id", "middle-arrow")
//     .attr("viewBox", "0 -5 10 10")
//     .attr("refX", 0)
//     .attr("refY", 0)
//     .attr("markerWidth", 6)
//     .attr("markerHeight", 6)
//     .attr("orient", "auto")
//     .append("path")
//     .attr("d", "M0,-5L10,0L0,5")
//     .style("fill", "grey");

// Draw the links
var link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke", function (d) {
        if (d.ring === 11) {
            return "#2CD3BC";
        } else if (d.ring === 15) {
            return "#692CD3";
        } else {
            return "grey";
        }
    })
    .style("stroke-opacity", function (d) {
        if (d.ring == 0) {
            return 0.1;
        }
        else {
            return 1;
        }
    })
    // .attr("marker-end", "url(#arrowhead)")
    .style("stroke-width", 1);

// Draw the nodes
var node = svg.selectAll(".node")
    .data(Object.values(nodes))
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 10)
    .style("fill", "#3b5998")
    .style("stroke", "#fff")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


// var force = d3.forceSimulation()
//     .force("link", d3.forceLink().id(function(d) { return d.id; }).links(links))
//     .force("charge", d3.forceManyBody().strength(-200))
//     .force("center", d3.forceCenter(width / 2, height / 2))
//     .force("y", d3.forceY(height / 2).strength(0.1))
//     .force("x", d3.forceX(width / 2).strength(0.1))
//     .force("collision", d3.forceCollide().radius(15))

// Add labels to the nodes
node.append("title")
    .text(function (d) { return d.id; });

// Run the simulation
// force.nodes(Object.values(nodes))
//     .on("tick", ticked);

circleLayout.nodes(Object.values(nodes))
    .on("tick", ticked);

// Define the tick function
function ticked() {
    link
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

    node
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
}

var drag = d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);


// Define the drag functions
function dragstarted(d) {
    if (!d3.event.active) circleLayout.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) circleLayout.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// Add this code to create the arrow marker
// svg.append("defs")
// .append("marker")
// .attr("id", "arrow")
// .attr("viewBox", "0 -5 10 10")
// .attr("refX", 5)
// .attr("refY", 0)
// .attr("markerWidth", 4)
// .attr("markerHeight", 4)
// .attr("orient", "auto")
// .append("path")
// .attr("d", "M0,-5L10,0L0,5")
// .attr("fill", "#black");



function highlightLink(source, target) {
    path = bfs(source, target);
    console.log(path);
    link
      .style("stroke-opacity", function (d) {
        const sourceIndex = path.indexOf(d.source.id);
        const targetIndex = path.indexOf(d.target.id);
        return sourceIndex !== -1 && targetIndex !== -1 && Math.abs(sourceIndex - targetIndex) === 1 ? 1 : 0.1;
      })
    //   .attr("marker-end", function (d) {
    //     const sourceIndex = path.indexOf(d.source.id);
    //     const targetIndex = path.indexOf(d.target.id);
    //     return sourceIndex !== -1 && targetIndex !== -1 && Math.abs(sourceIndex - targetIndex) === 1 ? "url(#arrowhead)" : "";
    //   });
    .attr("marker-end", function (d) {
        const sourceIndex = path.indexOf(d.source.id);
        const targetIndex = path.indexOf(d.target.id);
        if (sourceIndex !== -1 && targetIndex !== -1 && Math.abs(sourceIndex - targetIndex) === 1) {
          if (sourceIndex < targetIndex) {
            return "url(#arrowhead)";
          } else {
            return "";
          }
        } else {
          return "";
        }
      })
    .attr("marker-start", function(d) {
        const sourceIndex = path.indexOf(d.source.id);
        const targetIndex = path.indexOf(d.target.id);
        return sourceIndex !== -1 && targetIndex !== -1 && sourceIndex - targetIndex === 1 ? "url(#arrowtail)" : "";
      })
    node
    .style("opacity", function (d){
        return path.includes(d.id) ? 1 : 0.1;
    });
}
  
function resetGraph() {
    link
      .style("stroke-opacity", function (d) {
        return d.ring == 0 ? 0.1 : 1;
      })
      .attr("marker-end", "")
      .attr("marker-start", "");
  
    node.style("opacity", 1);
}

// function bfs(source, target) {
//   // Initialize visited and queue
//   const visited = {};
//   const queue = [];
//   path = [];

//   // Mark the source as visited and enqueue it
//   visited[source.id] = source.id;
//   queue.push(source);

//   // Loop until the queue is empty
//   while (queue.length > 0) {
//     // Dequeue a path from the queue
//     const node = queue.shift();
//     // path.push(node.id);
//     // const node = path[path.length - 1];

//     // If the target is found, return the path
//     if (node.id === target.id) {
//       return visited;
//     }

//     // Enqueue all the adjacent nodes that haven't been visited
//     const adjacentNodes = getAdjacentNodes(node);
//     for (let i = 0; i < adjacentNodes.length; i++) {
//       const adjacentNode = adjacentNodes[i];
//       if (!visited[adjacentNode.id]) {
//         visited[adjacentNode.id] = node.id;
//         // const newPath = path.concat([adjacentNode]);
//         queue.push(adjacentNode);
//       }
//     }
//   }

//   // If the target wasn't found, return an empty path
//   return [];
// }

// function getAdjacentNodes(node) {
//   const adjacentNodes = [];
//   for (let i = 0; i < links.length; i++) {
//     const link = links[i];
//     if (link.source.id === node.id) {
//       adjacentNodes.push(link.target);
//     } else if (link.target.id === node.id) {
//       adjacentNodes.push(link.source);
//     }
//   }
//   return adjacentNodes;
// }

function bfs(source, target) {
    // Initialize visited and queue
    const visited = {};
    const queue = [];
  
    // Mark the source as visited and enqueue it
    visited[source] = null;
    queue.push(source);
  
    // Loop until the queue is empty
    while (queue.length > 0) {
      // Dequeue a node from the queue
      const node = queue.shift();
  
      // If the target is found, build and return the path
      if (node === target) {
        console.log("AA");
        path = [node];
        console.log(path);
        let parent = visited[node];
        console.log(parent);
        while (parent !== null) {
          console.log(parent);
          path.push(parent);
          parent = visited[parent];
        }
        return path;
      }
  
      // Enqueue all the adjacent nodes that haven't been visited
      const adjacentNodes = getAdjacentNodes(node);
      for (let i = 0; i < adjacentNodes.length; i++) {
        const adjacentNode = adjacentNodes[i];
        if (!visited.hasOwnProperty(adjacentNode)) {
          visited[adjacentNode] = node;
          queue.push(adjacentNode);
        }
      }
    }
  
    // If the target wasn't found, return an empty path
    return [];
  }
  
  
  function getAdjacentNodes(node) {
    const adjacentNodes = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (link.source.id === node) {
        adjacentNodes.push(link.target.id);
      } else if (link.target.id === node) {
        adjacentNodes.push(link.source.id);
      }
    }
    return adjacentNodes;
  }
  
  