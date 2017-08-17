// 绘制带箭头线段
import * as d3 from 'd3';
import mouseHover from './mouseHover';

const initOption = {
  x1: 100,
  y1: 100,
  x2: 200,
  y2: 100
};

export default (svg) => {
  const fillColor = d3.rgb(100, 141, 138);

  // http://www.w3cplus.com/svg/svg-markers.html
  const arrow = svg.append('defs')
                   .append('marker')
                   .attr('id', 'chart_arrow')
                   .attr('markerUnits', 'strokeWidth') // 用于确定marker是否进行缩放
                   .attr('markerWidth', 4) // markerWidth和markerHeight属性定义了marker视窗的宽度和高度
                   .attr('markerHeight', 4)
                   .attr('viewBox', '0 0 4 4') // 给marker元素添加一个viewBox，作额外的缩放
                   .attr('refX', 0) // refX和refY，指的是图形元素和marker连接的位置坐标
                   .attr('refY', 2)
                   .attr('orient', 'auto') // 绘制方向 大多数时候这个值都是设置为auto的即表示自动确认方向
                   .append('path')
                   .attr('d', 'M0,0 L0,4 L4,2 z')
                   .style({'fill': fillColor});

  return (option) => {
    const { x1, y1, x2, y2 } = {...initOption, ...option};
    const line = svg.append('line')
                    .attr('x1', x1)
                    .attr('y1', y1)
                    .attr('x2', x2)
                    .attr('y2', y2)
                    .attr('stroke', fillColor)
                    .attr('stroke-width', 2)
                    .attr('marker-end', 'url(#chart_arrow)');

    mouseHover.call(line, 'stroke', fillColor);
  }
}