# YouTube Distraction Chrome Extension

A Chrome extension that helps you stay focused on your study topics while watching YouTube videos. You can add your study topic name, and the extension uses the GROQ LLM API in the background to check if the video title and description match your study topic. If the video is related, you can watch it; otherwise, the video is blocked to help you avoid distractions.

## Features

- Add your study topic to focus on.
- Uses GROQ LLM API to analyze video title and description.
- Blocks videos that do not match your study topic.
- Built with React and Vite.
- Environment variables managed securely using `.env` and Vite.

## Installation

1. Clone the repository.
2. Create a `.env` file in the project root with your GROQ API key:

   ```
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Build the extension for production:

   ```bash
   npm run build
   ```

## Usage

- Load the unpacked extension in Chrome from the `dist` folder after building.
- Add your study topic in the extension popup.
- When you navigate to a new YouTube video, the extension checks if the video matches your study topic using the GROQ LLM.
- If the video is unrelated, it will be blocked with a message.

## Project Structure

- `src/content/content.js`: Content script that checks video relevance using GROQ API.
- `src/popup/`: React components for the extension popup UI.
- `.env`: Environment variables file (not committed to version control).
- `vite.config.js`: Vite configuration.
- `manifest.json`: Chrome extension manifest.

## Notes

- Make sure to keep your `.env` file secure and do not commit it to version control.
- The API key is injected at build time by Vite.

## License

MIT License
