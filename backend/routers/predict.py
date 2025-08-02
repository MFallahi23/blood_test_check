from fastapi import APIRouter
from models.sample import CBCSample
import pandas as pd
import joblib

router = APIRouter()
model = joblib.load("ml/cbc_ai_model.pkl")

@router.post("/predict")
def predict(sample:CBCSample):
    input_data = pd.DataFrame([{
        "WBC": sample.WBC,
        "RBC": sample.RBC,
        "HGB": sample.HGB,
        "HCT": sample.HCT,
        "MCV": sample.MCV,
        "MCH": sample.MCH,
        "MCHC": sample.MCHC,
        "RDW": sample.RDW,
        "PLT": sample.PLT,
        "MPV": sample.MPV,
        "NEUT%": sample.NEUT_percent,
        "LYMPH%": sample.LYMPH_percent,
        "MONO%": sample.MONO_percent,
        "EO%": sample.EO_percent,
        "BASO%": sample.BASO_percent,
    }])
    
    proba = model.predict_proba(sample)
    p_normal = proba[0][0]        # Probability of class 0 ("Normal")

    if p_normal >= 0.75:
        label = "Normal"
    elif p_normal >= 0.40:
        label = "Suspicious: suggest review"
    else:
        label = "Needs Review"

    return {
        "label": label,
        "confidence": round(p_normal * 100, 1)  # probability of being normal
    }
