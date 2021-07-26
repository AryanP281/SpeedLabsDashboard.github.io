
/*************************Variables*************************** */
const svgNamespace = "http://www.w3.org/2000/svg";

/************************Functions****************************** */
function displayProgressBar(svg, innerRadius, outerRadius, dotCount, center, percentData)
{
    /*Displays progress bar pattern in given svg */

    //Creating function to convert degrees to radians
    const toRads = (deg) => deg * (Math.PI / 180.0);

    let dot;
    let cx,cy;
    for(let i = 360/dotCount; i <= 360; i += (360/dotCount))
    {
        cx = center[0] + ((innerRadius+outerRadius)*Math.sin(toRads(i)));
        cy = center[1] - ((innerRadius+outerRadius)*Math.cos(toRads(i)));

        dot = document.createElementNS(svgNamespace, "circle");
        dot.setAttribute("cx", Math.floor(cx));
        dot.setAttribute("cy", Math.floor(cy));
        dot.setAttribute("r", outerRadius);
        dot.setAttribute("fill", ((i*100/360) <= percentData[0]) ? percentData[1] : "grey");

        svg.appendChild(dot);
    }
}

/**************************Scripts************************************ */
//Displaying 1st progress bar
let svg = document.getElementById("pg1");
displayProgressBar(svg, 50, 5, 20, [70,70], [75, "orange"]);

//Displaying 2nd progress bar
svg = document.getElementById("pg2");
displayProgressBar(svg, 50,5,20,[70,70], [50, "blue"]);

//Displaying the 3rd progress bar
svg = document.getElementById("pg3");
displayProgressBar(svg, 50, 5, 20, [70,70], [40, "pink"]);

//Displaying pie chart
anychart.onDocumentReady(() => {
    //Setting the data to be displayed
    const data = [
        {x: "Data 01", value: 50},
        {x: "Data 02", value: 20},
        {x: "Data 03", value: 10},
        {x: "Data 04", value: 10}
    ]

    //Creating the piechart
    const pieChart = anychart.pie(data);

    //Displaying chart
    pieChart.container(document.getElementById("pie-chart"));
    pieChart.draw();
});