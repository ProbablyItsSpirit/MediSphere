import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, Phone, Pencil } from 'lucide-react'
import { Button } from "@/components/ui/button"

const tableData = [
  { id: 1, username: 'Username', content: 'Content', tag: 'New tag' },
  { id: 2, username: 'Username', content: 'Content', tag: 'New tag' },
  { id: 3, username: 'Username', content: 'Content', tag: 'New tag' },
  { id: 4, username: 'Username', content: 'Content', tag: 'New tag' },
  { id: 5, content: 'Content', tag: 'New tag' },
  { id: 6, content: 'Content', tag: 'New tag' },
  { id: 7, content: 'Content', tag: 'New tag' },
  { id: 8, content: 'Content', tag: 'New tag' },
  { id: 9, content: 'Content', tag: 'New tag' },
]

const chatMessages = [
  { id: 1, text: 'Ipsum reprehenderit ea nulla velit dolore laborum in id sint tempor et magna tempor veniam. Pariatur cillum venia dolore' },
  { id: 2, text: 'Ipsum reprehenderit ea nulla velit dolore laborum in id sint tempor et magna tempor veniam. Pariatur cillum venia dolore' },
  { id: 3, text: 'Cupidatat exercitation' },
  { id: 4, text: 'Mollit excepteur eiusmod conse' },
  { id: 5, text: 'Exercitation ea id' },
]

export default function DoctorPage() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-8">
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
      </div>

      <div className="flex space-x-4">
        <Card className="flex-grow">
          <CardHeader>
            <CardTitle>Patient Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Check</TableHead>
                  <TableHead>Avatar & Text</TableHead>
                  <TableHead>Text</TableHead>
                  <TableHead>Tag</TableHead>
                  <TableHead>Icon</TableHead>
                  <TableHead>Text</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        {row.username || 'Content'}
                      </div>
                    </TableCell>
                    <TableCell>{row.content}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {row.tag}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Virtual Assistance</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="bg-blue-100 rounded-lg p-2">
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex items-center mt-4">
              <Input placeholder="How do you feel?" className="flex-grow mr-2" />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>DOCTOR</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="What can I help you with?" className="w-full" />
        </CardContent>
      </Card>
    </div>
  )
}