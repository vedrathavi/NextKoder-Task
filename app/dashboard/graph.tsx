"use Client"

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

export interface ChartData {
  year: number;
  revenue: number;
}

interface ChartProps {
  data: ChartData[];
}

export default function CustomizeSizeAndStroke({data}: ChartProps) {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: 600,
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      
      <CartesianGrid
        stroke="#94a3b8"
        strokeDasharray="5 5"
        strokeOpacity={0.5}
      />
      <XAxis dataKey="year" stroke="#e11d48" />
      <YAxis stroke="#e11d48" strokeWidth={2} />
      {/* Tooltip is HTML, so it takes `style` and `className` rather than SVG attributes. */}
      <Tooltip defaultIndex={2} />
      <Bar
        dataKey="revenue"
        fill="#0ea5e9"
        fillOpacity={0.85}
        stroke="#0369a1"
        strokeWidth={2}
        radius={4}
        barSize={30}
      />
      <RechartsDevtools />
    </BarChart>
  );
}
