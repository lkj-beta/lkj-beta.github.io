import { useState } from 'react';
import { useContent } from './content';

import rainbowConnection from '/music/Rainbow_Connection.mp3';
import sway from '/music/Sway.mp3';
import getOutOfTown from '/music/Get-Out-of-Town.mp3';
import whenInRome from '/music/When-in-Rome.mp3';
import likeSomeoneInLove from '/music/Like_Someone_In_Love.mp3';
import touchOfYourLips from '/music/The_Touch_Of_Your_Lips.mp3';
import believeInSpring from '/music/You_Must_Believe_In_Spring.mp3';
import lookAtMeNow from '/music/Oh_Look_At_Me_Now.mp3';
import weAreInLove from '/music/We_Are_In_Love.mp3';
import serenadeMedley from '/music/Moonlight_Serenade.mp3';
import sinatraMedley from '/music/Sinatra_Medley.mp3';
import unforgettable from '/music/Unforgettable.mp3';
import larryPiano from '/images/larry_piano_2.jpeg';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';

/* eslint-disable jsx-a11y/media-has-caption */
export default function Audio() {
  const content = useContent('audio');
  const [track, setTrack] = useState();
  const ref = useRef(null);

  const TrackButton = ({ src, title }) => (
    <button
      style={{ textAlign: 'left' }}
      onClick={() => {
        ref.src = src;
        ref.current.load();
        ref.current.play();
        setTrack(title);
      }}
    >
      {title}
    </button>
  );

  return (
    <main style={{ display: 'flex' }}>
      <article style={{ width: '50%' }}>
        <h2>AUDIO</h2>
        <p className="subtitle">{content.subtitle}</p>
        <ul className="trackButton">
          <TrackButton src={whenInRome} title="When in Rome" />
          <TrackButton src={getOutOfTown} title="Get Out of Town" />
          <TrackButton src={sway} title="Sway" />
          <TrackButton src={likeSomeoneInLove} title="Like Someone in Love" />
          <TrackButton src={touchOfYourLips} title="The Touch of Your Lips" />
          <TrackButton src={rainbowConnection} title="The Rainbow Connection" />
          <TrackButton src={serenadeMedley} title="Moonlight Serenade / Serenade in Blue" />
          <TrackButton src={sinatraMedley} title="Sinatra Medley" />
          <TrackButton src={unforgettable} title="Unforgettable" />
          <TrackButton src={believeInSpring} title="You Must Believe In Spring" />
          <TrackButton src={lookAtMeNow} title="Oh, Look At Me Now" />
          <TrackButton src={weAreInLove} title="We Are In Love" />
        </ul>
      </article>
      <article
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          marginTop: track ? 'max(56px, 4vw)' : '0',
          transition: 'all 300ms',
        }}
      >
        <Transition in={!!track} timeout={450}>
          {state => (
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: `opacity ${450}ms ease-in-out`,
                opacity: state === 'entered' || state === 'entering' ? 1 : 0,
              }}
            >
              <h3>{track}</h3>
              <hr className="linearHr" />
              <audio
                controls
                controlsList="nodownload"
                ref={ref}
                style={{
                  width: '85%',
                  margin: '24px 0',
                  alignSelf: 'center',
                }}
              >
                <source src={ref.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <hr className="linearHr" style={{ marginBottom: '20px' }} />
            </div>
          )}
        </Transition>

        <img
          style={{ margin: '0 auto', maxWidth: '305px' }}
          src={larryPiano}
          alt="Larry at the piano"
        />
      </article>
    </main>
  );
}
