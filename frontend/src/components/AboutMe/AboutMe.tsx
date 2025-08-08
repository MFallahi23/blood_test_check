import { type FC } from "react";
import fallahiImg from "../../assets/fallahi.jpg";
import "./AboutMe.scss";

const AboutMe: FC = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <div className="about-me__wrapper">
          <h3 className="about-me__title">About me</h3>
          <div className="about-me__content">
            <img
              className="about-me__img"
              src={fallahiImg}
              width={300}
              height={300}
              alt="Photo of Dr. Fallahi"
            />
            <div className="about-me__text">
              <p>
                I'm Mouhcine Fallahi, a <strong>medical student</strong> based
                in Casablanca, Morocco, with a strong background in{" "}
                <span className="about-me__colored">
                  full-stack development{" "}
                </span>{" "}
                and <span className="about-me__colored">AI</span> . I specialize
                in building <strong>health tech tools</strong> using React.js,
                Node.js, Express, Astro, Python, and applied AI.
              </p>
              <p>
                I'm particularly skilled in{" "}
                <span className="about-me__colored">system design</span> and{" "}
                <span className="about-me__colored">software architecture</span>{" "}
                for <strong>medical applications</strong> , with a solid
                understanding of{" "}
                <span className="about-me__colored">algorithms</span> and real{" "}
                <span className="about-me__colored">clinical workflows</span> .
              </p>
              <p>
                Driven by impact, I aim to build scalable, accurate, and
                user-centered solutions for <strong> diagnostics</strong> and{" "}
                <strong>healthcare delivery</strong> .
              </p>
              <p>
                I'm actively seeking to collaborate with{" "}
                <strong>startups</strong> , <strong>clinics</strong> ,{" "}
                <strong>labs</strong> , and <strong>innovation centers </strong>{" "}
                shaping the future of medicine through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
