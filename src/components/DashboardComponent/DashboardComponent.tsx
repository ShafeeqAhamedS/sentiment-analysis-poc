import  EmotionLineChart from "@/components/EmotionLineChart/EmotionLineChart";
import TicketCategorization from "@/components/TicketCategorization/TicketCategorization";
import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";
const sentimentData = [
  { sentiment: "😍 Very Happy", count: 2, fill: "var(--color-happy)" },
  { sentiment: "😄 Happy", count: 3, fill: "var(--color-happy)" },
  { sentiment: "😐 Neutral", count: 1, fill: "var(--color-neutral)" },
  { sentiment: "🙁 Unhappy", count: 1, fill: "var(--color-unhappy)" },
  { sentiment: "😡 Very Unhappy", count: 2, fill: "var(--color-unhappy)" },
];
const DashboardComponent = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <PieChartComponent sentimentData={sentimentData} />
      <EmotionLineChart />
      <TicketCategorization />
    </div>
  );
};

export default DashboardComponent;
