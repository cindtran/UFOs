// Import the data from data.js
const tableData = data;


// Reference the HTML table using d3
var tbody = d3.select("tbody");


// Create a table and add forEach
function buildTable(data) {
    tbody.html("");
    // The following function performs three actions:
        // 1.) Loop through each object in the array
        // 2.) Append a row to the HTML table
        // 3.) Add each value from the object into a cell
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Create a function that handles what to do after an input is given
function handleClick(){
    let date =d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(filteredData);

