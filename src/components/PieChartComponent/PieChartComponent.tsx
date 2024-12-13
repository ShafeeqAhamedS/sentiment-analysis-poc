"use client";

import * as React from "react";
import {
  Label,
  Pie,
  PieChart,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartConfig = {
  total: {
    label: "Total Emotions",
  },
  "😍 Very Happy": {
    label: "Very Happy",
    color: "hsl(var(--chart-1))",
  },
  "😄 Happy": {
    label: "Happy",
    color: "hsl(var(--chart-2))",
  },
  "😐 Neutral": {
    label: "Neutral",
    color: "hsl(var(--chart-3))",
  },
  "🙁 Unhappy": {
    label: "Unhappy",
    color: "hsl(var(--chart-4))",
  },
  "😡 Very Unhappy": {
    label: "Very Unhappy",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface SentimentData {
  sentiment: string;
  count: number;
  fill: string;
}

export default function SentimentChart({
  sentimentData,
}: {
  sentimentData: SentimentData[];
}) {
  const totalSentiments = React.useMemo(() => {
    return sentimentData.reduce((acc, curr) => acc + curr.count, 0);
  }, [sentimentData]);

  return (
    <Card className="flex flex-col w-[35%]">
      <CardHeader>
        <CardTitle>Sentiment Distribution</CardTitle>
        <CardDescription>Analysis of emotions for all tickets</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <ResponsiveContainer width="100%" height="50%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={({ payload }) => {
                  if (payload && payload.length) {
                    return (
                      <div
                        className="custom-tooltip"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          padding: "10px",
                          borderRadius: "15px",
                        }}
                      >
                        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Pie
                data={sentimentData}
                dataKey="count"
                nameKey="sentiment"
                innerRadius={60}
                strokeWidth={5}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalSentiments.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Total Emotions
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <Legend
                verticalAlign="bottom"
                align="center"
                height={36}
                wrapperStyle={{
                  overflow: "visible",
                  maxHeight: "36px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
