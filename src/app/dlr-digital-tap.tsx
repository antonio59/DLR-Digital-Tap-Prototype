import { TrainIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DLRDigitalTapClient from './dlr-digital-tap-client'
import SupportVote from './src/components/SupportVote'

const dlrStations = [
  "Abbey Road", "All Saints", "Bank", "Beckton", "Beckton Park", "Blackwall",
  "Bow Church", "Canning Town", "Canary Wharf", "Custom House (for ExCel)",
  "Cutty Sark (for Maritime Greenwich)", "Cyprus", "Deptford Bridge", "Devons Road",
  "Elverson Road", "East India", "Gallions Reach", "Greenwich", "Heron Quays",
  "Island Gardens", "King George V", "Langdon Park", "Lewisham", "Limehouse",
  "Mudchute", "Pudding Mill Lane", "Poplar", "Pontoon Dock", "Prince Regent",
  "Royal Albert", "Royal Victoria", "Shadwell", "South Quay", "Stratford",
  "Stratford High Street", "Stratford International", "Tower Gateway", "Westferry",
  "West Ham", "West Silvertown", "Woolwich Arsenal"
]

export default function DLRDigitalTap() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrainIcon className="h-6 w-6" />
          DLR Digital Tap
        </CardTitle>
        <CardDescription>Tap in or out digitally on DLR routes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DLRDigitalTapClient stations={dlrStations} />
        <SupportVote />
      </CardContent>
    </Card>
  )
}
