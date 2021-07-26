/*
anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "White", value: 223553265, exploded: true},
        {x: "Black or African American", value: 38929319},
        {x: "American Indian and Alaska Native", value: 2932248},
        {x: "Asian", value: 14674252},
        {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
        {x: "Some Other Race", value: 19107368},
        {x: "Two or More Races", value: 9009073}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
    
    // sort elements
    chart.sort("desc");  
    
    // set legend position
    chart.legend().position("right");
    // set items layout
    chart.legend().itemsLayout("vertical");  
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });*/

const svgNamesapce = "http://www.w3.org/2000/svg";
const svg = document.getElementById("pg");
const percent = 40;

const toRads = (deg) => deg * (Math.PI / 180.0);

let x, y;
let circle;
for(let i = 0; i < 360; i += 36)
{
    x = 70 + 60 * Math.sin(toRads(i));
    y = 70 - 60 * Math.cos(toRads(i));

    circle = document.createElementNS(svgNamesapce, "circle");
    circle.setAttribute("cx", Math.floor(x));
    circle.setAttribute("cy", Math.floor(y));
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", (i*100 / 360 < percent) ? "red" : "grey");

    svg.appendChild(circle);
}
  