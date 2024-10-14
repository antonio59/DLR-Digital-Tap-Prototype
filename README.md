# DLR Digital Tap

## Overview

DLR Digital Tap is a prototype for a digital tap-in/tap-out system designed for the Docklands Light Railway (DLR) in London. This project aims to reduce queues at DLR stations by allowing users to digitally tap in and out using their mobile devices.

See it in action https://vimeo.com/1019170159?share=copy#t=0

## Features

- Digital tap-in and tap-out functionality
- Station search with autocomplete
- Simulated nearest station detection
- Real-time status updates
- Responsive design for mobile use

## Technology Stack

- React
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dlr-digital-tap.git
   ```

2. Navigate to the project directory:
   ```
   cd dlr-digital-tap
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. When you open the app, you'll see a simulated "nearest station" alert.
2. Use the search box to find your starting station for tap-in.
3. Select a station from the autocomplete suggestions.
4. Click the "Tap In" button to start your journey.
5. To end your journey, use the search box again to find your destination station.
6. Click the "Tap Out" button to complete your journey.

## Future Enhancements

- Integration with real geolocation services for accurate nearest station detection
- Backend integration for real-time fare calculation
- User authentication and account management
- Integration with payment systems
- Offline mode for areas with poor network coverage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Disclaimer

This is a prototype and is not affiliated with or endorsed by Transport for London or the Docklands Light Railway. It is intended for demonstration purposes only.
