import LinkedinIcon from "../../assets/linkedin.svg?react";
import MailIcon from "../../assets/mail.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import "./Socials.scss";

const Socials = () => {
  return (
    <ul className="socials">
      <li className="socials__item">
        <a
          className="socials__link"
          href="https://www.linkedin.com/in/mouhcine-fallahi-256686243/"
          target="_blank"
        >
          <LinkedinIcon width={30} height={30} />
        </a>
      </li>
      <li className="socials__item">
        <a className="socials__link" href="mailto:mohcinefallahi23@gmail.com">
          <MailIcon width={30} height={30} />
        </a>
      </li>
      <li className="socials__item">
        <a
          className="socials__link"
          href="https://github.com/MFallahi23"
          target="_blank"
        >
          <GithubIcon width={30} height={30} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
