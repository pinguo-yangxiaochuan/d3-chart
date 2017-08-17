import React, { Component } from 'react';
import * as d3 from 'd3';
import './style.scss';
import drawRoundedRect from './drawRoundedRect';
import drawLineWithArrow from './drawLineWithArrow';

export default class extends Component {
  render = () => <div ref={ref => this.rootDom = ref} className='chart_root'></div>

  componentDidMount () {
    const dom = this.rootDom;
    const w = dom.offsetWidth;
    const h = dom.offsetHeight;
    const svg = d3.select(dom)
                  .append('svg')
                  .attr('width', dom.offsetWidth)
                  .attr('height', dom.offsetHeight);

    const drawRoundedRectBindSvg = drawRoundedRect(svg);
    const drawLineWithArrowBindSvg = drawLineWithArrow(svg);
    drawRoundedRectBindSvg({
      x: w / 2,
      y: h / 2,
    });
    // drawLineWithArrowBindSvg();
  }
}
