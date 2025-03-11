# AI Development Project
- This repository contains a AI application with a Python backend and React frontend.
- Overview
- This project implements an AI chatbot application using the Groq API. The system consists of:

FastAPI backend for AI model integration
React frontend for user interaction
MLflow for experiment tracking and model management

![image](https://github.com/user-attachments/assets/92c2fef5-c07d-4806-a62b-ca3cc48e041f)


-Prerequisites
  Python 
  Node.js and npm
  Git
  Groq API account

Installation and Setup
Backend Setup

## Step 1: Install Python

Download and install Python from python.org
Ensure you check the option Add Python to PATH during installation

## Step 2: Clone the Repository
```git clone https://github.com/HarishVerma-UI/Explore-Ai-01```

## Step 3: Navigate to the Project Folder
```cd Explore-Ai-01```

## Step 4: Create a Virtual Environment
```python -m venv ai-env```

## Step 5: Activate the Virtual Environment
```.\ai-env\Scripts\activate```

## Step 6: Install Required Libraries
```pip install -r req.txt```

## Step 7: Create a Groq Account

Visit Groq https://console.groq.com/keys  Cloud and sign up or log in
After logging in, generate an API key

## Step 8: Configure Environment Variables
Add api key on .env file 
```
GROQ_API_KEY="<API KEY>"
```

## Step 9: Run the Backend Server 
```cd backend
uvicorn main:app --reload
```

## Step 10: Test backend API
```Using curl:
curl -X POST http://localhost:8000/start-session
Expected response:
jsonCopy{"session_id": "uuid-here"}
You can send messages using the session ID.
```

# Frontend Setup

## Step 1: Install Node.js

Download and install Node.js from nodejs.org

## Step 2: Navigate to the Frontend Directory
```cd frontend```

## Step 3: Install Dependencies
```npm install```

## Step 4: Start the Frontend Development Server
```npm start
The application should now be running at http://localhost:3000
```

## Additional Setup (Optional)
MLflow Setup

## Step 1: Install MLflow
```pip install mlflow```

## Step 2: Start MLflow Server
```mlflow server --host 127.0.0.1 --port 5000 ```

## Step 3: Access MLflow UI
```Open your browser and navigate to http://localhost:5000```

API Endpoints

- POST /start-session: Starts a new chat session
- POST /chat: Sends a message to the AI model
