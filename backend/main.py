from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import predict
import os

app = FastAPI()

frontend_urls = os.getenv("FRONTEND_URLS")

if frontend_urls:
    origins = [url.strip() for url in frontend_urls.split(",") if url.strip()]
else:
    origins = [
        "http://localhost:3000",
        "http://localhost:5173"
    ]

print("Allowed CORS origins:", origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def test():
    return {"message":"Backend is working"}

app.include_router(predict.router)

