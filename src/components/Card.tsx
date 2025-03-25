import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter);
import "./Card.scss";
import { User } from "../types/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<User>();
  const navigate = useNavigate(); // Hook'u component içinde tanımlayın

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${id}`)
      .then((res) => res.json())
      .then((veri) => setProfile(veri.results[0]));
  }, []);

  if (!profile) return;

  return (
    <div className="card-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        BACK
      </button>
      <div className="card">
        <div className="photo">
          <img src={profile.picture.large} alt={profile.name.first} />

          <p></p>
        </div>
        <div className="text-area">
          <h2>
            {profile.name.first} {profile.name.last}
          </h2>
          <span>{profile.location.country}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, maxime. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Magnam, libero.
          </p>
        </div>
        <div className="mail">
          <span> {profile.email}</span>
        </div>
        <div className="social-links">
          <div className="link">
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="link">
            <a href="">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="link">
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="link">
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className="link">
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
