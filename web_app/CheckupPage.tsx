import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Droplet, Activity } from 'lucide-react'

const reportsData = [
  { id: 1, test: 'CBC Blood test', date: '02/04/2021' },
  { id: 2, test: 'Diabetes Test', date: '02/04/2021' },
  { id: 3, test: 'CT Scan (Full Body)', date: '02/04/2021' },
  { id: 4, test: 'MRI Brain', date: '02/04/2021' },
]

const lineChartData = [
  { name: 'Sep', bloodPressure: 120, hemoglobin: 14, sugarLevel: 100 },
  { name: 'Oct', bloodPressure: 130, hemoglobin: 15, sugarLevel: 110 },
  { name: 'Nov', bloodPressure: 125, hemoglobin: 14.5, sugarLevel: 105 },
]

const pieChartData = [
  { name: 'September', value: 30 },
  { 
    name: 'October', value: 40 },
  { name: 'November', value: 30 },
]

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

export default function CheckupPage() {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Reports History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Check</TableHead>
                <TableHead>TEST</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Suggestions</TableHead>
                <TableHead className="text-right">Check</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportsData.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </TableCell>
                  <TableCell>{report.test}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">
                    <Activity className="h-4 w-4 inline-block" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Health Metrics Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bloodPressure" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="hemoglobin" stroke="#82ca9d" />
                <Line type="monotone" dataKey="sugarLevel" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-around">
        <div className="flex items-center">
          <Droplet className="h-8 w-8 mr-2 text-blue-500" />
          <span className="text-lg font-semibold">Blood Sugar Check Up</span>
        </div>
        <div className="flex items-center">
          <Activity className="h-8 w-8 mr-2 text-red-500" />
          <span className="text-lg font-semibold">Blood Pressure Check Up</span>
        </div>
      </div>
    </div>
  )
}