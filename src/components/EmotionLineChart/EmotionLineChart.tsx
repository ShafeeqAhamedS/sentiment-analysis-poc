import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Function to process backend data
interface PropData {
  key: string;
  value: { [timestamp: string]: string };
}

const processBackendData = (propData: PropData) => {
  const sentimentMapping: { [key: string]: number } = {
    "😍 Very Happy": 5,
    "😄 Happy": 4,
    "😐 Neutral": 3,
    "🙁 Unhappy": 2,
    "😡 Very Unhappy": 1,
  };

  const sentimentCounts: { [key: string]: number } = {
    "😍 Very Happy": 0,
    "😄 Happy": 0,
    "😐 Neutral": 0,
    "🙁 Unhappy": 0,
    "😡 Very Unhappy": 0,
  };

  const transformedData = Object.entries(propData.value).map(([timestamp, sentiment]) => {
    sentimentCounts[sentiment as string] = (sentimentCounts[sentiment as string] || 0) + 1;

    return {
      timestamp: new Date(parseInt(timestamp)).toLocaleString(), // Human-readable timestamp
      sentimentScore: sentimentMapping[sentiment as string] || 0, // Map sentiment to score
      sentiment, // Retain original sentiment for reference
    };
  });

  const countData = Object.entries(sentimentCounts).map(([sentiment, count]) => ({
    sentiment,
    count,
  }));

  return { transformedData, countData };
};

// Example Backend Data
const propData = {
  key: "emotionLog",
  value: {
    "1734015969709": "😍 Very Happy",
    "1734015969710": "😄 Happy",
    "1734015969711": "😐 Neutral",
    "1734015969712": "🙁 Unhappy",
    "1734015969713": "😡 Very Unhappy",
    "1734015969714": "😄 Happy",
    "1734015969715": "😄 Happy",
    "1734015969716": "😍 Very Happy",
    "1734015969717": "😡 Very Unhappy",
  },
};

// Processed Data
const { transformedData } = processBackendData(propData);

const chartConfig = {
  emotionValue: {
    label: "Emotion",
    color: "hsl(var(--chart-1))",
  },
};

export default function EmotionLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Emotions</CardTitle>
        <CardDescription>Emotional trend over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={transformedData} margin={{ top: 16, bottom: 16, left: 0, right: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="sentimentScore" type="linear" stroke="var(--color-emotionValue)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
