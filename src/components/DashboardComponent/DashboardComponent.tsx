// import EmotionLineChart from "@/components/EmotionLineChart/EmotionLineChart";
// import TicketCategorization from "@/components/TicketCategorization/TicketCategorization";
// import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";

// const sentimentData = [
//   { sentiment: "😍 Very Happy", count: 2, fill: "hsl(var(--chart-1))" },
//   { sentiment: "😄 Happy", count: 3, fill: "hsl(var(--chart-2))" },
//   { sentiment: "😐 Neutral", count: 1, fill: "hsl(var(--chart-3))" },
//   { sentiment: "🙁 Unhappy", count: 1, fill: "hsl(var(--chart-4))" },
//   { sentiment: "😡 Very Unhappy", count: 2, fill: "hsl(var(--chart-5))" },
// ];

// const DashboardComponent = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="col-span-1 md:col-span-2 lg:col-span-1">
//           <PieChartComponent sentimentData={sentimentData} />
//         </div>
//         <div className="col-span-1 md:col-span-2 lg:col-span-2">
//           <EmotionLineChart />
//         </div>
//         <div className="col-span-1 md:col-span-2 lg:col-span-3">
//           <TicketCategorization />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardComponent;
// "use client"

// import { useState } from "react"
// import { BarChart3, LineChart, PieChart } from 'lucide-react'

// import { cn } from "@/lib/utils"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
// } from "@/components/ui/sidebar"

// import EmotionLineChart from "@/components/EmotionLineChart/EmotionLineChart";
// import TicketCategorization from "@/components/TicketCategorization/TicketCategorization";
// import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";

// const chartTypes = [
//   {
//     id: "sentiment",
//     name: "Sentiment Distribution",
//     icon: PieChart,
//     description: "Analysis of emotions for all tickets"
//   },
//   {
//     id: "emotions",
//     name: "Emotional Trends",
//     icon: LineChart,
//     description: "Emotional trend over time"
//   },
//   {
//     id: "categories",
//     name: "Ticket Categories",
//     icon: BarChart3,
//     description: "Distribution by ticket category"
//   }
// ]

// export default function DashboardLayout() {
//   const [selectedCharts, setSelectedCharts] = useState<string[]>(["sentiment", "emotions", "categories"])

//   return (
//     <SidebarProvider>
//       <div className="flex h-screen bg-[#FFFFFF] text-[#241F21]">
//         {/* Sidebar */}
//         <Sidebar className="bg-[#E3194B] text-white">
//           <SidebarHeader className="border-b border-[#4F4F4F] px-4 py-2">
//             <h2 className="text-lg font-semibold">Sentiment Analysis</h2>
//           </SidebarHeader>
//           <SidebarContent>
//             <SidebarGroup>
//               <SidebarGroupLabel className="text-white">Charts</SidebarGroupLabel>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   {chartTypes.map((chart) => (
//                     <SidebarMenuItem key={chart.id}>
//                       <SidebarMenuButton
//                         onClick={() => {
//                           setSelectedCharts([chart.id])
//                         }}
//                         isActive={selectedCharts.includes(chart.id)}
//                         className={cn(
//                           "flex items-center p-2 rounded-lg transition-colors",
//                           selectedCharts.includes(chart.id) ? "bg-[#4F4F4F] text-white" : "hover:bg-[#4F4F4F]"
//                         )}
//                       >
//                         <chart.icon className="mr-2 h-4 w-4" />
//                         <span>{chart.name}</span>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </SidebarContent>
//         </Sidebar>

//         {/* Main Content */}
//         <main className="flex-1 flex flex-col">
//           <header className="bg-[#FFFFFF] shadow px-6 py-4">
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//           </header>
//           <div className="flex-1 overflow-auto p-6">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {/* Sentiment Distribution Chart */}
//               {selectedCharts.includes("sentiment") && (
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Sentiment Distribution</CardTitle>
//                     <CardDescription>Analysis of emotions for all tickets</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <PieChartComponent sentimentData={[
//                       { sentiment: "😍 Very Happy", count: 2, fill: "hsl(var(--chart-1))" },
//                       { sentiment: "😄 Happy", count: 3, fill: "hsl(var(--chart-2))" },
//                       { sentiment: "😐 Neutral", count: 1, fill: "hsl(var(--chart-3))" },
//                       { sentiment: "🙁 Unhappy", count: 1, fill: "hsl(var(--chart-4))" },
//                       { sentiment: "😡 Very Unhappy", count: 2, fill: "hsl(var(--chart-5))" },
//                     ]} />
//                   </CardContent>
//                 </Card>
//               )}
              
//               {/* Emotional Trends Chart */}
//               {selectedCharts.includes("emotions") && (
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Emotional Trends</CardTitle>
//                     <CardDescription>Emotional trend over time</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <EmotionLineChart />
//                   </CardContent>
//                 </Card>
//               )}
              
//               {/* Ticket Categories Chart */}
//               {selectedCharts.includes("categories") && (
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Ticket Categories</CardTitle>
//                     <CardDescription>Distribution by ticket category</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <TicketCategorization />
//                   </CardContent>
//                 </Card>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }
"use client"

import { useState } from "react"
import { BarChart3, LineChart, PieChart } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

import EmotionLineChart from "@/components/EmotionLineChart/EmotionLineChart";
import TicketCategorization from "@/components/TicketCategorization/TicketCategorization";
import PieChartComponent from "@/components/PieChartComponent/PieChartComponent";

const chartTypes = [
  {
    id: "sentiment",
    name: "Sentiment Distribution",
    icon: PieChart,
    description: "Analysis of emotions for all tickets"
  },
  {
    id: "emotions",
    name: "Emotional Trends",
    icon: LineChart,
    description: "Emotional trend over time"
  },
  {
    id: "categories",
    name: "Ticket Categories",
    icon: BarChart3,
    description: "Distribution by ticket category"
  }
]

export default function DashboardLayout() {
  const [selectedCharts, setSelectedCharts] = useState<string[]>(["sentiment", "emotions", "categories"])

  return (
    <SidebarProvider>
      <div className="flex h-screen dark">
        {/* Sidebar */}
        <Sidebar className="sidebar">
          <SidebarHeader className="sidebar-header px-4 py-2">
            <h2 className="text-lg font-semibold">Sentiment Analysis</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Charts</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {chartTypes.map((chart) => (
                    <SidebarMenuItem key={chart.id}>
                      <SidebarMenuButton
                        onClick={() => {
                          setSelectedCharts([chart.id])
                        }}
                        isActive={selectedCharts.includes(chart.id)}
                        className={cn(
                          "sidebar-menu-item flex items-center p-2 rounded-lg transition-colors",
                          selectedCharts.includes(chart.id) && "sidebar-menu-item-active"
                        )}
                      >
                        <chart.icon className="mr-2 h-4 w-4" />
                        <span>{chart.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <header className="bg-[#FFFFFF] shadow px-6 py-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </header>
          <div className="flex-1 overflow-auto p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Sentiment Distribution Chart */}
              {selectedCharts.includes("sentiment") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Sentiment Distribution</CardTitle>
                    <CardDescription>Analysis of emotions for all tickets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChartComponent sentimentData={[
                      { sentiment: "😍 Very Happy", count: 2, fill: "hsl(var(--chart-1))" },
                      { sentiment: "😄 Happy", count: 3, fill: "hsl(var(--chart-2))" },
                      { sentiment: "😐 Neutral", count: 1, fill: "hsl(var(--chart-3))" },
                      { sentiment: "🙁 Unhappy", count: 1, fill: "hsl(var(--chart-4))" },
                      { sentiment: "😡 Very Unhappy", count: 2, fill: "hsl(var(--chart-5))" },
                    ]} />
                  </CardContent>
                </Card>
              )}
              
              {/* Emotional Trends Chart */}
              {selectedCharts.includes("emotions") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Emotional Trends</CardTitle>
                    <CardDescription>Emotional trend over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EmotionLineChart />
                  </CardContent>
                </Card>
              )}
              
              {/* Ticket Categories Chart */}
              {selectedCharts.includes("categories") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Ticket Categories</CardTitle>
                    <CardDescription>Distribution by ticket category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TicketCategorization />
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
