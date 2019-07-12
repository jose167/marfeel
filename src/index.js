import _ from 'lodash';
import './style.css';
import Data from './data.json';
import * as d3 from 'd3';

function toLowerCase(str){
  return str.toLowerCase();
}

function component() {
    const element = document.createElement('div');
   
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    console.log(Data);
  
    return element;
  }
  function test(){

    const element2 = document.createElement('p');
    //element2.classList.add('root');


    return element2;
  }
  
 document.body.appendChild(component());
 document.body.appendChild(test());
d3.selectAll("p")
  .append('text')
  .text(function(d) { return 'REVENUE'; });
 console.log(d3.selectAll('p').append('text').text(function(d) { return 'REVENUE'; }));
 /* 
 function createShape (){
    const element1 = document.createElement('div');
    element1.classList.add('my_dataviz');

    // set the dimensions and margins of the graph
    let width = 450;
     let   height = 450;
    let   margin = 40;
    
    // The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
    var radius = Math.min(width, height) / 3 - margin
    
    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 3 + "," + height / 3 + ")");
    
    // Create dummy data
    var data = {a: 60, b: 40}
    
    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(data)
      .range(['#4B6033',"#A5C771"])
    
    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data))
    
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(100)         // This is the size of the donut hole
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      //attr("stroke", "black")
      //.style("stroke-width", "2px")
      //.style("opacity", 0.7)
    svg.append("text")
      .attr("dy", "-1em")
      .style("text-anchor", "middle")
      .attr("class", "insideText")
      .text(function(d) { return 'REVENUE'; });
    
      svg.append("text")
      .attr("dy", "0.2em")
      .style("text-anchor", "middle")
      .attr("class", "insideNum")
      .text(function(d) { return '200.000 €'; });
    
      return element1;

    }*/

   // export let module =  10;
//document.body.appendChild(createShape());
export { toLowerCase };

/*
module.exports = {
    fibonacci: fibonacci,
    isPrime: isPrime,
    isEven: isEven,
    isOdd: isOdd,
    toLowerCase: toLowerCase,
    toUpperCase: toUpperCase,   
    contains: contains,
    repeat: repeat
};*/