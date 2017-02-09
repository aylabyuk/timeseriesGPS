import * as d3 from "d3";
import math from 'mathjs';

import LeastSquares from './least-squares'

export default class MyCustomChart {
    constructor(el, props) {
        this.el = el;
        this.props = props;

    }

    getColor() {
        return d3.scaleOrdinal(d3.schemeCategory20c);
    }

    create(data) {
    
        let styles = this.props.styles

        let svg = d3.select(this.el).append('svg')
            .classed(styles.chartSvg, true)
            .attr("width", 600)
            .attr("height", 200),
            width = +svg.attr("width"),
            height = +svg.attr("height");

        let margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }

        let zoom = d3.zoom()
            .scaleExtent([1, Infinity])
            .translateExtent([
                [-100, -100],
                [width + 90, height + 100]
            ])
            .on("zoom", zoomed);

        // get the mean
        let focusData = [], mean
        data.map((d) => {
            focusData.push(d.yVal)
        })
        mean = math.mean(focusData)

        

        let x = d3.scaleLinear()
            .domain([d3.min(data, function (d) {
                return d.date - 1;
            }), d3.max(data, function (d) {
                return d.date + 1;
            })])
            .range([margin.left, width - margin.right]).nice();


        let ypercent = (d3.max(data, function (d) { return d.yVal; }) - mean) * 0.05

        let y = d3.scaleLinear()
            .domain([d3.max(data, function (d) {
                return d.yVal;
            }) - mean + ypercent, d3.min(data, function (d) {
                return d.yVal;
            }) - mean - ypercent])
            .range([margin.top, height - margin.bottom]).nice();

        let xAxis = d3.axisBottom(x)
            // .ticks((width + 2) / (height + 2) * 10)
            .tickSize(height)
            .tickPadding(-10)
            .tickFormat(d3.format(" "));

        let yAxis = d3.axisRight(y)
            .ticks(4)
            .tickSize(width)
            .tickPadding(8 - width);

        let view = svg.append("rect")
            .attr("class", styles.view)
            .attr("x", 0.5)
            .attr("y", 0.5)
            .attr("width", width - 1)
            .attr("height", height - 1);

        let gX = svg.append("g")
            .attr("class", styles.axis + " axis--x")
            .call(xAxis);

        let gY = svg.append("g")
            .attr("class", styles.axis + " axis--y")
            .call(yAxis);

        d3.select("." + data[0].name)
            .on("click", resetted);

        svg.call(zoom);

        //draw the dots
        let dots = svg.append("g")
            .classed('dots', true)
            .selectAll(styles.dot)
            .data(data)
            .enter().append("circle")
            .classed(styles.dot, true)
            .attr("r", 3)
            .attr("cx", function (d) {
                return x(d.date);
            })
            .attr("cy", function (d) {
                return y(d.yVal - mean);
            })
            .style("opacity", 0.2)
            .attr("fill", "white")
            .attr("stroke-width", 2)
            .attr("stroke", "blue");

        //  let myY = []
        //  let myX = []
        //  let ret = {}
        //  data.map((d) => {
        //      myY.push(d.yVal)
        //      myX.push(d.date)
        //  })

        //  let lr = LeastSquares(myX, myY, true, ret)

        //  console.log(ret)

        //draw linear regression.

        // let myLine = svg.append("g").classed("lr", true).append("svg:line")
        //     .classed("lrLine", true)
        //     .attr("x1", x(min))
        //     .attr("y1", y((min * lr.slope) + lr.intercept))
        //     .attr("x2", x(max))
        //     .attr("y2", y((max * lr.slope) + lr.intercept))
        //     .style("stroke", "lightgreen")

        function zoomed() {
            view.attr("transform", d3.event.transform);
            svg.select(".dots")
                .attr("transform", d3.event.transform);
            svg.selectAll(".dots circle").attr("r", function () {
                return (3 / d3.event.transform.k);
            }).attr("stroke-width", function () {
                return (2 / d3.event.transform.k);
            });
            svg.select(".tooltip").attr("transform", d3.event.transform);
            svg.select(".lr").attr("transform", d3.event.transform)
                .select(".lrLine").attr("stroke-width", function () {
                    return (1 / d3.event.transform.k);
                });
            gX.call(xAxis.scale(d3.event.transform.rescaleX(x)));
            gY.call(yAxis.scale(d3.event.transform.rescaleY(y)));

        }

        function resetted() {
            svg.transition()
                .duration(750)
                .call(zoom.transform, d3.zoomIdentity);
        }
    }

    update(data) {

        d3.select(this.el).select('svg').remove();
        this.create(data);

    }

    unmount() {
        this.el.remove();
    }
}