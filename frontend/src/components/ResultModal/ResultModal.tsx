import type { FC } from "react";
import "./ResultModal.scss";

interface IResultModal {
  type: "suspicious" | "normal" | "abnormal";
  confidence: number;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultModal: FC<IResultModal> = ({
  type,
  confidence,
  isVisible,
  setIsVisible,
}) => {
  return (
    <>
      <div
        className={`result-modal__bg ${!isVisible && "result-modal__bg--hide"}`}
      ></div>
      <div className={`result-modal ${!isVisible && "result-modal--hide"}`}>
        <div className="result-modal__wrapper">
          <h2 className="result-modal__title">
            {type == "suspicious"
              ? "⚠️ Review Suggested"
              : type == "abnormal"
              ? "❌ Abnormal Results"
              : "✅ No Anomalies Detected"}
          </h2>
          <p className="result-modal__text">
            Normality Score:{" "}
            <span className="result-modal__confidence">{confidence}%</span>
            Indicates how close the results are to normal reference values.
          </p>
          <div className="result-modal__end">
            <button
              className="result-modal__close"
              onClick={() => setIsVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultModal;
