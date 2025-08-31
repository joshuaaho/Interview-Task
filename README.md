# Wordle Interview Project

## Project Status

✅ **Task One: Completed**  
✅ **Task Two: Completed**

## Getting Started


### Installation
```bash
npm install
```

### Running the Application

#### Start the Server
```bash
npm run server
```

#### Start the Client
```bash
npm run client
```

### Multi-Player Support
🎮 **You can run multiple Wordle games simultaneously!**

- Start **one server** using `npm run server`
- Run **multiple clients** in separate terminals using `npm run client`
- Each client will have their own independent Wordle game
- Players can start, play, and finish games at their own pace

### How to Play
1. Start the server first using `npm run server`
2. In a separate terminal, start the client using `npm run client`
3. **Optional**: Open additional terminals and run more clients for multiple simultaneous games
4. Follow the on-screen prompts to play Wordle
5. Guess 5-letter words to find the target word


### Game Rules
- **H** = Correct letter in correct position (Hit)
- **P** = Correct letter in wrong position (Present)
- **M** = Letter not in the word (Miss)

## Known Issues

### Bugs Currently Aware Of:
1. **Non-5-letter input validation**: Users entering a non-5-letter word will result in an error

## Architecture

This project uses a client-server architecture with Socket.IO for real-time communication:

- **Server** (`src/server/index.ts`): Handles game logic, word validation, and scoring
- **Client** (`src/client/index.ts`): Provides user interface and connects to server

## Available Scripts

- `npm run server` - Start the Wordle game server
- `npm run client` - Start the Wordle game client
- `npm test` - Run the test suite

## Technologies Used

- TypeScript
- Node.js
- Socket.IO
- Vitest (for testing)
