import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone, User } from 'lucide-react'
import Image from 'next/image'
import HomePage from './HomePage'
import CheckupPage from './CheckupPage'
import PrescriptionsPage from './PrescriptionsPage'
import DoctorPage from './DoctorPage'

export default function App() {
  const [activeTab, setActiveTab] = React.useState('Home')

  const navItems = ['Home', 'Checkup', 'Prescriptions', 'Doctor']

  const renderPage = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage />
      case 'Checkup':
        return <CheckupPage />
      case 'Prescriptions':
        return <PrescriptionsPage />
      case 'Doctor':
        return <DoctorPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="container mx-auto p-4 bg-white">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="Medbay Logo" width={40} height={40} className="mr-2" />
          <span className="text-2xl font-bold text-blue-500">Medbay</span>
        </div>
        <nav className="flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item}
              variant={activeTab === item ? "default" : "outline"}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </Button>
          ))}
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {renderPage()}
    </div>
  )
}