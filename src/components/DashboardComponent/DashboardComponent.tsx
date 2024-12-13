import EmotionLineChart from "@/components/EmotionLineChart/EmotionLineChart";
import TicketCategorization from "@/components/TicketCategorization/TicketCategorization";
import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";
import PerformaceUpdate from "../PerformceCard/PerformaceUpdate";
import { TrendingUp, Star, AlertCircle, Meh } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function DashboardLayout() {
  return (
    <>
      <div className="dark">
        <main className="flex-1 overflow-y-auto">
          <div className="px-8 pt-8">
            <header className="mb-8 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome, Oresta !!!
              </h2>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Top Emotion
                  </CardTitle>
                  <Meh className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-2xl font-bold ">
                    😐 Neutral - 320 Tickets
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Last Week - 😡 Very Sad
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tickets closed with Negative sentiments
                  </CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-orange-500">56</div>
                  <p className="text-xs text-muted-foreground">
                    -3.2% from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Top Performing Agent
                  </CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-green-500">
                    Sarah Johnson
                  </div>
                  <p className="text-xs text-muted-foreground">
                    60 😍 Very Happy Feedbacks
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Escalated Sentiments
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-2xl font-bold text-[#E3194B]">
                    25 Tickets
                  </div>
                  <p className="text-xs text-muted-foreground text-[#E3194B]">
                    +3.2% from last week
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <main className="flex flex-col">
          <div className="overflow-auto pb-6 pl-8">
            <div className="flex flex-wrap gap-5">
              <PieChartComponent
                sentimentData={[
                  {
                    sentiment: "😍 Very Happy",
                    count: 405, // updated value
                    fill: "hsl(var(--chart-1))",
                  },
                  {
                    sentiment: "😄 Happy",
                    count: 326, // updated value
                    fill: "hsl(var(--chart-2))",
                  },
                  {
                    sentiment: "😐 Neutral",
                    count: 200, // updated value
                    fill: "hsl(var(--chart-3))",
                  },
                  {
                    sentiment: "🙁 Unhappy",
                    count: 80, // updated value
                    fill: "hsl(var(--chart-4))",
                  },
                  {
                    sentiment: "😡 Very Unhappy",
                    count: 28, // updated value
                    fill: "hsl(var(--chart-5))",
                  },
                ]}
              />

              <EmotionLineChart />

              <TicketCategorization />

              {/* <AgentDropdown /> */}

              <PerformaceUpdate />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
