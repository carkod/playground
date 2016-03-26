
g = new Dygraph(
    document.getElementById("chart-holder-1"),
   "table.csv",
    {
      //rollPeriod: 100,
      // showRoller: true,
      // customBars: true,
      
      ylabel: 'Points',
      legend: 'always',
      labelsDivStyles: { 'textAlign': 'right' },
      showRangeSelector: true,
      rangeSelectorHeight: 30,
      rangeSelectorPlotStrokeColor: 'yellow',
      rangeSelectorPlotFillColor: 'lightyellow',
      valueRange: [5000,30000]
    }
    )