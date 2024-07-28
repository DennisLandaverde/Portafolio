import { HomeIcon, ComputerDesktopIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import './navBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-buttons">
        <button>
          <HomeIcon className="icon" /> Home
        </button>
        <button>
          <ComputerDesktopIcon className="icon"/> Skills
        </button>
        <button>
          <BriefcaseIcon className="icon"/> Works
        </button>
        <button>
          <EnvelopeIcon className="icon"/> Contact
        </button>
      </div>
     
      <div className="social-icons">
        <a href="https://t.me/tuusuario" target="_blank" aria-label="Telegram">
          <i className="fab fa-telegram-plane"></i>
        </a>
        <a href="https://www.linkedin.com/in/tuusuario" target="_blank" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/tuusuario" target="_blank" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
