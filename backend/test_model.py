import joblib
import numpy as np
import pandas as pd

model = joblib.load("models/cbc_ai_model.pkl")

data = {
    'WBC': [6.5],     # x10^9/L
    'RBC': [5.1],     # x10^12/L
    'HGB': [15.0],    # g/dL
    'HCT': [44.0],    # %
    'MCV': [87.0],    # fL
    'MCH': [29.0],    # pg
    'MCHC': [33.5],   # g/dL
    'RDW': [13.0],    # %
    'PLT': [250.0],   # x10^9/L
    'MPV': [9.5],     # fL
    'NEUT%': [55.0],  # %
    'LYMPH%': [32.0], # %
    'MONO%': [7.0],   # %
    'EO%': [2.0],     # %
    'BASO%': [1.0]    # %
}


sample = pd.DataFrame(data)

proba = model.predict_proba(sample)
p_normal = proba[0][0]        # Probability of class 0 ("Normal")

if p_normal >= 0.75:
    print(f"✅ Normal — confidence {p_normal*100:.1f}%")
elif p_normal >= 0.40:
    print(f"⚠️ Uncertain — suggest review (normal confidence {p_normal*100:.1f}%)")
else:
    print(f"❌ Needs Review — normal confidence only {p_normal*100:.1f}%")
