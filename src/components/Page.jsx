import { useContext } from 'react';
import { useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useContent } from '../content';
import { LanguageContext } from '../LanguageContext';
import FrenchFlag from '../icons/fr.svg';
import USFlag from '../icons/us.svg';

export default function Page({ children }) {
  const content = useContent('page');
  const { pathname } = useLocation();
  const { language, setLanguage } = useContext(LanguageContext);

  const NavItem = useCallback(
    ({ name, to }) => (
      <li>
        <NavLink
          to={`/${to ?? name}`}
          style={{ paddingRight: language === 'en' ? '58px' : '48px' }}
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
        <ul style={{ display: 'grid' }}>
          <NavItem name="home" to="" />
          <NavItem name="about" />
          <NavItem name="audio" />
          <NavItem name="videos" />
          <NavItem name="contact" />
          <div>
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
          </div>
        </ul>
      </nav>
      {children}
      {pathname !== '/' ? <hr /> : null}
      <footer>
        <span>Larry King Productions, Inc.</span> &ndash; 255 West 23rd Street &ndash; Suite #2C-W
        &ndash; New York, NY 10011 USA &ndash; TEL +1 212 627 3282 &ndash; EMAIL{' '}
        <a href="mailto:LKingMusic@gmail.com">LKingMusic@gmail.com</a>
      </footer>
    </div>
  );
}
