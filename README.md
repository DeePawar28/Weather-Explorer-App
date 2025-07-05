# 🌦️ Weather Explorer App

**Weather Explorer** is a full-stack application that enables users to:

- 🔍 Search real-time weather by city name  
- 🗓️ View a detailed 5-day weather forecast  
- 📍 Display the city's location using Google Maps  
- 🎥 Discover top YouTube videos related to the searched city  
- 📝 Save recent searches to MongoDB with full CRUD support  
- ✏️ Edit or delete any saved search entries  
- 📄 Download all search history in JSON format  

Built with modern web technologies including **React**, **Node.js**, **Express**, and **MongoDB**, and integrates with third-party APIs like **OpenWeatherMap**, **Google Maps**, and **YouTube Data API**.

---
## ▶️ Demo

![Alt text](Demo.gif)

---



## 🚀 Technology Stack

| Layer      | Technologies Used                                  |
|------------|-----------------------------------------------------|
| Frontend   | React.js, Tailwind CSS, Axios                      |
| Backend    | Node.js, Express.js, Mongoose                      |
| Database   | MongoDB Atlas                                      |
| APIs       | OpenWeatherMap, Google Maps, YouTube Data API     |
| Libraries  | @react-google-maps/api, dotenv, cors, body-parser |

---

## 🛠️ Prerequisites

Before setting up the project, make sure you have:

- Node.js and npm installed  
- A free MongoDB Atlas cluster  
- API keys from:
  - Google Cloud Console (Maps + YouTube)
  - OpenWeatherMap  
- Basic understanding of React and Express  

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Backend Environment

Create a `.env` file inside the `backend/` directory and add:

```
MONGO_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Start Backend Server

```bash
npm start
```

---

### 5. Set Up Frontend

```bash
cd ../frontend
npm install
```

### 6. Configure Frontend Environment

Create a `.env` file inside the `frontend/` directory and add:

```
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
```

---

### 7. Start Frontend Server

```bash
npm start
```

---

## 🌍 Explore the App

Once the frontend and backend servers are running, you can explore weather conditions, forecasts, maps, and videos by simply searching for a city.
