import Charts from "react-apexcharts";

function Radar({stats, ...props}) {
    let config = {
        series: [{
            data: stats,
          }
        ],
        options: {
            chart: {
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                },
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.1
            },
            xaxis: {
                categories: ['hp', 'atack', 'def', 'spe.atack', 'spe.def', 'speed'],
                labels: {
                    style:{
                        colors : ["#000", "#000", "#000", "#000", "#000", "#000"],
                        fontWeight: "600",
                        cssClass: 'apexcharts-xaxis-label'
                    }
                },
                // max: 504   
            },
            yaxis: {
                show: false,
                max: 200
            },
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        strokeColors: '#fff',
                        connectorColors: '#fff',
                        fill: {
                            colors: ['#ffc904', '#6790ff']
                        }
                    }
                }
            }
          },
        }
    
     

  return (
        <Charts
            options={config.options}
            series={config.series}
            type = "radar"
            height = "100%"
            // width = "50%"
        />
  );
}


export default Radar;