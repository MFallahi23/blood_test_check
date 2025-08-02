from pydantic import BaseModel

class CBCSample(BaseModel):
    WBC: float
    RBC: float
    HGB: float
    HCT: float
    MCV: float
    MCH: float
    MCHC: float
    RDW: float
    PLT: float
    MPV: float
    NEUT_percent: float  # NEUT%
    LYMPH_percent: float
    MONO_percent: float
    EO_percent: float
    BASO_percent: float
