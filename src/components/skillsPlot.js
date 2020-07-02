import React, { useState } from "react"
// import { render } from "react-dom"
// Import Highcharts
import Highcharts from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"
import dataJSON from "../data/aw-bucket-export_aw-watcher-window_mauro-pc.json"

console.log(dataJSON)

const data = dataJSON.buckets["aw-watcher-window_mauro-pc"].events
console.log(data)

const SkillsPlot = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: (9 / 16) * 100 + "%", // 16:9 ratio
      type: "column",
    },
    title: {
      text: "My chart",
    },
    subtitle: {
      text:
        'Source: <a href="http0s://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>',
    },
    xAxis: {
      categories: ["JavaScript", "React", "Tailwid", "HTML"],
      title: {
        text: "tareas",
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Proporcion de tiempo (%)",
        align: "middle",
      },
      labels: {
        overflow: "justify",
      },
    },
    series: [
      {
        name: "Actividad",
        color: "#d69e2e",
        type: "column",
        data: [30, 40, 20, 10],
      },
    ],
  })

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  )
}

export default SkillsPlot
