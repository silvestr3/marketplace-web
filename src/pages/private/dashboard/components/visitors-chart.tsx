import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Calendar04Icon } from "hugeicons-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export function VisitorsChart() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#5EC5FD",
    },
  } satisfies ChartConfig;

  const sampleData = [
    { date: 1, amount: 137 },
    { date: 2, amount: 180 },
    { date: 3, amount: 169 },
    { date: 4, amount: 175 },
    { date: 5, amount: 170 },
    { date: 6, amount: 178 },
    { date: 7, amount: 150 },
    { date: 8, amount: 144 },
    { date: 9, amount: 159 },
    { date: 10, amount: 151 },
    { date: 11, amount: 130 },
    { date: 12, amount: 149 },
    { date: 13, amount: 174 },
    { date: 14, amount: 177 },
    { date: 15, amount: 165 },
    { date: 16, amount: 152 },
    { date: 17, amount: 191 },
    { date: 18, amount: 144 },
    { date: 19, amount: 136 },
    { date: 20, amount: 148 },
    { date: 21, amount: 154 },
    { date: 22, amount: 122 },
    { date: 23, amount: 138 },
    { date: 24, amount: 140 },
    { date: 25, amount: 165 },
    { date: 26, amount: 149 },
    { date: 27, amount: 181 },
    { date: 28, amount: 172 },
    { date: 29, amount: 157 },
    { date: 30, amount: 139 },
  ];

  return (
    <div className="flex-1 bg-base-white rounded-xl h-[370px] p-6 flex flex-col items-start gap-7">
      <div className="flex items-center justify-between w-full">
        <h3 className="title-sm text-gray-500">Visitantes</h3>
        <span className="label-sm text-gray-300 flex items-center gap-2">
          <Calendar04Icon className="text-blue-dark" />
          26 de junho - 25 de julho
        </span>
      </div>

      <ChartContainer
        config={chartConfig}
        className="h-[calc(100%-50px)] w-full"
      >
        <LineChart data={sampleData}>
          <XAxis dataKey={"date"} tickLine={false} axisLine={false} />^
          <YAxis dataKey={"amount"} tickLine={false} axisLine={false} />
          <CartesianGrid vertical={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey={"amount"}
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
