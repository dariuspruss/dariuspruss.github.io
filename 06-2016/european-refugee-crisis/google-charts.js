google.load('visualization', '1', {
				'packages': ['corechart']
				});
				google.setOnLoadCallback(drawChart);

				function drawChart() {
				// The URL of the spreadsheet to source data from.

				var barquery = new google.visualization.Query(
				'https://docs.google.com/spreadsheets/d/1irA8itnFBKX0456gPm6G6-92q8riVna6rHdzoxl8F3I/gviz/tq?sheet=Sheet1&headers=1&range=A1:D11');
				barquery.send(bardraw);

				}

				function bardraw(response) {
				if (response.isError()) {
				alert('Error in query');
				}

				var bardata = response.getDataTable();

				var baroptions = {
				'title': 'Source Countries of Refugees',
				backgroundColor: '#FFFFFF',
				chartArea: {  width: "50%", height: "70%" },
hAxis: {
				title: 'Number of Refugees',
				gridlines: {
				color: '#212121',
				count: 5
				},
				baselineColor: '#212121',
				textStyle: {
				color: '#212121'
				},
				titleTextStyle: {
				color: '#212121'
				}
				},
				vAxis: {
				title: 'Source Countries',
				gridlines: {
				color: '#3F51B5',
				count: 0
				},
				baselineColor: '#212121',
				textStyle: {
				color: '#212121'
				},
				titleTextStyle: {
				color: '#212121'
				}
				},
titleTextStyle: {
				color: '#212121'
				},
				tooltip: {
				trigger: 'selection',
				textStyle: {
				color: '#212121'
				},
				},
				colors: ['#ffca28', '#d4e157', '#66bb6a']
				};

				function resize() {
				var barchart = new google.visualization.BarChart(
				document.getElementById('bar_div'));
				barchart.draw(bardata, baroptions);
				}

// don't forget to add theses in!
				window.onload = resize();
				window.onresize = resize;

				}


// redraws the chart once the window is resized 

				$(window).resize(function() {
				drawChart();
				});
