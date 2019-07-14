import _ from 'lodash';
import './style.css';
import dataRevenue from './revenue.json';
import dataImpresions from './impresions.json';
import dataVisit from './visit.json'
import * as d3 from 'd3';


const container = document.createElement('div');
container.id = "container"
document.body.appendChild(container);

createElements(dataRevenue.items);
createElements(dataImpresions.items);
createElements(dataVisit.items);
createShape(dataRevenue);
createShape(dataImpresions);
createShape(dataVisit);
displayShapes();


function toLowerCase(str){
  return str.toLowerCase();
};

function createElements(items){
 
  let argClass = items.class;
  const elementMain = document.createElement('div');
  elementMain.id = ("main_" + argClass);
  document.getElementById("container").appendChild(elementMain);

  const elementDiv = document.createElement('div');
  elementDiv.classList.add(argClass);
  elementMain.appendChild(elementDiv);

  const elementDivBottom = document.createElement('div');
  elementDivBottom.classList.add("text-" + argClass );
  elementMain.appendChild(elementDivBottom);

  const toprow = document.createElement('div');
  toprow.classList.add("row");
  elementDivBottom.appendChild(toprow);

  const textTablet =  document.createElement('div');
  textTablet.innerHTML = "Tablet";
  textTablet.classList.add("textTablet", "col-6");
  toprow.appendChild(textTablet);

  const textPhone =  document.createElement('div');
  textPhone.innerHTML = "Smartphone";
  textPhone.classList.add("textPhone", "col-6");
  toprow.appendChild(textPhone);

  const bottomrow = document.createElement('div');
  bottomrow.classList.add("row");
  elementDivBottom.appendChild(bottomrow);
 
  const textPercentage =  document.createElement('div');
  textPercentage.innerHTML = items.tabletper;
  textPercentage.classList.add("textPercentage", "col-2");
  bottomrow.appendChild(textPercentage);

  const textAmount =  document.createElement('div');
  textAmount.innerHTML = items.tableNum;
  textAmount.classList.add("textAmount", "col-4");
  bottomrow.appendChild(textAmount);

   
  const col1 =  document.createElement('div');
  col1.classList.add("col-1");
  bottomrow.appendChild(col1);

  const textPercentageRight =  document.createElement('div');
  textPercentageRight.innerHTML = items.smartphoneper;
  textPercentageRight.classList.add("textPercentageRight", "col-2");
  bottomrow.appendChild(textPercentageRight);

  const textAmountRight =  document.createElement('div');
  textAmountRight.innerHTML = items.smartphoneNum;
  textAmountRight.classList.add("textAmountRight", "col-3");
  bottomrow.appendChild(textAmountRight);

}
 
function createShape (data) {

  // set the dimensions and margins of the graph donut
  var width = 450;
  var height = 450;
  var margin = 40;

  // set the dimensions and margins of the graph AREA
  //  var margin2 = {top: 5, right: 5, bottom: 5, left: 5},
  var width2 = 300;
  var height2 = 100;
    
  // The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin

  // append the svg object to the div called 'data.class'
  var svg = d3.select("." + data.items.class)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
  // set the color scale
  var color = d3.scaleOrdinal()
      .domain(data.donut)
      .range([data.items.colourA,data.items.colourB])
    
    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data.donut))
    
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(200)         // This is the size of the donut hole
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
      
      .text(function(d) { return data.items.title; });
    
      svg.append("text")
      .attr("dy", "0.2em")
      .style("text-anchor", "middle")
      .attr("class", "insideNum")
      .text(function(d) { return data.items.amount; });

       // append the svg object to the body of the page
   // svg.append("svg")
   //   .attr("width", width2 + 10 + 10)
   //    .attr("height", height2 + 20)
    // .append("g")
   //  .attr("transform",
   ///    "translate(" + 50 + "," + 50 + ")");

    // Add X axis --> 
    var x = d3.scaleLinear()
      .domain([0, d3.max(data.area, function(d) { return d.x; })])
      .range([ 0, width2 ]);
  //  svg.append("g")
  //  .attr("transform", "translate(0," + height2 + ")")
  //   .call(d3.axisBottom(x));
    
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data.area, function(d) { return d.y; })])
      .range([ height2, 0 ]);
  // svg.append("g")
  //    .call(d3.axisLeft(y));
    
    // Add the area
  /*  svg.append("path")
      .datum(data.area)
      .attr("fill", "#cce5df")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.area()
        .x(function(d) { return x(d.x) })
        .y0(y(0))
        .y1(function(d) { return y(d.y) })
        )*/
}

function createShapeSecond(){
  
  var data = [
    { x: 0, y: 10, },
    { x: 1, y: 10, },
    { x: 2, y: 9, },
    { x: 3, y: 10, },
    { x: 4, y: 13, },
    { x: 5, y: 15, },
    { x: 6, y: 14, },
    { x: 7, y: 14, },
    { x: 8, y: 15, },
    { x: 9, y: 15, },
    { x: 10, y: 12, },
  ];
  // set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 50},
width = 360 - margin.left - margin.right,
height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(".test")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

//Read the data
//d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

// When reading the csv, I must format variables:
//function(d){
//return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
//},

// Now I can use this dataset:
//function(data) {

// Add X axis --> it is a date format
var x = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) { return d.x; })])
  .range([ 0, width ]);
svg.append("g")
//  .attr("transform", "translate(0," + height + ")")
 // .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, d3.max(data, function(d) { return d.y; })])
  .range([ height, 0 ]);
svg.append("g");
  //.call(d3.axisLeft(y));

// Add the area
svg.append("path")
  .datum(data)
  .attr("fill", "#cce5df")
  .attr("stroke", "#69b3a2")
  .attr("stroke-width", 1.5)
  .attr("d", d3.area()
    .x(function(d) { return x(d.x) })
    .y0(height)
    .y1(function(d) { return y(d.y) })
    )
    console.log(svg);
    return svg;
    console.log(svg);
  
};

function createCircles() {
 
  const divButtoms = document.createElement("div");
  document.getElementById("container").appendChild(divButtoms);

  const dot = ["dot1", "dot2", "dot3"];
  dot.forEach(function(el) {
    console.log(el);
      const span = document.createElement("span");
      span.id = el;
      divButtoms.appendChild(span);
  });
}

function displayShapes(){

  createCircles();

  ///const img_con = document.getElementById('img-con'); 
  const dot1 = document.getElementById('dot1');
  const dot2 = document.getElementById('dot2');
  const dot3 = document.getElementById('dot3');

  const main_revenue    = document.getElementById("main_revenue");
  const main_impresions = document.getElementById("main_impresions");
  const main_visit   = document.getElementById("main_visit");


  dot1.onclick = ()=> {
    main_impresions.style.display = 'none';
    main_visit.style.display = 'none';
    main_revenue.style.display = 'block';

    dot1.style.backgroundColor = "#696969";
    dot2.style.backgroundColor = "#bbb";
    dot3.style.backgroundColor = "#bbb"

  }

  dot2.onclick = ()=> {
    main_revenue.style.display = 'none';
    main_visit.style.display = 'none';
    main_impresions.style.display = 'block';

    dot1.style.backgroundColor = "#bbb";
    dot2.style.backgroundColor = "#696969";;
    dot3.style.backgroundColor = "#bbb"
  }

  dot3.onclick = ()=> {
    main_revenue.style.display = 'none';
    main_impresions.style.display = 'none';
    main_visit.style.display = 'block';

    dot1.style.backgroundColor = "#bbb";
    dot2.style.backgroundColor = "#bbb";
    dot3.style.backgroundColor = "#696969";
  }


}

     export { toLowerCase };
/*
d3.selectAll("p")
  .append('text')
  .text(function(d) { return 'REVENUE'; });
 console.log(d3.selectAll('p').append('text').text(function(d) { return 'REVENUE'; }));
 
*/