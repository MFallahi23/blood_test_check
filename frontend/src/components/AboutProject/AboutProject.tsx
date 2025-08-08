import { type FC } from "react";
import "./AboutProject.scss";

const AboutProject: FC = () => {
  return (
    <section className="about-project">
      <div className="container">
        <div className="about-project__wrapper">
          <h3 className="about-project__title">About the Project</h3>
          <p>
            This is an
            <span className="about-project__colored"> AI-powered</span> tool
            designed to assist lab technicians in validating Complete Blood
            Count (CBC) results by detecting suspicious or abnormal patterns
            before human review. I built the entire system, from data generation
            to model training and frontend, combining my
            <strong> medical knowledge</strong> with
            <strong> full-stack</strong> and <strong>ML engineering</strong>.
          </p>

          <p>
            To train the model, I generated
            <span className="about-project__colored">
              {" "}
              realistic CBC datasets
            </span>{" "}
            myself, simulating both normal and pathological cases. For higher
            clinical accuracy, I'm working on incorporating{" "}
            <span className="about-project__colored">
              disease-specific CBC profiles
            </span>{" "}
            (e.g. leukemia, iron-deficiency anemia) to better flag non-typical
            but critical patterns.
          </p>

          <p>
            I used a <strong>Random Forest algorithm</strong> due to its
            robustness, interpretability, and strong performance on tabular
            medical data, making it ideal for handling the complex, non-linear
            relationships between CBC parameters.
          </p>

          <p>
            The tool outputs a classification (<strong>Normal</strong> /{" "}
            <strong>Suspicious </strong> / <strong>Abnormal</strong> ) and a{" "}
            <strong>confidence score</strong> reflecting how physiologically
            typical the results are, not the model's prediction certainty, but
            how normal the values appear based on learned patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
