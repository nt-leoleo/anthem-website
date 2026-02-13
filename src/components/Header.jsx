import "../styles/Header.scss";
import logo from '../public/picsvg_download.svg'
import background from '../public/background-header.jpg'

const Header = () => {
  return (
    <header id="home" className="header">
      <img 
        src={background} 
        alt="livePerforming" 
        className="background" 
      />
      <img src={logo} 
        alt="ANTHEM" 
        className="logo" 
      />
      <p>Deathcore desde San Luis, Argentina.</p>
    </header>
  );
}

export default Header;
