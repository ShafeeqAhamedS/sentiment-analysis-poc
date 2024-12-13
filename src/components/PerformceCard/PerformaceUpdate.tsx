import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const PerformaceUpdate = () => {
  const agents = [
    {
      name: "Michael Brown",
      sentimentData: [
        { name: "😍 Very Happy", value: 45 },
        { name: "😄 Happy", value: 30 },
        { name: "😐 Neutral", value: 10 },
        { name: "🙁 Unhappy", value: 2 },
        { name: "😡 Very Sad", value: 0 },
      ],
    },
    {
      name: "Selena Gomez",
      sentimentData: [
        { name: "😍 Very Happy", value: 20 },
        { name: "😄 Happy", value: 21 },
        { name: "😐 Neutral", value: 30 },
        { name: "🙁 Unhappy", value: 10 },
        { name: "😡 Very Sad", value: 1 },
      ],
    },
    {
      name: "John Doe",
      sentimentData: [
        { name: "😍 Very Happy", value: 50 },
        { name: "😄 Happy", value: 40 },
        { name: "😐 Neutral", value: 20 },
        { name: "🙁 Unhappy", value: 5 },
        { name: "😡 Very Sad", value: 2 },
      ],
    },
    {
      name: "Jane Smith",
      sentimentData: [
        { name: "😍 Very Happy", value: 35 },
        { name: "😄 Happy", value: 25 },
        { name: "😐 Neutral", value: 15 },
        { name: "🙁 Unhappy", value: 8 },
        { name: "😡 Very Sad", value: 3 },
      ],
    },
    {
      name: "Sarah Johnson",
      sentimentData: [
        { name: "😍 Very Happy", value: 60 },
        { name: "😄 Happy", value: 50 },
        { name: "😐 Neutral", value: 30 },
        { name: "🙁 Unhappy", value: 10 },
        { name: "😡 Very Sad", value: 5 },
      ],
    },
    {
      name: "Emily Davis",
      sentimentData: [
        { name: "😍 Very Happy", value: 25 },
        { name: "😄 Happy", value: 20 },
        { name: "😐 Neutral", value: 10 },
        { name: "🙁 Unhappy", value: 5 },
        { name: "😡 Very Sad", value: 1 },
      ],
    },
    {
      name: "David Wilson",
      sentimentData: [
        { name: "😍 Very Happy", value: 55 },
        { name: "😄 Happy", value: 45 },
        { name: "😐 Neutral", value: 25 },
        { name: "🙁 Unhappy", value: 15 },
        { name: "😡 Very Sad", value: 7 },
      ],
    },
    {
      name: "Sophia Martinez",
      sentimentData: [
        { name: "😍 Very Happy", value: 40 },
        { name: "😄 Happy", value: 35 },
        { name: "😐 Neutral", value: 20 },
        { name: "🙁 Unhappy", value: 10 },
        { name: "😡 Very Sad", value: 4 },
      ],
    },
    {
      name: "James Anderson",
      sentimentData: [
        { name: "😍 Very Happy", value: 30 },
        { name: "😄 Happy", value: 25 },
        { name: "😐 Neutral", value: 15 },
        { name: "🙁 Unhappy", value: 5 },
        { name: "😡 Very Sad", value: 2 },
      ],
    },
    {
      name: "Olivia Thomas",
      sentimentData: [
        { name: "😍 Very Happy", value: 45 },
        { name: "😄 Happy", value: 35 },
        { name: "😐 Neutral", value: 25 },
        { name: "🙁 Unhappy", value: 10 },
        { name: "😡 Very Sad", value: 3 },
      ],
    },
  ];

  const [selectedAgent, setSelectedAgent] = useState("");
  const [sentimentData, setSentimentData] = useState<
    { name: string; value: number }[]
  >([]);

  const handleAgentChange = (value: string) => {
    if (value === "clear") {
      setSelectedAgent("");
      setSentimentData([]);
    } else {
      const agent = agents.find((agent) => agent.name === value);
      if (agent) {
        setSelectedAgent(agent.name);
        setSentimentData(agent.sentimentData);
      }
    }
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: any[];
    label?: string;
  }) => {
    if (active && payload && payload.length) {
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
          <p>{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`}>{`${entry.name}: ${entry.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-[52%]">
      <CardHeader>
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex flex-col gap-2">
            <CardTitle>Agent Sentiment Analysis</CardTitle>
            <CardDescription>
              Analyze sentiment distribution by agent
            </CardDescription>
          </div>
          <Select onValueChange={handleAgentChange} value={selectedAgent}>
            <SelectTrigger className="w-[20%]">
              <span>{selectedAgent || "Select agent"}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clear">Select Agent</SelectItem>
              {agents.map((agent) => (
                <SelectItem key={agent.name} value={agent.name}>
                  {agent.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {selectedAgent ? (
          <ChartContainer
            config={{
              positive: { label: "Positive", color: "hsl(var(--chart-1))" },
              neutral: { label: "Neutral", color: "hsl(var(--chart-2))" },
              negative: { label: "Negative", color: "hsl(var(--chart-3))" },
            }}
            className="h-[440px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sentimentData}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickMargin={10} tick={{ fontSize: 16 }} />
                <YAxis />
                <ChartTooltip
                  content={
                    <CustomTooltip
                      active={undefined}
                      payload={undefined}
                      label={undefined}
                    />
                  }
                />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px]">
            <div className="text-2xl font-bold text-gray-400">📊</div>
            <p>Please select an agent using the dropdown above.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PerformaceUpdate;
