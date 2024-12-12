import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const TicketCategorization = () => {
    const data = [
        { name: "High", positive: 20, neutral: 10, negative: 5 },
        { name: "Medium", positive: 30, neutral: 20, negative: 10 },
        { name: "Low", positive: 40, neutral: 30, negative: 15 },
      ]

  return (
    <Card className="col-span-2">
    <CardHeader>
      <CardTitle>Ticket Categorization</CardTitle>
      <CardDescription>Sentiment distribution by ticket priority</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={{
        positive: { label: "Positive", color: "hsl(var(--chart-1))" },
        neutral: { label: "Neutral", color: "hsl(var(--chart-2))" },
        negative: { label: "Negative", color: "hsl(var(--chart-3))" },
      }} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="positive" stackId="a" fill="var(--color-positive)" />
            <Bar dataKey="neutral" stackId="a" fill="var(--color-neutral)" />
            <Bar dataKey="negative" stackId="a" fill="var(--color-negative)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContent>
  </Card>
  )
}

export default TicketCategorization