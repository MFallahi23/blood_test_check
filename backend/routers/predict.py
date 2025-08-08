from fastapi import APIRouter
from models.sample import CBCSample
import pandas as pd
import joblib
from huggingface_hub import hf_hub_download

router = APIRouter()

model_path = hf_hub_download(
    repo_id="max232003/cbc_analyzer_v0",  
    filename="cbc_ai_model.pkl",                
)

model = joblib.load(model_path)

@router.post("/predict")
def predict(sample:CBCSample):
    extreme_values = []

    if sample.wbc < 1 or sample.wbc > 100:
        extreme_values.append("WBC")
    if sample.rbc < 2 or sample.rbc > 8:
        extreme_values.append("RBC")
    if sample.hgb < 4 or sample.hgb > 20:
        extreme_values.append("HGB")
    if sample.hct < 15 or sample.hct > 60:
        extreme_values.append("HCT")
    if sample.mcv < 60 or sample.mcv > 120:
        extreme_values.append("MCV")
    if sample.mch < 15 or sample.mch > 40:
        extreme_values.append("MCH")
    if sample.mchc < 20 or sample.mchc > 40: 
        extreme_values.append("MCHC")
    if sample.rdw < 10 or sample.rdw > 25:
        extreme_values.append("RDW")
    if sample.plt < 10 or sample.plt > 1000:
        extreme_values.append("PLT")
    if sample.mpv < 5 or sample.mpv > 20:
        extreme_values.append("MPV")
    if sample.neut < 0 or sample.neut > 100:
        extreme_values.append("NEUT%")
    if sample.lymph < 0 or sample.lymph > 100:
        extreme_values.append("LYMPH%")
    if sample.mono < 0 or sample.mono > 20:
        extreme_values.append("MONO%")
    if sample.eo < 0 or sample.eo > 10:
        extreme_values.append("EO%")
    if sample.baso < 0 or sample.baso > 5:
        extreme_values.append("BASO%")
    

    if extreme_values:
        return {
            "label": "abnormal",
            "confidence": 0
        }



    input_data = pd.DataFrame([{
        "WBC": sample.wbc,
        "RBC": sample.rbc,
        "HGB": sample.hgb,
        "HCT": sample.hct,
        "MCV": sample.mcv,
        "MCH": sample.mch,
        "MCHC": sample.mchc,
        "RDW": sample.rdw,
        "PLT": sample.plt,
        "MPV": sample.mpv,
        "NEUT%": sample.neut,
        "LYMPH%": sample.lymph,
        "MONO%": sample.mono,
        "EO%": sample.eo,
        "BASO%": sample.baso,
    }])


    
    proba = model.predict_proba(input_data)
    p_normal = proba[0][0]        # Probability of class 0 ("Normal")

    if p_normal >= 0.75:
        label = "normal"
    elif p_normal >= 0.40:
        label = "suspicious"
    else:
        label = "abnormal"

    return {
        "label": label,
        "confidence": round(p_normal * 100, 1)  # probability of being normal
    }
