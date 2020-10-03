function pageLoader(){
    var selecter = d3.select("#selDataset")
    
    
    d3.json("samples.json").then(function(data) {
        // console.log(data);

        data.names.forEach((name) => {
            selecter.append("option").text(name).property("value", name)
        })
        
        createTable(data.names[0])
        createChart(data.names[0])
      });
   
}
//creat function that changes each chart wehn dropdown value is changed
function optionChanged(newName){
    createTable(newName)
    createChart(newName)
}

//create function that loads value from drop down into the sample metadata chart
function createTable(sampleName){
    var panel = d3.select("#sample-metadata")
    panel.html("")
    d3.json("samples.json").then(function(data) {
        var filterNames = data.metadata.filter(data => data.id == sampleName)[0]
        Object.entries(filterNames).forEach(([key, value]) => {
            panel.append("h5").text(`${key}: ${value}`)
        })

        // console.log(filterNames);
    })
}

//create function that will load values into charts
function createChart(charts){
    d3.json("samples.json").then(function(data){
        var filterSamples = data.samples.filter(data => data.id == charts)[0]
        console.log(filterSamples)
        var otuIds = filterSamples.otu_ids
        var otuLabels = filterSamples.otu_labels
        var sampleValues = filterSamples.sample_values

        //create bar chart trace
        var barTrace = {
            x: sampleValues.slice(0,10).reverse(),
            y: otuIds.slice(0,10).map(otuIds => `OTU ${otuIds}`).reverse(),
            mode: "markers",
            marker: {size:25},
            text: otuLabels.slice(0,10).reverse(),
            type: "bar",
            orientation: 'h',
        };

        var barData = [barTrace];
          
        var barLayout = {
            title: "<b>Top 10 OTUs</b>",
            margin: { t: 100, b: 50, l:30, r:25 } 
          };
          
        Plotly.newPlot("bar", barData, barLayout);

        //create bubble chart trace
        var bubbleTrace = {
            x: otuIds,
            y: sampleValues,
            mode: "markers",
            marker: {
                size: sampleValues,
                color: otuIds,
                colorscale: "continent"
            },
            text: otuLabels

        }

        var bubbleData = [bubbleTrace]

        var bubbleLayout = {
            xaxis: {title: "OTU ID"},
            height: 600,
            width: 1200

        }

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);


        
        
    })

}


  

pageLoader()