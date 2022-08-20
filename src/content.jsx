import { useContext, useMemo } from 'react';
import { LanguageContext } from './LanguageContext';

const copy = {
  en: {
    page: {
      home: 'home',
      about: 'about',
      audio: 'audio',
      videos: 'videos',
      contact: 'contact',
    },
    about: {},
    audio: {},
    home: (
      <p>
        <mark>LARRY KING</mark> is a highly regarded American jazz PIANIST-SINGER who began
        appearing at leading Manhattan night spots and cabarets as a teenager and has performed
        continuously over five decades at an amazing variety of top New York venues with{' '}
        <em>The Larry King Jazz Trio</em> and his big dance band <em>The Larry King Orchestra</em>.{' '}
        <a href="/about">READ MORE</a>
      </p>
    ),
    videos: {
      hi: 'hi there!',
    },
    contact: {},
  },
  fr: {
    page: {
      home: 'accueil',
      about: 'à propos',
      audio: 'audio',
      videos: 'vidéos',
      contact: 'contact',
    },
    about: {},
    audio: {},
    home: (
      <p lang="fr">
        <mark>LARRY KING</mark> est un pianiste et chanteur de jazz Américain très apprécié qui a
        commencé sa carrière dans les boîtes de nuit et les cabarets cotés de Manhattan dès son
        adolescence. Il se produit régulièrement pendant de nombeuses années sur les scènes les plus
        célèbres et variées de New York avec <em>The Larry King Jazz Trio</em> et son grand
        orchestre de danse, <em>The Larry King Orchestra</em>.
        <a href="/about">&nbsp;LIRE LA SUITE</a>
      </p>
    ),
    videos: {
      hi: 'bonjour!',
    },
    contact: {},
  },
};

const useContent = section => {
  const { language } = useContext(LanguageContext);
  const content = useMemo(() => copy[language][section], [language]);

  return content;
};

export { useContent };
