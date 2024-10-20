import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell } from 'lucide-react'

const medicationReminderData = [
  { id: 1, medicine: 'Content', subContent: 'Content', dose: '255 - 500' },
  { id: 2, medicine: 'Content', subContent: 'Content', dose: '15' },
  { id: 3, medicine: 'Content', subContent: 'Content', dose: '25mil/ml' },
  { id: 4, medicine: 'Content', subContent: 'Content', dose: '95mcg' },
]

const prescriptionHistoryData = [
  { id: 1, medicineName: 'Content', dose: 'Content', pillIntake: 'Content' },
  { id: 2, medicineName: 'Content', dose: 'Content', pillIntake: 'Content' },
]

export default function PrescriptionsPage() {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">MEDICATION REMINDER</CardTitle>
          <Bell className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicine</TableHead>
                <TableHead>Dose</TableHead>
                <TableHead>Pill Intake</TableHead>
                <TableHead>Check</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicationReminderData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div>{row.medicine}</div>
                    <div className="text-sm text-muted-foreground">{row.subContent}</div>
                  </TableCell>
                  <TableCell>{row.dose}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Card className="flex-grow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Prescription History</CardTitle>
            <Bell className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Check</TableHead>
                  <TableHead>Medicine Name</TableHead>
                  <TableHead>Dose</TableHead>
                  <TableHead>Pill Intake</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prescriptionHistoryData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </TableCell>
                    <TableCell>{row.medicineName}</TableCell>
                    <TableCell>{row.dose}</TableCell>
                    <TableCell>{row.pillIntake}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Pill Navigator</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4 mb-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-2">
                  <p className="text-sm">Which pill would you like to find?</p>
                </div>
              </div>
            </ScrollArea>
            <Input placeholder="Enter Medicine Name" className="w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}