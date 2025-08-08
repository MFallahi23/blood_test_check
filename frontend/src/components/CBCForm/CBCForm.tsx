import { useState, type FC } from "react";
import CustomInput from "../CustomInput/CustomInput";
import "./CBCForm.scss";
import { sendCBC, type ICBC } from "../../api/cbc";
import ResultModal from "../ResultModal/ResultModal";
import toast from "react-hot-toast";

const CBCForm: FC = () => {
  const [resultType, setResultType] = useState<
    "suspicious" | "normal" | "abnormal"
  >("normal");
  const [confidence, setConfidence] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    for (const [_, value] of Object.entries(data)) {
      if (value.trim() === "") {
        toast.error(`Please fill in all the fields before submitting.`);
        return;
      }
      if (isNaN(Number(value))) {
        toast.error(`Invalid input`);
        return;
      }
    }

    const cbcData: ICBC = {
      rbc: parseFloat(data.rbc),
      hgb: parseFloat(data.hgb),
      hct: parseFloat(data.hct),
      mcv: parseFloat(data.mcv),
      mch: parseFloat(data.mch),
      mchc: parseFloat(data.mchc),
      rdw: parseFloat(data.rdw),
      plt: parseFloat(data.plt),
      mpv: parseFloat(data.mpv),
      wbc: parseFloat(data.wbc),
      neut: parseFloat(data.neut),
      lymph: parseFloat(data.lymph),
      mono: parseFloat(data.mono),
      eo: parseFloat(data.eo),
      baso: parseFloat(data.baso),
    };

    const { label, confidence } = await sendCBC(cbcData);
    setResultType(label);
    setConfidence(confidence);
    setIsVisible(true);
  };

  return (
    <section className="cbc">
      <h1 className="visually-hidden">
        AI-Powered Complete Blood Count Analyzer: Prototype by Mouhcine,
        Aspiring Health Tech Specialist
      </h1>
      <div className="container">
        <h2 className="cbc__title">
          AI-Powered{" "}
          <span className="cbc__title-colored">Complete Blood Count</span>
          (CBC) Analyzer
        </h2>
        <form action="#" className="cbc__form" onSubmit={handleSubmit}>
          <div className="cbc__form-wrapper">
            <CustomInput
              label="RBC (Red Blood Cells)"
              id="rbc"
              unit="x10^6/µL"
            />
            <CustomInput label="HGB (Hemoglobin)" id="hgb" unit="g/dL" />
            <CustomInput label="HCT (Hematocrit)" id="hct" unit="%" />
            <CustomInput
              label="MCV (Mean Corpuscular Volume)"
              id="mcv"
              unit="fL"
            />
            <CustomInput
              label="MCH (Mean Corpuscular Hemoglobin)"
              id="mch"
              unit="pg"
            />
            <CustomInput
              label="MCHC (Mean Corpuscular Hemoglobin Concentration)"
              id="mchc"
              unit="g/dL"
            />
            <CustomInput
              label="RDW (Red Cell Distribution Width)"
              id="rdw"
              unit="%"
            />
            <CustomInput label="PLT (Platelets)" id="plt" unit="x10^3/µL" />
            <CustomInput
              label="MPV (Mean Platelet Volume)"
              id="mpv"
              unit="fL"
            />
            <CustomInput
              label="WBC (White Blood Cells)"
              id="wbc"
              unit="x10^3/µL"
            />
            <CustomInput
              label="NEUT% (Neutrophils Percentage)"
              id="neut"
              unit="%"
            />
            <CustomInput
              label="LYMPH% (Lymphocytes Percentage)"
              id="lymph"
              unit="%"
            />
            <CustomInput
              label="MONO% (Monocytes Percentage)"
              id="mono"
              unit="%"
            />
            <CustomInput
              label="EO% (Eosinophils Percentage)"
              id="eo"
              unit="%"
            />
            <CustomInput
              label="BASO% (Basophils Percentage)"
              id="baso"
              unit="%"
            />
          </div>
          <button className="cbc__submit">Review CBC</button>
        </form>
      </div>
      <ResultModal
        type={resultType}
        confidence={confidence}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </section>
  );
};

export default CBCForm;
