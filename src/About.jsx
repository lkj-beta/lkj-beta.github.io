import { useContent } from './content';
import pianoStrip from '/images/piano-strip.jpg';
import larryAbout from '/images/new_larry.jpeg';

export default function About() {
  const content = useContent('about');
  return (
    <main style={{ padding: '0 2.5vw', marginBottom: '20px', marginTop: '-10px' }}>
      <article style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={{ marginBottom: 0 }}>{content.title}</h2>
        <section>{content.first}</section>
        <section>{content.second}</section>
        <img src={pianoStrip} alt="Larry Playing Piano" />
        <section>{content.third}</section>
        <section style={{ display: 'flex', gap: '2vw' }}>
          <aside style={{ width: '70%' }}>
            <div style={{ marginBottom: '20px' }}>{content.fourth}</div>
            {content.fifth}
          </aside>
          <aside style={{ width: '30%' }}>
            <img src={larryAbout} alt="Larry Posing" />
          </aside>
        </section>
      </article>
    </main>
  );
}
