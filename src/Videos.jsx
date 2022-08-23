import { useContent } from './content';

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
  return (
    <main>
      <h2>{content.title}</h2>
      <div style={{ padding: '0 min(42px, 5vw)' }}>
        <VideoWrapper src="https://www.youtube.com/embed/Gyis1-ghv2E" />
        <VideoWrapper src="https://www.youtube.com/embed/PDLUxvvlFQc" />
        <VideoWrapper src="https://www.youtube.com/embed/9FYeqjCA_wU" />
        <VideoWrapper src="https://www.youtube.com/embed/Aai-U8npvdM" />
        <VideoWrapper src="https://www.youtube.com/embed/lerdG0iCzt0" />
      </div>
    </main>
  );
}
