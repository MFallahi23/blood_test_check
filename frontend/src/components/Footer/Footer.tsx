import { type FC } from "react";
import "./Footer.scss";
import Socials from "../Socials/Socials";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__made-by">
            Made by Mouhcine Fallahi.
            <span>Bridging Medicine & AI</span>
          </div>
          <div className="footer__warning">
            This is a demonstration project, not for clinical use.
          </div>
          <div className="footer__socials">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
