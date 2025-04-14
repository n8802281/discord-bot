# Discord Bot

This repository contains two custom Discord bots written in JavaScript using the `discord.js` library.  
Designed originally for use in a private friend server, these bots support music playback, voice channel interactions, and coordinated command execution across multiple bots.

---

## 🤖 Bot Overview

### `mybot.js` – Command and Coordination Bot

Handles user input, forwards commands to the music bot, and provides additional server-side utilities.

**Features:**
- Forwards music commands (e.g., play, pause, skip) to the music bot
- Joins voice channels to play custom audio snippets on command
- Sends private messages or responses based on user roles
- Responds to various server-specific triggers (moderation & entertainment)

---

### `mymusicbot.js` – Music Playback Bot

Provides full YouTube music streaming functionality via `ytdl-core`.

**Features:**
- Join/leave voice channels on request
- Add YouTube links to a playback queue
- Stream music in real-time
- Playback controls: pause, resume, skip, set volume
- Display current playback time

---

## 🧱 Technologies Used

- Node.js  
- `discord.js` v11~12  
- `ytdl-core` (for music streaming)  
- Discord Bot Token authorization system  
- Custom prefix command system

---

## 💡 Development Notes

- The two bots are designed to cooperate using clearly defined command prefixes.
- Audio files are stored locally and played through voice connections for personalized feedback.
- The bots were developed for hands-on practice with asynchronous event-driven programming in Node.js and to explore Discord’s API.

---

## 📦 Setup (for local use)

1. Clone the repository  
2. Install dependencies with `npm install`  
3. Configure your `config.json` with proper bot tokens and prefixes  
4. Run each bot in a separate terminal:
   ```bash
   node mybot.js
   node mymusicbot.js
