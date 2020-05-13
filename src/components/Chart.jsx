import React from "react";
import { Line } from "react-chartjs-2";

const Chart = (yCount) => {
  return (
    <div>
      {/*<Line
        data={{
          labels: yCount.map(({ date }) => date),
          datasets: [
            {
              data: yCount.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: yCount.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />*/}
    </div>
  );
};

export default Chart;
