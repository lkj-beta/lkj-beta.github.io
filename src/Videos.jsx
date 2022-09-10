import { useContext } from 'react';
import { useContent } from './content';
import { LanguageContext } from './LanguageContext';

const VideoWrapper = props => (
  <div className="videoWrapper">
    <iframe
      title="LJK video player"
      width="560"
      height="315"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    />
  </div>
);

export default function Contact() {
  const content = useContent('videos');
  const { language } = useContext(LanguageContext);
  const frPlayer = language === 'fr' ? '&hl=fr' : '';
  return (
    <main>
      <h2>{content.title}</h2>
      <div style={{ padding: '0 min(42px, 5vw)' }}>
        <VideoWrapper src={`https://www.youtube.com/embed/PDLUxvvlFQc?rel=0${frPlayer}`} />
        <VideoWrapper src={`https://www.youtube.com/embed/9FYeqjCA_wU?rel=0${frPlayer}`} />
        <VideoWrapper src={`https://www.youtube.com/embed/Aai-U8npvdM?rel=0${frPlayer}`} />
        <VideoWrapper src={`https://www.youtube.com/embed/lerdG0iCzt0?rel=0${frPlayer}`} />
        <VideoWrapper src={`https://www.youtube.com/embed/Gyis1-ghv2E?rel=0${frPlayer}`} />
      </div>
    </main>
  );
}
