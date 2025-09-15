# 🌍 WanderWell  

WanderWell is a full-stack travel exploration platform designed to help users discover and learn about countries across the globe.  
With features like an **interactive world map**, **searchable country pages**, and **rich imagery powered by the Unsplash API**, users can explore cultural norms, tourist attractions, transportation options, and more.  

Built collaboratively by a team of four developers, WanderWell combines an engaging **React frontend** with a robust **Flask backend** to deliver a seamless travel discovery experience.  

---

## ✨ Features  

- 🗺️ **Interactive Map**: Click on any country to access detailed information.  
- 🔎 **Search & Filter**: Quickly find countries or cities using the search bar, or filter by type.  
- 🏞️ **Country Pages**: Rich data including language, average temperature, and travel tips.  
- 📸 **Dynamic Images**: Integrates with the **Unsplash API** for high-quality country images with proper attribution.  
- 📊 **Sorting & Pagination**: Browse by popularity, A–Z, Z–A, with pagination for a smooth experience.  
- 🔗 **Direct Links**: Access a country page by clicking its image or searching by name/code.  

---

## 🛠️ Tech Stack  

### Frontend  
- **React** (UI)  
- **React Router** (navigation)  
- **Leaflet.js** (interactive map)  
- **Fetch API** (data from backend)  

### Backend  
- **Flask** (API server)  
- **Flask-CORS** (cross-origin requests)  
- **Python Requests** (fetching Unsplash API data)  
- **GeoJSON** (map data)  
- **dotenv** (secure environment variables)  

### APIs  
- **Unsplash API** – country images with attribution  
- (Optional) Additional free travel APIs for culture, attractions, and transport  

---

##  🚀 Installation
1. Clone the repository
git clone https://github.com/amasiatu/WanderWell.git
cd WanderWell

2. Backend Setup (Flask)
cd backend
python3 -m venv .venv
source .venv/bin/activate   # Mac/Linux
.venv\Scripts\activate      # Windows

pip install -r requirements.txt


Create a .env file in /backend with your Unsplash key:

UNSPLASH_ACCESS_KEY=your_access_key_here


Run the backend:

python app/routes.py


Backend runs on http://127.0.0.1:5000

3. Frontend Setup (React)
cd frontend/client
npm install
npm start


Frontend runs on http://localhost:3000

## 🤝 Contribution

This project was built collaboratively by a team of four:

Chinyere Amasiatu

Adriana Lorendo

Rohan Raju

Tanvi Naik

We followed GitHub flow for version control, using feature branches and pull requests for code integration.

## 📸 Attribution

Images are provided by the Unsplash API.
Photographers are credited wherever their work is displayed.

## 📌 Future Enhancements

Add cultural tips, do’s & don’ts, and booking links.

Improve search with fuzzy matching.

User accounts to save favorite destinations.

Integration with flight & hotel booking APIs.
