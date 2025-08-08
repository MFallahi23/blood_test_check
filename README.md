# Blood Test Checker — AI Web App
This project is a machine learning–powered web application designed to assist in analyzing blood test results. It predicts whether a test result may contain anomalies or require further review. While this is a first experimental project, it served as a valuable learning experience in deploying an end-to-end ML application.

## Tech Stack
Frontend
- React + TypeScript + Vite
- Deployed on Vercel
Backend
- FastAPI + scikit-learn (Random Forest model)
- Deployed on Render
Other Features
- REST API integration
- Environment variable management (.env)
- CORS handling
- Basic data preprocessing and ML inference logic

## How It Works
- The user fills out a form with values from a Complete Blood Count (CBC).
- The frontend sends the data to the FastAPI backend via a POST request.
- The backend runs the data through a trained Random Forest model.
- A prediction is returned, flagging the case as "normal" or "requires review".

⚠️ Note: Response time might be slow on first load due to Render's server sleeping policy on free plans.

## What I Learned
- How to train and use a Random Forest model for classification
- How to generate synthetic training data
- How to integrate a trained ML model inside a FastAPI backend
- How to build and deploy a complete fullstack ML app

## I'm Open To...
I'm actively looking to build more practical projects, in either:
- Machine Learning
- Fullstack Web Development

Feel free to give feedback, suggest improvements, or reach out if you want to collaborate!
