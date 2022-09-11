import { useContent } from './content';
import pianoStrip from '/images/piano-strip.jpg';
import larryAbout from '/images/new_larry.jpeg';
import { useMobileBreakpoint } from './useMobileBreakpoint';

export default function About() {
  const content = useContent('about');
  const { isMobile } = useMobileBreakpoint();

  return (
    <main style={{ padding: '0 2.5vw', marginBottom: '20px', marginTop: '-10px' }}>
      <article style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ marginBottom: 0 }}>{content.title}</h2>
        <section>{content.first}</section>
        <img src={pianoStrip} alt="Larry Playing Piano" />
        <section>{content.second}</section>
        <section>{content.third}</section>
        <section style={{ display: 'flex', gap: '2vw' }}>
          <aside style={{ width: isMobile ? '100%' : '70%' }}>
            {isMobile ? (
              <img
                src={larryAbout}
                style={{ width: '80%', margin: '0 13% 10px 7%' }}
                alt="Larry Posing"
              />
            ) : null}
            <div style={{ marginBottom: '20px' }}>{content.fourth}</div>
            {content.fifth}
          </aside>
          {!isMobile ? (
            <aside style={{ width: '30%' }}>
              <img src={larryAbout} alt="Larry Posing" />
            </aside>
          ) : null}
        </section>
      </article>
    </main>
  );
}
