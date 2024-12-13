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

                    <EmotionLineChart />
          
              )}
              {/* Ticket Categories Chart */}
              {selectedCharts.includes("categories") && (
    
                    <TicketCategorization />
      
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
