
Built by https://www.blackbox.ai

---

```markdown
# Link Tracker Application

## Project Overview
The Link Tracker application is a simple web app built with Node.js and Express that allows users to generate tracking links for URLs and capture location data sent by the users of these links. The core functionality includes generating tracking links, receiving location data, and displaying all tracked locations.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd link-tracker
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/en/) installed. Then, run the following command:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```
   The application will be running at `http://localhost:3000`.

## Usage
After starting the server, you can access the application by navigating to `http://localhost:3000` in your web browser.

- **Generate Tracking Link**: Send a POST request to `/api/generate-link` with a JSON body containing the `originalUrl`:
   ```json
   {
      "originalUrl": "http://example.com"
   }
   ```
   This will return a tracking link that can be shared.

- **Track Location**: Users can send their location data by making a POST request to `/api/track-location` with the following JSON body:
   ```json
   {
      "latitude": 37.7749,
      "longitude": -122.4194,
      "timestamp": "2023-10-15T12:00:00Z"
   }
   ```
   This data will be stored in memory.

- **View Tracked Locations**: You can view all tracked locations by navigating to `/locations` in your browser.

## Features
- Generate unique tracking links for any URL.
- Track and store geographical location data with timestamps.
- View all stored locations through a simple interface.

## Dependencies
The application uses the following npm package:

* **express**: Web framework for Node.js, required to create the server.
  
You can check the full list of dependencies in `package.json`.

## Project Structure
```plaintext
.
├── node_modules/          # Project dependencies
├── package.json           # NPM package configuration
├── package-lock.json      # NPM lock file for dependency versions
└── server.js              # Main application file
└── public/                # Static files (HTML, CSS, JS)
    ├── index.html         # Main page
    ├── track.html         # Tracking page
    └── locations.html      # Locations display page
```

## License
This project is open-source and available under the MIT License.
```