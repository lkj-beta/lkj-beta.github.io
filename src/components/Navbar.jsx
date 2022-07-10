import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

export default function Navbar() {
  const { setLanguage } = useContext(LanguageContext);
  return (
    <nav>
      <img
        src="src/images/navbar.jpg"
        width="827"
        height="49"
        border="0"
        usemap="#Map"
        id="Image1"
      />
      <map name="Map" id="Map">
        <area
          shape="rect"
          coords="3,5,99,39"
          href="home.html"
          onmouseover="MM_swapImage('Image1','','images/navbar-home.jpg',1)"
          onmouseout="MM_swapImgRestore()"
        />
        <area
          shape="rect"
          coords="105,4,201,41"
          href="about-larry-king-jazz.html"
          onmouseover="MM_swapImage('Image1','','images/navbar-about.jpg',1)"
          onmouseout="MM_swapImgRestore()"
        />
        <area
          shape="rect"
          coords="210,4,302,40"
          href="audio.html"
          onmouseover="MM_swapImage('Image1','','images/navbar-audio.jpg',1)"
          onmouseout="MM_swapImgRestore()"
        />
        <area
          shape="rect"
          coords="306,4,410,39"
          href="videos.html"
          onmouseover="MM_swapImage('Image1','','images/navbar-videos.jpg',1)"
          onmouseout="MM_swapImgRestore()"
        />
        <area
          shape="rect"
          coords="414,4,525,39"
          href="contact-larry-king-jazz.html"
          onmouseover="MM_swapImage('Image1','','images/navbar-contact.jpg',1)"
          onmouseout="MM_swapImgRestore()"
        />
        <area shape="rect" coords="768,9,799,35" onClick={() => setLanguage('en')} />
        <area shape="rect" coords="801,7,829,35" onClick={() => setLanguage('fr')} />
      </map>
      <Link to="contact">CONTACT ME!</Link>
    </nav>
  );
}
