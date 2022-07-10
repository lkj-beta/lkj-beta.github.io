import Navbar from './Navbar';

export default function Page({ children }) {
  return (
    <>
      <header>
        <a href="home.html">
          <img
            src="src/images/larry-king-jazz.jpg"
            alt="Larry King Yazz"
            width="827"
            height="122"
            border="0"
          />
        </a>
      </header>
      <Navbar />
      {children}
      <hr />
      <footer>
        <span>Larry King Productions, Inc.</span> &ndash; 255 West 23rd Street &ndash; Suite #2C-W
        &ndash; New York, NY 10011 USA &ndash; TEL +1 212 627 3282 &ndash; EMAIL{' '}
        <a href="mailto:LKingMusic@gmail.com">LKingMusic@gmail.com</a>
      </footer>
    </>
  );
}
