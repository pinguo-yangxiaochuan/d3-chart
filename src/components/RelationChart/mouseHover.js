import * as d3 from 'd3';

export default function (attr, val) {
  this
  .on('mouseover', function () { // TODO 此处不能用箭头函数
    d3.select(this)
      .transition()
      .duration(300)
      .attr(attr, val.darker(2)); 
  })
  .on('mouseout', function () { 
    d3.select(this)
      .transition()
      .duration(300)
      .attr(attr, val); 
  })
}