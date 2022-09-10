import blueHeadshot from '/images/blue.jpg';

export default function Contact() {
  return (
    <main
      style={{
        display: 'flex',
        gap: '10vw',
        padding: '0 5vw 0 4vw',
      }}
    >
      <article className="contactPage" style={{ width: '50%' }}>
        <h2 style={{ marginBottom: 'min(3vw, 25px)' }}>CONTACT</h2>
        <p>
          <span>Larry King Productions, Inc.</span>
        </p>
        <p>255 West 23rd Street</p>
        <p>Suite #2C-W</p>
        <p>New York, NY 10011 USA</p>
        <p>
          TEL <a href="tel:+12126273282">+1 212 627 3282</a>
        </p>
        <p>
          EMAIL <a href="mailto:LKingMusic@gmail.com">LKingMusic@gmail.com</a>
        </p>
      </article>
      <article style={{ width: '50%' }}>
        <img src={blueHeadshot} alt="Larry in a blue light" />
      </article>
    </main>
  );
}
