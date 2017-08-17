import React, { Component } from 'react';
import * as d3 from 'd3';
import '../RelationChart/style.scss'

export default class extends Component {
  render = () => <div ref={ref => this.rootDom = ref} className='chart_root'></div>
  
  componentDidMount () {
    const dom = this.rootDom;
    const w = dom.offsetWidth;
    const h = dom.offsetHeight;
    const cluster = d3.layout.cluster()
                      .size([360, 200])
                      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)
    const diagonal = d3.svg.diagonal.radial().projection(function(d) { 
      var r = d.y,
       angle = d.x / 180 * Math.PI

       return [ r, angle ]
    });
    const svg = d3.select(dom).append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("g")
                  .attr("transform", "translate(400, 300)");

    d3.json("mock.json", function(error, root) {
      const nodes = cluster.nodes(root);
      const links = cluster.links(nodes);
      const link = svg.selectAll(".link")
                      .data(links)
                      .enter()
                      .append("path")
                      .attr("class", "link")
                      .attr("d", diagonal);
  
      const node = svg.selectAll(".node")
                      .data(nodes)
                      .enter()
                      .append("g")
                      .attr("class", "node")
                      .attr("transform", function(d) { return `rotate(${d.x - 90}) translate(${d.y})` })
                      .on('click', (o) => console.log(o))
  
      node.append("circle").attr("r", 4.5);
      node.append("text")
          .attr("dx", function(d) { return d.children ? -8 : 8; })
          .attr("dy", 3)
          .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
          .text(function(d) { return d.name; });
    });
  }
}