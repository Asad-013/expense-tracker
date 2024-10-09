"use client"

import { useState } from 'react'
import ExpenseForm from '@/components/ExpenseForm'
import ExpenseList from '@/components/ExpenseList'
import ExpenseChart from '@/components/ExpenseChart'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [expenses, setExpenses] = useState([])
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date)
    const start = startDate ? new Date(startDate) : new Date(0)
    const end = endDate ? new Date(endDate) : new Date()
    return expenseDate >= start && expenseDate <= end
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Expense Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ExpenseForm onAddExpense={addExpense} />
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Filter Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <ExpenseList expenses={filteredExpenses} />
          </div>
          <div>
            <ExpenseChart expenses={filteredExpenses} />
          </div>
        </div>
      </div>
    </div>
  )
}