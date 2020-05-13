import React from "react";
import { Line } from "react-chartjs-2";

const Chart = (yCount) => {
  return (
    <div>
      {/*<Line
        data={{
          labels: yCount.map(({ y.pub_date }) => y.pub_date),
          datasets: [
            {
              data: yCount.map(({ y}) => y.pub_date),
              label: "No. of articles published",
              borderColor: "#3333ff",
              fill: true,
            },
            
          ],
        }}
      />*/}
    </div>
  );
};

export default Chart;
