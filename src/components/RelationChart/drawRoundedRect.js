// 绘制圆角矩形
import * as d3 from 'd3';
import mouseHover from './mouseHover';

const initOption = {
  x: 0,
  y: 0,
  width: 100,
  height: 50,
  text: '圆角矩形'
};

export default (svg) => {
  return (option) => {
    const { x, y, width, height, text } = {...initOption, ...option};
    const style = {'cursor': 'pointer'};
    const fillColor = d3.rgb(40, 160, 190);
    const rect = svg.append('rect')
                    .attr('x', x - width / 2)
                    .attr('y', y - height / 2)
                    .attr('rx', 20)
                    .attr('ry', 20)
                    .attr('width', width)
                    .attr('height', height)
                    .attr('fill', fillColor)
                    .style(style);
                    
    svg.append('text')
       .attr('x', x)
       .attr('y', y)
       .attr('dx', 0)
       .attr('dy', 6)
       .text(text)
       .attr('fill', '#fff')
       .attr('font-size', '14px')
       .attr('text-anchor', 'middle')
       .style(style);
       mouseHover.call(rect, 'fill', fillColor);
       rect.on('click', () => {
         console.log(d3.event);
       })
  }
}