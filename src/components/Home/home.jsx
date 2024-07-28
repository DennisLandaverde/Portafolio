import {
  MapPinIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h2>Dennis Landaverde</h2>
      <a href="../../assets/Dennis_CV.pdf" className="cv-button" download>
        Download CV
      </a>
      <div className="car">
        <div className="text-content">
          <div className="info">
            <div className="info-card">
              <div className="info-item">
                <AcademicCapIcon className="info-icon" /> Software Engineer
              </div>
              <div className="info-item">
                <RocketLaunchIcon className="info-icon" /> Web Development
              </div>
              <div className="info-item">
                <GlobeAltIcon className="info-icon" /> Spanish & English
              </div>
              <div className="info-item">
                <MapPinIcon className="info-icon" /> El Salvador
              </div>
            </div>
          </div>
        </div>
        <img src="../../assets/Dennis.png" alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;
