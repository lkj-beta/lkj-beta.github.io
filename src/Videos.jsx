import { useContent } from './content';

export default function Contact() {
  const content = useContent('videos');
  return (
    <main
      style={{
        backgroundImage: 'URL(images/interior-bgd.jpg)',
        minHeight: '300px',
      }}
    >
      <p className="index-txt">Watch Me Now</p>
      <h1 style={{ color: 'white' }}>{content.hi}</h1>
      <iframe
        title="LJK video player"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Aai-U8npvdM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </main>
  );
}
