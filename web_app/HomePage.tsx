import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Phone, Pill, Activity, ChevronLeft, ChevronRight, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const familyMembers = [
  { name: 'Member 1', image: '/placeholder.svg?height=50&width=50' },
  { name: 'Member 2', image: '/placeholder.svg?height=50&width=50' },
  { name: 'Member 3', image: '/placeholder.svg?height=50&width=50' },
  { name: 'Chris Pratt', image: '/placeholder.svg?height=50&width=50' },
  { name: 'Member 5', image: '/placeholder.svg?height=50&width=50' },
  { name: 'Member 6', image: '/placeholder.svg?height=50&width=50' },
  { name: 'Member 7', image: '/placeholder.svg?height=50&width=50' },
]

const reportData = [
  { username: 'Username 1', range: '255 - 500', value: '700' },
  { username: 'Username 2', range: '15', value: '12' },
  { username: 'Username 3', range: '25mil/ml', value: '19mil/ml' },
  { username: 'Username 4', range: '95mcg', value: '112mcg' },
]

const heartRateData = [
  { time: '09:00', rate: 72 },
  { time: '12:00', rate: 78 },
  { time: '15:00', rate: 75 },
  { time: '18:00', rate: 80 },
]

export default function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">19-10-24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Call Consultancy</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+120-7769690</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medicines</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Pills</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vitals</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">BP-116/75</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Family Records</h2>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex space-x-2 overflow-x-auto">
            {familyMembers.map((member, index) => (
              <Avatar key={index} className="w-12 h-12">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Reports History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Check</TableHead>
              <TableHead>CBC</TableHead>
              <TableHead>Range</TableHead>
              <TableHead>Your Values</TableHead>
              <TableHead className="text-right">Check</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>{row.username[0]}</AvatarFallback>
                    </Avatar>
                    {row.username}
                  </div>
                </TableCell>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>CT Scan</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src="/placeholder.svg?height=200&width=200" alt="CT Scan" width={200} height={200} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Foods to avoid</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around">
            <div className="text-center">
              <Image src="/placeholder.svg?height=50&width=50" alt="Burgers" width={50} height={50} />
              <p>Burgers</p>
            </div>
            <div className="text-center">
              <Image src="/placeholder.svg?height=50&width=50" alt="Fries" width={50} height={50} />
              <p>Fries</p>
            </div>
            <div className="text-center">
              <Image src="/placeholder.svg?height=50&width=50" alt="Pasta" width={50} height={50} />
              <p>Pasta</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Heart Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={heartRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>My Therapist</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="bg-blue-100 rounded-lg p-2">
                  <p className="text-sm">Ipsum reprehenderit ea nulla velit dolore laborum in id sint tempor et magna tempor veniam. Pariatur cillum venia dolore</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="bg-blue-100 rounded-lg p-2">
                  <p className="text-sm">Ipsum reprehenderit ea nulla velit dolore laborum in id sint tempor et magna tempor veniam. Pariatur cillum venia dolore</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="bg-blue-100 rounded-lg p-2">
                  <p className="text-sm">Cupidatat exercitation</p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="flex items-center mt-4">
            <Input placeholder="How do you feel?" className="flex-grow mr-2" />
            <Button>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}