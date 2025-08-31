import http from "http";
import { Server } from "socket.io";
import { pickRandomWord } from "./utils/pickRandomWord";
import calculateWordScore from "./utils/calculateWordScore";
import { MAX_ATTEMPTS } from "./constants";
import isCorrectGuess from "./utils/isCorrectGuess";

export type LetterScore = "P" | "M" | "H";

export type WordScore = [
  LetterScore,
  LetterScore,
  LetterScore,
  LetterScore,
  LetterScore
];

const clientsGameState = {};
const server = http.createServer();

const io = new Server(server);

// Handle incoming connections
io.on("connection", (socket) => {
  console.log("A user connected");

  clientsGameState[socket.id] = {word: pickRandomWord(), attempts: MAX_ATTEMPTS};

  socket.emit("GAME_STARTED");
  // Handle custom events
  socket.on("GUESS_MADE", (msg) => {
    const score = calculateWordScore(msg, clientsGameState[socket.id].word);

    if (isCorrectGuess(score)) {
      return socket.emit("CLIENT_WON");
    }
    if (clientsGameState[socket.id].attempts === 1) {
      return socket.emit("CLIENT_LOST", clientsGameState[socket.id].word);
    }

    clientsGameState[socket.id].attempts--;


    return socket.emit("GUESS_EVALUATED", score);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
