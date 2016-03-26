
g = new Dygraph(
    document.getElementById("chart-holder-nasdaq"),
   "graphs/nasdaq.csv",
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
    }
    )