import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const BarGraph = () => {
  const data = [
    {
      name: "Week 1",
      uv: 400,
      pv: 240,
    },
    {
      name: "Week 2",
      uv: 300,
      pv: 139,
    },
    {
      name: "Week 3",
      uv: 200,
      pv: 980,
    },
    {
      name: "Week 4",
      uv: 278,
      pv: 390,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 2,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="pv" barSize={40} fill="#98D89E" />
          <Bar dataKey="uv" barSize={40} fill="#EE8484" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
