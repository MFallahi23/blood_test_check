import { type FC } from "react";
import "./Header.scss";
import Microscope from "../../assets/microscope.svg?react";
import Socials from "../Socials/Socials";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <div className="header__logo-top">
              <Microscope width={30} height={30} />
              <span className="header__logo-text">Fallahi.</span>
            </div>
            <div className="header__logo-tagline">bridging medicine and AI</div>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-items">
              <li className="header__item">
                <a
                  className="header__link header__link--work"
                  href="https://www.linkedin.com/in/mouhcine-fallahi-256686243/"
                  target="_blank"
                >
                  Hire Me
                </a>
              </li>
              <li className="header__item">
                <a
                  href="#about-me"
                  className="header__link header__link--hide-mobile"
                >
                  About me
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__socials">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
