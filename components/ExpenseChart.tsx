"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function ExpenseChart({ expenses }) {
  const chartData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = 0
    }
    acc[date] += expense.amount
    return acc
  }, {})

  const formattedChartData = Object.entries(chartData).map(([date, amount]) => ({
    date,
    amount
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={formattedChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}