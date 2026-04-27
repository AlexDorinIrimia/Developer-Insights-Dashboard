# 📊 Developer Insights Dashboard

A full-stack data analytics dashboard built with **React (Vite)** and **Python (Flask)** using real-world survey data from the Stack Overflow Developer Survey.

It analyzes developer trends such as programming languages, job roles, salary distribution, remote work preferences, and more.

---

## 🚀 Features

- 📂 Load and analyze real survey data (CSV)
- 🔍 Filter insights by country and years of experience
- 📊 Visualize:
  - Top programming languages
  - Top developer roles
  - Country distribution
  - Remote work trends
- 💰 Average salary insights
- ⚡ Fast REST API backend with Python (Flask)
- 🎨 Interactive dashboard UI with React + Chart.js
- 🧠 Real-world dataset processing and cleaning

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- Chart.js
- CSS (custom styling)

### Backend
- Python 3
- Flask
- Pandas
- Flask-CORS

### Dataset
- Stack Overflow Developer Survey 2025 (CSV format)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```
git clone https://github.com/AlexDorinIrimia/Developer-Insights-Dashboard.git
cd Developer-Insights-Dashboard
```
### Backend Setup
```
cd backend
pip install flask flask-cors pandas
python app.py
```

### Frontend Setup
```
cd frontend
npm install
npm run dev
```

### 🧠 What I Learned

Handling real-world messy datasets (missing values, multi-select fields)
Data processing using Pandas
Integrating Python backend with React frontend
Creating interactive data visualizations
Debugging full-stack applications

### 📌 Key Challenges Solved

Cleaned and normalized survey dataset
Handled mixed-type CSV columns
Parsed multi-value fields (e.g., languages, roles)
Prevented frontend crashes from missing API fields
Optimized filtering and aggregation logic

### 👨‍💻 Author

Built as a full-stack data analytics project for learning and portfolio purposes.

