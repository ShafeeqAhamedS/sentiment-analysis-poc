import EmotionLineChart from "@/components/EmotionLineChart/EmotionLineChart";
import TicketCategorization from "@/components/TicketCategorization/TicketCategorization";
import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";

const sentimentData = [
  { sentiment: "😍 Very Happy", count: 2, fill: "hsl(var(--chart-1))" },
  { sentiment: "😄 Happy", count: 3, fill: "hsl(var(--chart-2))" },
  { sentiment: "😐 Neutral", count: 1, fill: "hsl(var(--chart-3))" },
  { sentiment: "🙁 Unhappy", count: 1, fill: "hsl(var(--chart-4))" },
  { sentiment: "😡 Very Unhappy", count: 2, fill: "hsl(var(--chart-5))" },
];

const DashboardComponent = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <PieChartComponent sentimentData={sentimentData} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <EmotionLineChart />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <TicketCategorization />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
