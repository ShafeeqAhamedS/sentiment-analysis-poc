"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-01-01", emotion: "😍 Very Happy", emotionValue: 5 },
  { date: "2024-01-02", emotion: "😄 Happy", emotionValue: 4 },
  { date: "2024-01-03", emotion: "😐 Neutral", emotionValue: 3 },
  { date: "2024-01-04", emotion: "🙁 Unhappy", emotionValue: 2 },
  { date: "2024-01-05", emotion: "😡 Very Unhappy", emotionValue: 1 },
]

const chartConfig = {
  emotionValue: {
    label: "Emotion",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Emotions</CardTitle>
        <CardDescription>Emotional trend over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 16,
              bottom: 16,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              label={{
                value: "Emotion",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "var(--color-muted)" },
              }}
              ticks={[1, 2, 3, 4, 5]}
              tickFormatter={(value) => {
                const emotions = ["😡 Very Unhappy", "🙁 Unhappy", "😐 Neutral", "😄 Happy", "😍 Very Happy"];
                return emotions[value - 1] || value;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="emotionValue"
              type="linear"
              stroke="var(--color-emotionValue)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Emotional changes observed over time
        </div>
        <div className="leading-none text-muted-foreground">
          Based on sentiment logs for the selected dates
        </div>
      </CardFooter>
    </Card>
  )
}
