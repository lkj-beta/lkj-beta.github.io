import { useContent } from './content';
import { useMobileBreakpoint } from './useMobileBreakpoint';
import headshot from '/images/home-headshot.jpeg';
import atPiano from '/images/larry-king-2.jpg';

export default function Home() {
  const content = useContent('home');
  const { isMobile } = useMobileBreakpoint();

  return (
    <>
      <main style={{ display: 'flex', marginTop: '-60px' }}>
        <section style={{ width: '50%', padding: '12px', marginTop: 'min(5vw, 40px)' }}>
          {content}
          {!isMobile ? (
            <img style={{ marginTop: '40px' }} src={atPiano} alt="Larry King playing piano" />
          ) : null}
        </section>
        <section style={{ width: '50%', zIndex: '-1', marginRight: '12px' }}>
          <img
            style={{ opacity: '0.8', marginTop: '12px' }}
            src={headshot}
            alt="Larry King smiling"
          />
        </section>
      </main>
      {isMobile ? (
        <img style={{ marginTop: '24px' }} src={atPiano} alt="Larry King playing piano" />
      ) : null}
    </>
  );
}
