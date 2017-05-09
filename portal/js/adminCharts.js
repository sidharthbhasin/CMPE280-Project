
window.onload = function(){
        setInterval(function(){
            if (navigator.onLine == false) {
                alert('You are not connected to internet');
            }
        }, 5000);
    }

    $(document).ready(function() {
      //$.ajax({
        //url: "localhost:3000/v1/analytics/postcounts",
        //type: "GET",
        //async: true,
        //dataType: "json",
        //success: function (data) {
         var data = {
          'jobs':5,
            'events':10,
           'accomodations':15,
            'Computer Science':0.1,
            'Software Engineering':0.3,
          'Computer Engineering':0.25,
            'Electrical & Electronics Engineering':0.15,
            'Civil Engineering':0.2,
            'Mechanical Engineering':0.15
          };
            makeCircleChart(data);
            makePieChart(data);
        //}
      //});
  });
//live charts

$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.chart('containerOnline', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Current User Online'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });
});



//post charts



Highcharts.chart('containerPost', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Post details'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Posts'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});



// semi circle charts
function makeCircleChart(data)
{
  var v1 = data['events'];
  var v2 = data['jobs'];
  var v3 = data['accomodations'];
Highcharts.chart('containerSemiCircle', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Posts per catagory',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        //data = api;
        data: [
            ['Jobs',   v1],
            ['Events',       v2],
            ['Accomodations', v3],
            {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});
}

//pie chart


function makePieChart(data)
{
  var v1 = data['Computer Science'];
  var v2 = data['Software Engineering'];
  var v3 = data['Computer Engineering'];
  var v4 = data['Electrical & Electronics Engineering'];
  var v5 = data['Civil Engineering'];
  var v6 = data['Mechanical Engineering'];

    // Build the chart
    Highcharts.chart('containerPieChart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Number of Users per Major'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Computer Science',
                y: v1
            }, {
                name: 'Software Engineering',
                y: v2,
                sliced: true,
                selected: true
            }, {
                name: 'Computer Engineering',
                y: v3
            }, {
                name: 'Electrical & Electronics Engineering',
                y: v4
            }, {
                name: 'Civil Engineering',
                y: v5
            }, {
                name: 'Mechanical Engineering',
                y: v6
            }]
        }]
    });
};


//Combination charts

Highcharts.chart('containerCombination', {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Jane',
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 9, 0]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'John',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'Joe',
            y: 19,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});






var containerOnlineObj=document.getElementById('containerOnline');
var containerPostObj=document.getElementById('containerPost');
var containerAnalysis=document.getElementById('containerAnalysis');
var adminGraph1=document.getElementById('adminGraph1');
var adminGraph2=document.getElementById('adminGraph2');
var adminGraph3=document.getElementById('adminGraph3');

function displayUserAnalysis(){
    containerOnlineObj.style.display="none";
    containerPostObj.style.display="none";
    containerAnalysis.style.display="block";
    // adminGraph1.className += " actiive";
    adminGraph1.classList.add("active");
    adminGraph2.classList.remove("active");
    adminGraph3.classList.remove("active");
}

function displayUsersOnline(){

    containerAnalysis.style.display="none";
    containerOnlineObj.style.display="block";
    containerPostObj.style.display="none";
    // adminGraph2.className += " actiive";
    adminGraph1.classList.remove("active");
    adminGraph2.classList.add("active");
    adminGraph3.classList.remove("active");

}

function displayPostsMonthly(){
    containerAnalysis.style.display="none";
    containerOnlineObj.style.display="none";
    containerPostObj.style.display="block";
    adminGraph1.classList.remove("active");
    adminGraph2.classList.remove("active");
    adminGraph3.classList.add("active");
}
