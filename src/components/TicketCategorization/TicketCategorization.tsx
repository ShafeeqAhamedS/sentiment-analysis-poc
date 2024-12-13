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

const TicketCategorization = () => {
  const data = [
    { name: "Lowest", positive: 30, neutral: 20, negative: 10 },
    { name: "Low", positive: 40, neutral: 30, negative: 15 },
    { name: "Medium", positive: 30, neutral: 20, negative: 10 },
    { name: "High", positive: 20, neutral: 10, negative: 5 },
    { name: "Medium", positive: 30, neutral: 20, negative: 10 },
  ];

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
    <Card className="w-[45%]">
      <CardHeader>
        <CardTitle>Ticket Categorization</CardTitle>
        <CardDescription>
          Sentiment distribution by ticket priority
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            positive: { label: "Positive", color: "#31b518" },
            neutral: { label: "Neutral", color: "#fae71b" },
            negative: { label: "Negative", color: "#b81209" },
          }}
          className="h-[450px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tickMargin={10} tick={{ fontSize: 16 }} />
              <YAxis />
              <ChartTooltip content={<CustomTooltip />} />
              <Bar
                dataKey="positive"
                stackId="a"
                fill="#b81209"
              />
              <Bar dataKey="neutral" stackId="a" fill="#fae71b" />
              <Bar
                dataKey="negative"
                stackId="a"
                fill="#31b518"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TicketCategorization;
