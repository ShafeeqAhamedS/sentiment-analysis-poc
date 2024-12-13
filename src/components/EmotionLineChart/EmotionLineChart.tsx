import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

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

  const transformedData = Object.entries(propData.value)
    .map(([timestamp, sentiment]) => {
      sentimentCounts[sentiment as string] =
        (sentimentCounts[sentiment as string] || 0) + 1;

      return {
        timestamp: new Date(parseInt(timestamp)).toLocaleString(), // Human-readable timestamp
        sentimentScore: sentimentMapping[sentiment as string] || 0, // Map sentiment to score
        sentiment, // Retain original sentiment for reference
      };
    })
    .sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    ); // Sort by timestamp

  const countData = Object.entries(sentimentCounts).map(
    ([sentiment, count]) => ({
      sentiment,
      count,
    })
  );

  return { transformedData, countData };
};

// Example Backend Data
const propData = {
  key: "emotionLog",
  value: {
    "1733039236": "😍 Very Happy",
    "1733125636 ": "😄 Happy",
    "1734035969711": "😐 Neutral",
    "1734215969712": "🙁 Unhappy",
    "1734215969713": "😡 Very Sad",
    "1734415969714": "😄 Happy",
    "1734515969715": "😄 Happy",
    "1734315969716": "😍 Very Happy",
    "1734515969717": "😡 Very Sad",
    "1734815969718": "😐 Neutral",
    "1734285969719": "😄 Happy",
    "1734355969720": "🙁 Unhappy",
    "17345515969736": "😄 Happy",
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

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: { sentiment: string; timestamp: string } }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const { sentiment, timestamp } = payload[0].payload;
    const dateTime = new Date(timestamp).toLocaleString("en-GB", {
      timeZone: "GMT",
      hour12: false,
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
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
        <p>{sentiment}</p>
        <p>{dateTime}</p>
      </div>
    );
  }
  return null;
};

export default function EmotionLineChart() {
  return (
    <Card className="w-full w-[62%]">
      <CardHeader>
        <CardTitle>EmotionalTrends</CardTitle>
        <CardDescription>Emotional trend over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={transformedData}
              margin={{ top: 0, right: 0, bottom: 25, left: 0 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) =>
                  new Date(value).toLocaleString("en-GB", {
                    timeZone: "GMT",
                    hour12: true,
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                  })
                }
              />
              <YAxis
                domain={[0, 5]} // Adjusted Y-axis length
                ticks={[1, 2, 3, 4, 5]} // Ensure only 5 unique values
                tick={{ fontSize: 22 }} // Increased font size for emojis
                tickFormatter={(value) => {
                  const emotions = ["😡", "🙁", "😐", "😄", "😍"];
                  return emotions[value - 1] || value;
                }}
              />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Line
                dataKey="sentimentScore"
                stroke="#c481e3"
                strokeWidth={2}
                dot={false}
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
