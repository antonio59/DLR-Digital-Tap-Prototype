'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogInIcon, LogOutIcon, MapPinIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface DLRDigitalTapClientProps {
  stations: string[]
}

export default function DLRDigitalTapClient({ stations = [] }: DLRDigitalTapClientProps) {
  const [currentStation, setCurrentStation] = useState('')
  const [destinationStation, setDestinationStation] = useState('')
  const [status, setStatus] = useState('')
  const [isTappedIn, setIsTappedIn] = useState(false)
  const [nearestStation, setNearestStation] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    const detectNearestStation = () => {
      if (stations.length > 0) {
        const randomStation = stations[Math.floor(Math.random() * stations.length)]
        setNearestStation(randomStation)
      }
    }

    detectNearestStation()
    const intervalId = setInterval(detectNearestStation, 30000)

    return () => clearInterval(intervalId)
  }, [stations])

  useEffect(() => {
    if (searchTerm && stations.length > 0) {
      const filtered = stations.filter(station => 
        station.toLowerCase().includes(searchTerm.toLowerCase()) &&
        station !== (isTappedIn ? currentStation : '')
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [searchTerm, isTappedIn, currentStation, stations])

  const handleStationSelect = (station: string) => {
    if (isTappedIn) {
      setDestinationStation(station)
    } else {
      setCurrentStation(station)
    }
    setSearchTerm('')
    setSuggestions([])
  }

  const handleTapIn = () => {
    if (!currentStation) {
      setStatus('Please select a station to tap in')
      return
    }
    setIsTappedIn(true)
    setStatus(`Successfully tapped in at ${currentStation}`)
    setSearchTerm('')
  }

  const handleTapOut = () => {
    if (!destinationStation) {
      setStatus('Please select a station to tap out')
      return
    }
    setIsTappedIn(false)
    setStatus(`Successfully tapped out at ${destinationStation}`)
    setCurrentStation('')
    setDestinationStation('')
    setSearchTerm('')
  }

  if (stations.length === 0) {
    return <div>Loading stations...</div>
  }

  return (
    <>
      {nearestStation && (
        <Alert>
          <MapPinIcon className="h-4 w-4" />
          <AlertTitle>Nearest DLR Station</AlertTitle>
          <AlertDescription>
            You appear to be near {nearestStation}
          </AlertDescription>
        </Alert>
      )}
      <div className="relative">
        <Input
          type="text"
          placeholder={isTappedIn ? "Search for destination station" : "Search for station to tap in"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
            {suggestions.map((station) => (
              <li
                key={station}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStationSelect(station)}
              >
                {station === nearestStation ? `${station} (Nearest)` : station}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center">
        {!isTappedIn ? (
          <Button onClick={handleTapIn} className="w-full" disabled={!currentStation}>
            <LogInIcon className="mr-2 h-4 w-4" /> Tap In at {currentStation || 'selected station'}
          </Button>
        ) : (
          <Button onClick={handleTapOut} className="w-full" disabled={!destinationStation}>
            <LogOutIcon className="mr-2 h-4 w-4" /> Tap Out at {destinationStation || 'selected station'}
          </Button>
        )}
      </div>
      {status && (
        <p className="text-sm text-center mt-4" aria-live="polite">
          {status}
        </p>
      )}
    </>
  )
}
