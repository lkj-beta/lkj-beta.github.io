import { useContent } from './content';
import headshot from '../public/images/home-headshot.jpeg'; // 512 x 640
import atPiano from '../public/images/larry-king-2.jpg';

export default function Home() {
  const content = useContent('home');

  return (
    <main style={{ display: 'flex', gap: '8vw' }}>
      <section style={{ width: '50%', padding: '12px' }}>
        {content}
        <img style={{ marginTop: '24px' }} src={atPiano} alt="Larry King playing piano" />
      </section>
      <section style={{ width: '50%', zIndex: '-1', marginRight: '12px' }}>
        <img
          style={{ opacity: '0.8', marginTop: '12px' }}
          src={headshot}
          alt="Larry King smiling"
        />
      </section>
    </main>
  );
}
