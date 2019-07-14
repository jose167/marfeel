import _ from 'lodash';
import './style.css';
import dataRevenue from './revenue.json';
import dataImpresions from './impresions.json';
import dataVisit from './visit.json'
import * as d3 from 'd3';

export { toLowerCase };

const container = document.createElement('div');
container.id = "container"
document.body.appendChild(container);

createElements(dataRevenue.items);
createElements(dataImpresions.items);
createElements(dataVisit.items);
createShape(dataRevenue);
createShape(dataImpresions);
createShape(dataVisit);
createCircles();
currentSlide(1);

function toLowerCase(str){
  return str.toLowerCase();
};

function createElements(items){
 
  //main div per chart
  let argClass = items.class;
  const elementMain = document.createElement('div');
  elementMain.id = ("main_" + argClass);
  elementMain.classList.add("fade");
  document.getElementById("container").appendChild(elementMain);

  //div contain svg 
  const elementDiv = document.createElement('div');
  elementDiv.classList.add(argClass);
  elementMain.appendChild(elementDiv);

  //div bottom text
  const elementDivBottom = document.createElement('div');
  elementDivBottom.classList.add("text-" + argClass );
  elementMain.appendChild(elementDivBottom);

  //first row text
  const toprow = document.createElement('div');
  toprow.classList.add("row");
  elementDivBottom.appendChild(toprow);

  // div text Tablet
  const textTablet =  document.createElement('div');
  textTablet.innerHTML = "Tablet";
  textTablet.classList.add("textTablet_" + argClass, "col-6");
  toprow.appendChild(textTablet);

  // div text smartPhone
  const textPhone =  document.createElement('div');
  textPhone.innerHTML = "Smartphone";
  textPhone.classList.add("textPhone_" + argClass, "col-6");
  toprow.appendChild(textPhone);

  //second row
  const bottomrow = document.createElement('div');
  bottomrow.classList.add("row");
  elementDivBottom.appendChild(bottomrow);
 
  //text percentage %
  const textPercentage =  document.createElement('div');
  textPercentage.innerHTML = items.tabletper;
  textPercentage.classList.add("textPercentage");
  bottomrow.appendChild(textPercentage);
  
  //text amount %
  const textAmount =  document.createElement('div');
  textAmount.innerHTML = items.tableNum;
  textAmount.classList.add("textAmount");
  bottomrow.appendChild(textAmount);

  const textPercentageRight =  document.createElement('div');
  textPercentageRight.innerHTML = items.smartphoneper;
  textPercentageRight.classList.add("textPercentageRight");
  bottomrow.appendChild(textPercentageRight);

  const textAmountRight =  document.createElement('div');
  textAmountRight.innerHTML = items.smartphoneNum;
  textAmountRight.classList.add("textAmountRight");
  bottomrow.appendChild(textAmountRight);

}
 
function createShape (data) {

  // set the dimensions and margins of the graph donut
  var width = 450;
  var height = 450;
  var margin = 40;

  // set the dimensions and margins of the graph AREA
  //  var margin2 = {top: 5, right: 5, bottom: 5, left: 5},
  var widthArea = 150;
  var heightArea = 100;
    
  // The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin

  // append the svg object to the div called 'data.class'
  var svg = d3.select("." + data.items.class)
      .append("svg")
        .attr("width", width)
        .attr("height", height)
     // .attr("viewBox", `0 0 ${width} ${height}`) //make charts responsive 
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

    // Add X axis --> 
    var x = d3.scaleLinear()
      .domain([5, d3.max(data.area, function(d) { return d.x; })])
      .range([ 0, widthArea ]);
    
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([1, d3.max(data.area, function(d) { return d.y; })])
      .range([ heightArea, 20 ]);

   
  // Add the area
    svg.append("path")
      .datum(data.area)
      .attr("fill", data.items.colourB)
      .attr("stroke", data.items.colourB)
      .attr("stroke-width", 1)
      .style("fill-opacity", .2)
      .attr("d", d3.area()
        .x(function(d) { return x(d.x) })
        .y0(heightArea)
        .y1(function(d) { return y(d.y) })
        )
};


function createCircles() {
 
  const divButtoms = document.createElement("div");
  document.getElementById("container").appendChild(divButtoms);

  const dot = [1, 2, 3];
  dot.forEach(function(el) {
    console.log(el);
      const span = document.createElement("span");
      span.classList.add("dot");
      span.addEventListener("click", function(){currentSlide(el)}, false);
      divButtoms.appendChild(span);
  });
}

function currentSlide(nextSlide){
 
  const slides          = document.getElementsByClassName("fade");
  const dots            = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none"; 
  }
  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[nextSlide-1].style.display = "block";  
  dots[nextSlide-1].className += " active";
 
}
