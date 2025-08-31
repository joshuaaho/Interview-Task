import { io } from "socket.io-client";
import { MAX_ATTEMPTS } from "../server/constants";
import { formatScore } from "./utils/formatScore";

console.log("Starting client...");

let clientGuess: any = "";

// Connect to the Socket.IO server
const socket = io("http://localhost:3000");

// Handle connection
socket.on("connect", () => {
  console.log("✅ Connected to the server");
});

// Handle responses from the server
socket.on("GAME_STARTED", (msg) => {
  clientGuess = prompt("Enter your guess: ");
  socket.emit("GUESS_MADE", clientGuess);
});

socket.on("GUESS_EVALUATED", (msg) => {
  console.log(formatScore(clientGuess, msg));
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
