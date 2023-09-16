import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faComments } from "@fortawesome/free-regular-svg-icons";

const Portfolio = () => {
  const emailAddress = "hasanthakariyawasam@gmail.com";
  const phoneNumber = "+94 71 49 25 204";

  const handleClickEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleClickPhone = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="portfolio">
      {/* Your Image */}
      <div className="profile-pic-container">
        <img
          className="profile-pic"
          src="https://i.ibb.co/6Psd4Mb/profile.jpg"
          alt="Hasantha Kariyawasam"
        />
      </div>

      <div className="name-overlay">
        <p className="name">Hasantha Kariyawasam</p>
      </div>

      {/* Description */}
      <p>A Computer Science Undergraduate @ UCSC.</p>

      {/* Social Media Links */}
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/imhasantha/"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.behance.net/hasanthaka1764"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a
          href="https://github.com/iamhasantha"
          target="_blank"
          className="social-icon"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      {/* Download CV Button */}
      <a
        href="https://drive.google.com/file/d/1FiaNsWNLfTmQuD2NtmvseQzum10kPqX6/view?usp=sharing"
        target="_blank"
        download rel="noreferrer"
      >
        <button className="download-cv-button">Download CV</button>
      </a>

      <div className="email-box">
        <p>You can reach out to me at </p>
        <span className="email-link" onClick={handleClickEmail}>
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          {emailAddress}
        </span>
        <span className="contact-link" onClick={handleClickPhone}>
          <FontAwesomeIcon icon={faComments} className="contact-icon" />
          {phoneNumber}
        </span>
      </div>
    </div>
  );
};

export default Portfolio;
