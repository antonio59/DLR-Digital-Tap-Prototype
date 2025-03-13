# DLR Digital Tap

A digital solution for improving the DLR (Docklands Light Railway) travel experience in London. This prototype demonstrates a modern approach to tap-in/tap-out functionality with real-time station detection and community support features.

## Features

- 🚉 Real-time nearest station detection
- 🎫 Digital tap-in/tap-out functionality
- 🔍 Smart station search with suggestions
- 👍 Community support voting system
- 📱 Mobile-responsive design
- 🌐 Real-time data synchronization with Firebase

## Tech Stack

- Next.js
- TypeScript
- Firebase (Firestore)
- Tailwind CSS
- Shadcn/ui Components

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/DLR-Digital-Tap-Prototype.git
cd DLR-Digital-Tap-Prototype
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Firestore database
   - Add a web app to your Firebase project
   - Copy the Firebase configuration

4. Create a `.env.local` file in the root directory with your Firebase configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── components/       # React components
  │   ├── dlr-digital-tap-client.tsx
  │   └── SupportVote.tsx
  ├── firebase/        # Firebase configuration
  └── pages/           # Additional pages
```

## Features in Detail

### Digital Tap System
- Smart station detection
- Intuitive tap-in/tap-out interface
- Station search with auto-suggestions
- Journey tracking

### Community Support System
- Real-time vote counting
- Share functionality
- Local storage for vote persistence
- Firebase integration for live updates

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
