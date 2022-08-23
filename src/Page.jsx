import { useContext } from 'react';
import { useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useContent } from './content';
import { LanguageContext } from './LanguageContext';
import FrenchFlag from './icons/fr.svg';
import USFlag from './icons/us.svg';

export default function Page({ children }) {
  const content = useContent('page');
  const { pathname } = useLocation();
  const { setLanguage } = useContext(LanguageContext);

  const NavItem = useCallback(
    ({ name, to, style: customStyle }) => (
      <li>
        <NavLink
          style={{ ...customStyle }}
          to={`/${to ?? name}`}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {content[name]}
        </NavLink>
      </li>
    ),
    [content]
  );

  return (
    <div className="page">
      <a href="/" tabIndex={-1}>
        <header>
          <h1>LARRY KING JAZZ</h1>
        </header>
      </a>
      <hr />
      <nav>
        <ul className="gridTop">
          <NavItem name="home" to="" />
          <NavItem name="about" />
          <NavItem name="audio" />
          <NavItem name="videos" />
          <NavItem name="contact" />
          <li
            style={{
              border: 'none',
              zIndex: 1,
              background:
                'linear-gradient(to right bottom, rgba(98, 0, 28, 0.95), rgba(0, 0, 0, 0.43))',
              paddingBottom: '16px',
            }}
          />
          <li />
          <li>
            <button
              aria-label="change language to english"
              onClick={() => setLanguage('en')}
              style={{ backgroundImage: `url(${USFlag})` }}
            />
            <button
              aria-label="change language to french"
              onClick={() => setLanguage('fr')}
              style={{ backgroundImage: `url(${FrenchFlag})` }}
            />
          </li>
        </ul>
        <ul className="gridBottom">
          <NavItem name="home" to="" />
          <NavItem name="about" />
          <NavItem name="audio" />
          <NavItem name="videos" />
          <NavItem
            name="contact"
            style={{
              height: 'min(8.5vw, 74px)',
              background: 'linear-gradient(to left top, rgb(64, 42, 119) 10%, rgba(0, 0, 0, 0.43))',
            }}
          />
          <li style={{ border: 'none' }} />
          <li />
          <li
            style={{
              marginTop: '-1.25vw',
              height: 'min(7vw, 55px)',
              background: 'linear-gradient(to left top, rgb(64, 42, 119) 5%, rgba(0, 0, 0, 0.43))',
            }}
          />
        </ul>
      </nav>
      {children}
      {pathname !== '/' ? <hr style={{ marginTop: '4vw' }} /> : null}
      <footer>
        <span>Larry King Productions, Inc.</span> &ndash; 255 West 23rd Street &ndash; Suite #2C-W
        &ndash; New York, NY 10011 USA &ndash; TEL <a href="tel:+12126273282">+1 212 627 3282</a>{' '}
        &ndash; EMAIL <a href="mailto:LKingMusic@gmail.com">LKingMusic@gmail.com</a>
      </footer>
    </div>
  );
}
