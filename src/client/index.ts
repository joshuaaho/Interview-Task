import { io } from "socket.io-client";
import promptSync from "prompt-sync";
import { formatScore } from "./utils/formatScore";
import { SERVER_URL } from "./constants";

console.log("Starting client...");
const prompt = promptSync();
let clientGuess: any = "";

// Connect to the Socket.IO server
const socket = io(SERVER_URL);

// Handle connection
socket.on("connect", () => {
  console.log("✅ Connected to the server");
});

socket.on("GAME_STARTED", (msg) => {
  clientGuess = prompt("Enter your guess: ");
  socket.emit("GUESS_MADE", clientGuess);
});

socket.on("GUESS_EVALUATED", (msg) => {

  console.log(formatScore(clientGuess, msg));

  // Ask for another guess, game not over at this point
  clientGuess = prompt("Enter your guess: ");
  socket.emit("GUESS_MADE", clientGuess);
});

socket.on("CLIENT_WON", () => {
  console.log("You won!");
});

socket.on("CLIENT_LOST", (msg) => {
  console.log("You lost! The word was: ", msg);
});

// Handle connection errors
socket.on("connect_error", (error) => {
  console.log("❌ Connection error:", error.message);
});

// Handle disconnection
socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

console.log("Client setup complete, waiting for connection...");
