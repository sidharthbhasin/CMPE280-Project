
window.onload = function(){
        setInterval(function(){
            if (navigator.onLine == false) {
                alert('You are not connected to internet');
            }
        }, 5000);
    }



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
            text: 'Current Users Online'
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
        text: 'Source: Spartan-Scoop'
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
            text: 'Number of Posts'
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
        name: 'Software engineering',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'Computer Engineering',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'Electrical Engineering',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Mechanical Engineering',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});



// semi circle charts
//
// Highcharts.chart('containerSemiCircle', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: 0,
//         plotShadow: false
//     },
//     title: {
//         text: 'Browser<br>shares<br>2015',
//         align: 'center',
//         verticalAlign: 'middle',
//         y: 40
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     plotOptions: {
//         pie: {
//             dataLabels: {
//                 enabled: true,
//                 distance: -50,
//                 style: {
//                     fontWeight: 'bold',
//                     color: 'white'
//                 }
//             },
//             startAngle: -90,
//             endAngle: 90,
//             center: ['50%', '75%']
//         }
//     },
//     series: [{
//         type: 'pie',
//         name: 'Browser share',
//         innerSize: '50%',
//         //data = api;
//         data: [
//             ['Firefox',   10.38],
//             ['IE',       56.33],
//             ['Chrome', 24.03],
//             ['Safari',    4.77],
//             ['Opera',     0.91],
//             {
//                 name: 'Proprietary or Undetectable',
//                 y: 0.2,
//                 dataLabels: {
//                     enabled: false
//                 }
//             }
//         ]
//     }]
// });
//

//pie chart

//
// $(document).ready(function () {
//
//     // Build the chart
//     Highcharts.chart('containerPieChart', {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false,
//             type: 'pie'
//         },
//         title: {
//             text: 'Browser market shares January, 2015 to May, 2015'
//         },
//         tooltip: {
//             pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: false
//                 },
//                 showInLegend: true
//             }
//         },
//         series: [{
//             name: 'Brands',
//             colorByPoint: true,
//             data: [{
//                 name: 'Microsoft Internet Explorer',
//                 y: 56.33
//             }, {
//                 name: 'Chrome',
//                 y: 24.03,
//                 sliced: true,
//                 selected: true
//             }, {
//                 name: 'Firefox',
//                 y: 10.38
//             }, {
//                 name: 'Safari',
//                 y: 4.77
//             }, {
//                 name: 'Opera',
//                 y: 0.91
//             }, {
//                 name: 'Proprietary or Undetectable',
//                 y: 0.2
//             }]
//         }]
//     });
// });
//

//Combination charts
<<<<<<< HEAD
//
=======

>>>>>>> c68a188d60c367dc1c52a72840299178e9d81ede
// Highcharts.chart('containerCombination', {
//     title: {
//         text: 'Combination chart'
//     },
//     xAxis: {
//         categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
//     },
//     labels: {
//         items: [{
//             html: 'Total fruit consumption',
//             style: {
//                 left: '50px',
//                 top: '18px',
//                 color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
//             }
//         }]
//     },
//     series: [{
//         type: 'column',
//         name: 'Jane',
//         data: [3, 2, 1, 3, 4]
//     }, {
//         type: 'column',
//         name: 'John',
//         data: [2, 3, 5, 7, 6]
//     }, {
//         type: 'column',
//         name: 'Joe',
//         data: [4, 3, 3, 9, 0]
//     }, {
//         type: 'spline',
//         name: 'Average',
//         data: [3, 2.67, 3, 6.33, 3.33],
//         marker: {
//             lineWidth: 2,
//             lineColor: Highcharts.getOptions().colors[3],
//             fillColor: 'white'
//         }
//     }, {
//         type: 'pie',
//         name: 'Total consumption',
//         data: [{
//             name: 'Jane',
//             y: 13,
//             color: Highcharts.getOptions().colors[0] // Jane's color
//         }, {
//             name: 'John',
//             y: 23,
//             color: Highcharts.getOptions().colors[1] // John's color
//         }, {
//             name: 'Joe',
//             y: 19,
//             color: Highcharts.getOptions().colors[2] // Joe's color
//         }],
//         center: [100, 80],
//         size: 100,
//         showInLegend: false,
//         dataLabels: {
//             enabled: false
//         }
//     }]
// });
<<<<<<< HEAD
//
=======

>>>>>>> c68a188d60c367dc1c52a72840299178e9d81ede





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

    //containerAnalysis.style.display="none";
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
