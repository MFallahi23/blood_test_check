from pydantic import BaseModel

class CBCSample(BaseModel):
    wbc: float
    rbc: float
    hgb: float
    hct: float
    mcv: float
    mch: float
    mchc: float
    rdw: float
    plt: float
    mpv: float
    neut: float 
    lymph: float
    mono: float
    eo: float
    baso: float
